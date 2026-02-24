import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1A237E] text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#388E3C] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Bouw mee aan <br/>
              <span className="text-[#D4AF37]">de toekomst</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-lg">
              Bent u geïnteresseerd in samenwerking, franchise mogelijkheden of wilt u meer weten over onze projecten? Neem contact met ons op.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Hoofdkantoor</h3>
                  <p className="text-white/70">Lindenlaan 33, 1015 AK Amsterdam</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-white/70">info@dederdelinden.nl</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Telefoon</h3>
                  <p className="text-white/70">+31 (0)20 123 4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-[#5D4037] p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Voornaam</label>
                  <input type="text" className="w-full bg-[#F5F0E6] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#D4AF37]" placeholder="Jan" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Achternaam</label>
                  <input type="text" className="w-full bg-[#F5F0E6] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#D4AF37]" placeholder="Jansen" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                <input type="email" className="w-full bg-[#F5F0E6] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#D4AF37]" placeholder="jan@voorbeeld.nl" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Bericht</label>
                <textarea rows={4} className="w-full bg-[#F5F0E6] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#D4AF37]" placeholder="Uw bericht..." />
              </div>

              <button className="w-full bg-[#1A237E] text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-[#D4AF37] transition-colors">
                Verstuur Bericht
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
