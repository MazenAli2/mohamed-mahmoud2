import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background mesh-gradient relative overflow-x-hidden">
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full h-16 md:h-20 glass z-50 border-none flex items-center justify-between px-6 md:px-10">
        <div className="text-xl md:text-2xl font-black gradient-text tracking-tighter">MOHAMED MAHMOUD</div>
        <div className="hidden md:flex gap-8 text-sm font-bold">
            <a href="#contact" className="hover:text-accent-2 transition-colors">تواصل معي</a>
            <a href="#portfolio" className="hover:text-accent-2 transition-colors">أعمالي</a>
            <a href="#services" className="hover:text-accent-2 transition-colors">خدماتي</a>
        </div>
      </div>

      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
      
      <WhatsAppButton />

      {/* Footer */}
      <footer className="py-12 border-t border-accent/10 text-center opacity-40 text-sm font-medium">
        <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لمحمد محمود - خبير الميديا باينج</p>
      </footer>
    </main>
  );
}
