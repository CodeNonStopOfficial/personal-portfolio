import { getCurrentUser } from "../data/admin/get-current-user";
import { AboutSection } from "./_components/AboutSection";


export default async  function HomePage() {
  const user = await getCurrentUser();
  if(!user){
    return null
  }
  return (
     <div className="max-w-full flex flex-col items-center justify-center">
        <AboutSection user={user}/>
     </div>
  );
}
