import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Portfolio />
      <BackToTop />
    </main>
  );
}
