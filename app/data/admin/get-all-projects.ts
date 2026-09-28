import "server-only"
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";


export async function getAllProject(){
    const data = await prisma.project.findMany({
        select : {
             title : true,
             smallDescription : true,
             description :true,
             image : true,
             liveUrl :true,
             githubUrl :true,
        },
        orderBy : {
            createdAt : "desc"
        }
    });
    if(!data) {
         return notFound();
    }
   
    return data;
}

export type ProjectAllType = Awaited<ReturnType<typeof getAllProject>>[0];