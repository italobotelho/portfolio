import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="h-screen w-full snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">
      <Hero />
      <Portfolio />
      <Services />
    </main>
  );
}
