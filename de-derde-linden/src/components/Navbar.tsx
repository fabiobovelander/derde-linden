import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'philosophy', label: 'Filosofie' },
  { id: 'ventures', label: 'Ondernemingen' },
  { id: 'about', label: 'Over Ons' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F5F0E6]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-[#5D4037] tracking-tighter cursor-pointer" onClick={() => scrollToSection('hero')}>
          De Derde Linden
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[#5D4037] hover:text-[#D4AF37] transition-colors font-medium text-sm uppercase tracking-widest"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#1A237E] text-white px-6 py-2 rounded-full hover:bg-[#D4AF37] transition-colors font-medium"
          >
            Samenwerken
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#5D4037]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#F5F0E6] shadow-xl border-t border-[#D4AF37]/20 lg:hidden flex flex-col p-6 gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-xl font-serif text-[#5D4037] py-2 border-b border-[#5D4037]/10"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
