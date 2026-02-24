import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#5D4037] text-[#F5F0E6] py-12 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-4">De Derde Linden</h2>
          <p className="max-w-sm text-sm opacity-80 leading-relaxed">
            Een holdingmaatschappij geworteld in drie generaties ondernemerschap. Wij bouwen aan een duurzame toekomst in retail, horeca en vastgoed.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-[#D4AF37]">Navigatie</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors text-left">Home</button></li>
            <li><button onClick={() => scrollToSection('philosophy')} className="hover:text-white transition-colors text-left">Filosofie</button></li>
            <li><button onClick={() => scrollToSection('ventures')} className="hover:text-white transition-colors text-left">Ondernemingen</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors text-left">Over Ons</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-[#D4AF37]">Socials</h3>
          <div className="flex gap-4">
            <button className="hover:text-[#D4AF37] transition-colors"><Linkedin size={20} /></button>
            <button className="hover:text-[#D4AF37] transition-colors"><Instagram size={20} /></button>
            <button className="hover:text-[#D4AF37] transition-colors"><Facebook size={20} /></button>
            <button className="hover:text-[#D4AF37] transition-colors"><Twitter size={20} /></button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-xs opacity-50">
        &copy; {new Date().getFullYear()} De Derde Linden B.V. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
