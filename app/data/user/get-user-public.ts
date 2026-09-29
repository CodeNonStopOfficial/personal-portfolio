import { prisma } from "@/lib/prisma";

export async function GetUserPublic(){
    const user = await prisma.user.findUnique({
         where : {
             role : "admin"
         }
    });
    return user;
}

export type UserPublicAdminType = NonNullable<Awaited<ReturnType<typeof GetUserPublic>>>