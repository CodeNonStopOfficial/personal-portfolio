import { requiredAdmin } from "@/app/data/admin/required-admin";
import { tigris } from "@/lib/trigirs";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await requiredAdmin();
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return Response.json({ error: "File is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const key = `uploads/${Date.now()}-${file.name}`;

    await tigris.send(
      new PutObjectCommand({
        Bucket: process.env.TIGRIS_BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: file.type,
      }),
    );
    return NextResponse.json({
      success: true,
      key,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Sever Error to Generate PreSignedUrl..!",
      },
      { status: 500 },
    );
  }
}
