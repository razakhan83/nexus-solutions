import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-foreground selection:text-background flex flex-col">
      <Header />
      
      <div className="pt-8 lg:pt-12 flex-grow">
        <Services />
      </div>
      
      <ContactForm />
      <Footer />
    </main>
  );
}
