import { AboutSection } from "../_components/AboutSection";
import { EducationSection } from "../_components/EducationSection";
import { GetUserPublic } from "@/app/data/user/get-user-public";
import { notFound } from "next/navigation";

export default async function AboutPage() {
  const user = await GetUserPublic();
  if(!user){
     return notFound();
  }
  return (
    <div>
      <AboutSection user={user} />
      <EducationSection />
    </div>
  );
}
