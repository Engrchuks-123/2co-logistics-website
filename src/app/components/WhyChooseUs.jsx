"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Real-Time Fleet Monitoring",
    description:
      "Track and manage fleet movement efficiently with technology-driven visibility and operational control.",
  },

  {
    title: "Nationwide Coverage",
    description:
      "Reliable haulage, distribution, and logistics operations across all major states in Nigeria.",
  },

  {
    title: "Experienced Operations Team",
    description:
      "Led by logistics professionals with years of hands-on transport and fleet management expertise.",
  },

  {
    title: "Fast & Reliable Delivery",
    description:
      "Optimized transport planning and dispatch systems ensuring timely and dependable deliveries.",
  },
];

export default function WhyChooseUs() {

  return (

    <section
      id="why-us"
      className="bg-[#020617] text-white py-28 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <div className="inline-block px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm mb-6">
            WHY BUSINESSES TRUST US
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Why Choose
            <span className="text-orange-500"> 2CO Logistics</span>
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {reasons.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-10"
            >

              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 text-2xl mb-8">
                ✓
              </div>

              <h3 className="text-2xl font-bold mb-5">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed text-lg">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}