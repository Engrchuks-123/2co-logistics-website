"use client"

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl font-black">
                2CO
              </div>

              <div>
                <h2 className="font-black text-2xl">
                  2CO LOGISTICS LTD
                </h2>

                <p className="text-slate-400 text-sm">
                  Fleet • Haulage • Distribution
                </p>
              </div>

            </div>

            <p className="text-slate-400 leading-8">
              Reliable logistics, fleet management,
              haulage operations, and distribution
              solutions tailored for modern businesses
              across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition">About</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Services</a></li>
              <li><a href="#partners" className="hover:text-orange-400 transition">Partners</a></li>
              <li><a href="#blog" className="hover:text-orange-400 transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>Fleet Management</li>
              <li>Haulage Operations</li>
              <li>Distribution Logistics</li>
              <li>Procurement Logistics</li>
              <li>E-Commerce Logistics</li>
              <li>Warehouse Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-slate-400">

              <p>
                Lagos, Nigeria
              </p>

              <p>
                +234 706 606 6701
              </p>

              <p>
                info@2cologistics.com
              </p>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 2CO Logistics Ltd. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Built for modern logistics operations.
          </p>

        </div>

      </div>

    </footer>
  )
}