import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F5F0E6] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-[#D4AF37] rounded-3xl z-0" />
            <img 
              src="https://picsum.photos/seed/meeting/800/1000?blur=2" 
              alt="Team meeting" 
              className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5D4037] mb-6">
              Drie Generaties <br/>
              <span className="text-[#D4AF37]">Vakmanschap</span>
            </h2>
            
            <div className="space-y-6 text-lg text-[#5D4037]/80">
              <p>
                De Derde Linden is meer dan een holding; het is een familie-erfenis die zich blijft evolueren. Wat begon met een passie voor retail, is uitgegroeid tot een breed portfolio dat reikt van horeca tot vastgoed en gezondheid.
              </p>
              <p>
                Wij geloven in de kracht van samenwerking en innovatie. Door te investeren in mensen en ideeën, creëren we duurzame waarde die verder gaat dan de balans. Onze focus ligt op kwaliteit, authenticiteit en het bouwen van merken die mensen raken.
              </p>
              <p>
                Of het nu gaat om het serveren van de perfecte pizza, het ontwikkelen van een nieuwe fitnesslocatie of het realiseren van innovatief vastgoed: wij doen het met toewijding en oog voor detail.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#5D4037]/10 pt-8">
              <div>
                <span className="block text-4xl font-serif font-bold text-[#1A237E]">3+</span>
                <span className="text-sm uppercase tracking-wider text-[#5D4037]">Generaties</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-[#1A237E]">15+</span>
                <span className="text-sm uppercase tracking-wider text-[#5D4037]">Merken</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-[#1A237E]">100+</span>
                <span className="text-sm uppercase tracking-wider text-[#5D4037]">Locaties</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
