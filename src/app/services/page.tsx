import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-foreground selection:text-background flex flex-col">
      <Header />
      
      <div className="pt-[100px] lg:pt-[150px] flex-grow">
        <Services layout="grid" />
      </div>
      <Footer />
    </main>
  );
}
