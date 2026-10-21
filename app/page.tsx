import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Estimator from "@/components/Estimator";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Estimator />
      <Services />
      <Work />
      <Pricing />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
