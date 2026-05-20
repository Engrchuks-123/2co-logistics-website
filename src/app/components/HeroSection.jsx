"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import truck1 from "../images/truck1.jpg";

export default function HeroSection() {

  return (

    <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex items-center py-24 lg:py-0">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 mb-6 text-sm">
            Trusted Nationwide Logistics Partner
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
            Smart Fleet &
            <span className="block text-orange-500">
              Logistics Solutions
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            At 2CO Logistics Ltd, we deliver reliable, scalable,
            and technology-driven logistics solutions across Nigeria.
            We specialize in fleet management, haulage operations,
            distribution, procurement logistics, and transport support services.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">

            <a
              href="https://wa.me/2347066066701?text=Hello%202CO%20Logistics,%20I%20would%20like%20to%20book%20a%20truck."
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold inline-block text-center"
            >
              Book a Truck
            </a>

            <button className="border border-slate-600 hover:border-orange-500 hover:text-orange-400 transition px-8 py-4 rounded-xl font-semibold">
              Track Shipment
            </button>

            <a
              href="https://wa.me/2347066066701"
              target="_blank"
              className="border border-slate-600 hover:border-orange-500 hover:text-orange-400 transition px-8 py-4 rounded-xl font-semibold inline-block text-center"
            >
              Contact Us
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid sm:grid-cols-2 gap-6 mt-10 lg:mt-0"
        >

          {/* IMAGE */}
          <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:col-span-2 h-[300px] md:h-[400px]">

            <Image
              src={truck1}
              alt="2CO Logistics Truck"
              fill
              className="object-cover rounded-2xl"
            />

            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>

          </div>

          {/* CARD 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">

            <h3 className="text-4xl md:text-5xl font-black text-orange-500">
              36
            </h3>

            <p className="text-slate-400 mt-3">
              States Covered
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">

            <h3 className="text-4xl md:text-5xl font-black text-orange-500">
              24/7
            </h3>

            <p className="text-slate-400 mt-3">
              Support Service
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">

            <h3 className="text-4xl md:text-5xl font-black text-orange-500">
              20+
            </h3>

            <p className="text-slate-400 mt-3">
              Fleet Vehicles
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">

            <h3 className="text-4xl md:text-5xl font-black text-orange-500">
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