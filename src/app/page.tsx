import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Showroom } from "@/components/Showroom";
import { Reviews } from "@/components/Reviews";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 selection:bg-zinc-900 selection:text-white">
      <Header />
      <Hero />
      <Services />
      <Showroom />
      <Reviews />
      <ContactForm />
      <Footer />
    </main>
  );
}
