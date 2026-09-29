import { notFound } from "next/navigation";
import { GetUserPublic } from "../data/user/get-user-public";
import { AboutSection } from "./_components/AboutSection";

export default async function HomePage() {
  const user = await GetUserPublic();
  if(!user){
     return notFound()
  }
  return (
    <div className="max-w-full flex flex-col items-center justify-center">
      <AboutSection user={user} />
    </div>
  );
}
