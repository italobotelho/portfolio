import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
      <BackToTop />
    </main>
  );
}
