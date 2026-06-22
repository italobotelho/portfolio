import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutMe />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  );
}
