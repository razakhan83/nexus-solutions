import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-zinc-50 selection:bg-purple-900 selection:text-white">
      <Header />
      
      {/* 
        We reuse the Services component from the homepage. 
        It naturally fits the layout and has its own padding.
      */}
      <div className="pt-16">
        <Services />
      </div>
      
      <ContactForm />
      <Footer />
    </main>
  );
}
