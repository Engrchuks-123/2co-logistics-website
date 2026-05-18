export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-24">
      
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm mb-6">
            Trusted Nationwide Logistics Partner
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Smart Fleet &

            <span className="block text-orange-500">
              Logistics Solutions
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl">
            At 2CO Logistics Ltd, we deliver reliable, scalable, and
            technology-driven logistics solutions across Nigeria.
            We specialize in fleet management, haulage operations,
            distribution, procurement logistics, and transport support
            services for businesses of all sizes.
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

        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-5xl font-black text-orange-500">
              150+
            </h3>
            <p className="text-slate-400 mt-3">
              Fleet Vehicles
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-5xl font-black text-orange-500">
              36
            </h3>
            <p className="text-slate-400 mt-3">
              States Covered
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-5xl font-black text-orange-500">
              24/7
            </h3>
            <p className="text-slate-400 mt-3">
              Support Service
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-5xl font-black text-orange-500">
              99%
            </h3>
            <p className="text-slate-400 mt-3">
              Delivery Efficiency
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}