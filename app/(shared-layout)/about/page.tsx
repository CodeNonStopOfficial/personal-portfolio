import { getCurrentUser } from "@/app/data/admin/get-current-user";
import { AboutSection } from "../_components/AboutSection";
import { EducationSection } from "../_components/EducationSection";

export default async function AboutPage() {
  const user = await getCurrentUser();
  if (!user) {
    return null;
  }
  return (
    <div>
      <AboutSection user={user} />
      <EducationSection />
    </div>
  );
}
