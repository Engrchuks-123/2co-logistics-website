"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import fleetYard from "../images/fleet-yard.jpg";

export default function FleetShowcase() {

  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="relative h-[500px] rounded-[40px] overflow-hidden border border-slate-800">

            <Image
              src={fleetYard}
              alt="2CO Fleet Yard"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          </div>

        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="inline-flex px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm mb-6">
            Fleet Operations Excellence
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Modern Fleet &
            <span className="block text-orange-500">
              Logistics Coordination
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Our operations are driven by disciplined fleet coordination,
            route optimization, driver accountability, and operational
            efficiency standards designed to ensure reliable nationwide
            logistics support for businesses across Nigeria.
          </p>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
              <h3 className="text-4xl font-black text-orange-500">
                20+
              </h3>

              <p className="text-slate-400 mt-3">
                Fleet Assets
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
              <h3 className="text-4xl font-black text-orange-500">
                98%
              </h3>

              <p className="text-slate-400 mt-3">
                Delivery Reliability
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}