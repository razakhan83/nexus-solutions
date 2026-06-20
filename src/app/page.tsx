import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Services } from "@/components/Services";
import { Showroom } from "@/components/Showroom";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 selection:bg-primary selection:text-white">
      <Header />
      <Hero />
      <WhoWeAre />
      <Services />
      <Showroom />
      <Reviews />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}
