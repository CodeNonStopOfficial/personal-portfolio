import "server-only"
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function getCurrentUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user?.role != "admin") {
    return null;
  }

  return prisma.user.findUnique({
    where: {
      id : session?.user.id,
      role : session?.user.role
    },
  });
}
// type CurrentUser = NonNullable<
//   Awaited<ReturnType<typeof getCurrentUser>>
// >;
// export type GetCureentUserType = Awaited<ReturnType<typeof getCurrentUser>>;

export type CurrentUserType = NonNullable<
  Awaited<ReturnType<typeof getCurrentUser>>
>;