'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function EssencePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#C6A87C] overflow-hidden relative">
      <Navbar />
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-[-10vw] text-[40vw] font-serif italic text-white/5 select-none pointer-events-none z-0 leading-none">
        {"Ē"}
      </div>

      <div className="relative z-10 pt-40 px-8 md:px-24 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-bold tracking-[0.5em] uppercase opacity-40 block mb-8">The Maison of Clive Christen</span>
          <h1 className="text-7xl md:text-[9rem] font-serif leading-[0.8] mb-32 text-white">
            The Essence <br/> 
            <span className="text-[#C6A87C] opacity-50 font-light italic">of Presence.</span>
          </h1>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-64">
           {/* Visual Monolith */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5 }}
             className="aspect-[4/5] bg-[#111] rounded-sm relative overflow-hidden group shadow-2xl"
           >
              <img src="https://m.media-amazon.com/images/I/91pAmUssrmL.jpg" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12">
                 <p className="text-xs tracking-widest uppercase opacity-40">Plate 01: Liquid Rarity</p>
              </div>
           </motion.div>
           
           <div className="flex flex-col justify-end pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
                  Perfection is not a standard; <br/> it is the <span className="text-[#C6A87C]">only truth.</span>
                </h2>
                <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-md mb-16">
                  Unlike mass-produced fragrances that dilute the self, Clive Christen parfums are composed to amplify it. Each formula harmonises with your unique biochemistry, creating a sillage that is unmistakably, exclusively yours.
                </p>
                <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                   <div>
                     <div className="text-[#C6A87C] text-5xl font-serif mb-4">I.</div>
                     <div className="text-white/60 text-xs uppercase tracking-[0.2em] font-bold">Unfiltered <br/> Raw Materials</div>
                   </div>
                   <div>
                     <div className="text-[#C6A87C] text-5xl font-serif mb-4">II.</div>
                     <div className="text-white/60 text-xs uppercase tracking-[0.2em] font-bold">Maître <br/> Parfumeur</div>
                   </div>
                </div>
              </motion.div>
           </div>
        </section>

        {/* Footer Signature */}
        <section className="text-center py-48 border-t border-white/5">
           <motion.p 
             whileInView={{ opacity: [0, 1] }}
             className="text-white/40 font-serif italic text-3xl max-w-2xl mx-auto"
           >
             &ldquo;Where scent becomes identity, and identity becomes legend.&rdquo;
           </motion.p>
        </section>
      </div>
    </main>
  );
}

