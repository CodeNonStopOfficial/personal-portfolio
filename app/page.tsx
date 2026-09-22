import About from "@/components/shared/About";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
       <Navbar/>
       <main>
          <Hero/>
          <About/>
       </main>
    </div>
  );
}
