"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import truck1 from "../images/truck1.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex items-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 mb-6">
            Trusted Nationwide Logistics Partner
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Smart Fleet &
            <span className="block text-orange-500">
              Logistics Solutions
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
            At 2CO Logistics Ltd, we deliver reliable, scalable, and technology-driven logistics solutions across Nigeria. We specialize in fleet management, haulage operations, distribution, procurement logistics, and transport support services for businesses of all sizes.
          </p>

          <div className="flex flex-wrap gap-4">

            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold">
              Book a Truck
            </button>

            <button className="border border-slate-600 hover:border-orange-500 hover:text-orange-400 transition px-8 py-4 rounded-xl font-semibold">
              Track Shipment
            </button>

            <button className="border border-slate-600 hover:border-orange-500 hover:text-orange-400 transition px-8 py-4 rounded-xl font-semibold">
              Contact Us
            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 gap-6 mt-6"
        >

          {/* IMAGE */}
          <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-4 col-span-2 h-[350px]">

            <Image
              src={truck1}
              alt="2CO Logistics Truck"
              fill
              className="object-cover rounded-2xl"
            />

            bg-black/10

          </div>

          {/* CARD 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-5xl font-black text-orange-500">
              36
            </h3>

            <p className="text-slate-400 mt-3">
              States Covered
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-5xl font-black text-orange-500">
              24/7
            </h3>

            <p className="text-slate-400 mt-3">
              Support Service
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-5xl font-black text-orange-500">
              20+
            </h3>

            <p className="text-slate-400 mt-3">
              Fleet Vehicles
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-5xl font-black text-orange-500">
              99%
            </h3>

            <p className="text-slate-400 mt-3">
              Delivery Reliability
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}