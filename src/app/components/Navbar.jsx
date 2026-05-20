"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black text-2xl">
              2CO
            </div>

            <div>
              <h1 className="font-black text-lg md:text-2xl">
                2CO LOGISTICS LTD
              </h1>

              <p className="text-slate-400 text-xs md:text-sm">
                Fleet • Haulage • Distribution
              </p>
            </div>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">

            <a href="#home" className="hover:text-orange-500 transition">
              Home
            </a>

            <a href="#about" className="hover:text-orange-500 transition">
              About
            </a>

            <a href="#services" className="hover:text-orange-500 transition">
              Services
            </a>

            <a href="#partners" className="hover:text-orange-500 transition">
              Partners
            </a>

            <a href="#blog" className="hover:text-orange-500 transition">
              Blog
            </a>

            <a href="#careers" className="hover:text-orange-500 transition">
              Careers
            </a>

            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>

          </nav>

          {/* CTA BUTTON */}
          <a
            href="https://wa.me/2347066066701"
            target="_blank"
            className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 transition px-5 py-3 rounded-xl font-semibold"
          >
            Get Quote
          </a>

        </div>

      </div>
    </header>
  );
}