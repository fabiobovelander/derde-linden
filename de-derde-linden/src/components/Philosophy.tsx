import { motion } from 'motion/react';
import { ArrowRight, Leaf, Users, TrendingUp } from 'lucide-react';

const philosophyPoints = [
  {
    icon: <Leaf className="w-8 h-8 text-[#388E3C]" />,
    title: "Duurzame Groei",
    description: "Wij bouwen ondernemingen die generaties overstijgen, met een focus op lange termijn waarde in plaats van snelle winst."
  },
  {
    icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
    title: "Gemeenschap",
    description: "Onze merken brengen mensen samen rond eten, gezondheid en beleving, versterkend voor de lokale gemeenschap."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#1A237E]" />,
    title: "Innovatie",
    description: "Van retail tot vastgoed, wij blijven vernieuwen en schalen met behoud van kwaliteit en vakmanschap."
  }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F0E6] opacity-50 skew-x-12 translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#5D4037] mb-8 leading-tight">
              Ondernemen met <span className="text-[#D4AF37] italic">Visie</span>
            </h2>
            <p className="text-lg text-[#5D4037]/80 mb-6 leading-relaxed">
              De Derde Linden is ontstaan uit een rijke historie van retail-ondernemerschap. Wat begon als een enkele winkel, is uitgegroeid tot een veelzijdig ecosysteem van bedrijven.
            </p>
            <p className="text-lg text-[#5D4037]/80 mb-8 leading-relaxed">
              Onze kracht ligt in het herkennen van potentieel en het cultiveren van merken die een positieve impact hebben op het dagelijks leven van consumenten.
            </p>
            
            <button className="group flex items-center gap-2 text-[#1A237E] font-bold uppercase tracking-widest hover:gap-4 transition-all">
              Ontdek onze geschiedenis <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <div className="grid gap-8">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#F5F0E6] p-8 rounded-2xl hover:shadow-lg transition-shadow border border-[#D4AF37]/20"
              >
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-serif font-bold text-[#5D4037] mb-2">{point.title}</h3>
                <p className="text-[#5D4037]/70">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
