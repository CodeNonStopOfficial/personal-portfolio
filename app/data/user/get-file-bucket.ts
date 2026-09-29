import { tigris } from "@/lib/trigirs";
import { DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function getImageUrl(key: string | null) {
  if (!key) return null;

  return getSignedUrl(
    tigris,
    new GetObjectCommand({
      Bucket: process.env.TIGRIS_BUCKET_NAME!,
      Key: key,
    }),
    {
      expiresIn: 60 * 60,
    }
  );
}

export async function deleteImage(key: string | null) {
  if (!key) {
    return;
  }

  await tigris.send(
    new DeleteObjectCommand({
      Bucket: process.env.TIGRIS_BUCKET_NAME!,
      Key: key,
    })
  );
}