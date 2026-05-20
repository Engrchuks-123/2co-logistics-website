"use client";

import { motion } from "framer-motion";

const partners = [
  "Dangote Group",
  "BUA Group",
  "Nestlé Nigeria",
  "Multipro Consumer Products",
  "Kellogg’s",
  "Shoprite",
];

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="bg-[#020617] py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="inline-block px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm mb-6">
            TRUSTED PARTNERS
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Companies We’ve
            <span className="text-orange-500"> Worked With</span>
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg mb-16">
            We support manufacturers, distributors, retail brands,
            and corporate organizations with reliable transport
            and logistics operations across Nigeria.
          </p>

        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {partners.map((partner, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl py-10 px-6 text-xl font-semibold hover:border-orange-500 transition"
            >
              {partner}
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}