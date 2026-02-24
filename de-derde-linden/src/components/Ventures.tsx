import { motion } from 'motion/react';

const ventures = [
  {
    name: "Freshcompany",
    category: "Horeca & Food",
    description: "Overkoepelende organisatie voor diverse food-concepten met focus op versheid en kwaliteit.",
    image: "https://picsum.photos/seed/fresh/800/600?blur=2"
  },
  {
    name: "Wings Paradise",
    category: "Fast Casual Dining",
    description: "Een unieke kipbeleving waar smaak en sfeer samenkomen voor een breed publiek.",
    image: "https://picsum.photos/seed/wings/800/600?blur=2"
  },
  {
    name: "De Pizzabakkers",
    category: "Franchise",
    description: "Ambachtelijke pizza's en prosecco in een gezellige buurtsetting.",
    image: "https://picsum.photos/seed/pizza/800/600?blur=2"
  },
  {
    name: "Amazing Fusion",
    category: "Asian Cuisine",
    description: "Innovatieve Aziatische gerechten die traditie combineren met moderne smaken.",
    image: "https://picsum.photos/seed/fusion/800/600?blur=2"
  }
];

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 bg-[#5D4037] text-[#F5F0E6]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] uppercase tracking-widest font-medium">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4">Onze Ondernemingen</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={venture.image}
                alt={venture.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider mb-2 block">
                  {venture.category}
                </span>
                <h3 className="text-3xl font-serif font-bold mb-2">{venture.name}</h3>
                <p className="text-white/80 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                  {venture.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
