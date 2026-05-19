export default function CTASection() {
  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-blue-500/10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="bg-slate-900 border border-slate-800 rounded-[40px] p-12 md:p-20 text-center">

          <div className="inline-flex px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm mb-8">
            Let’s Move Your Business Forward
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Ready To Optimize Your
            <span className="block text-orange-500">
              Logistics Operations?
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Partner with 2CO Logistics Ltd for reliable haulage,
            fleet management, procurement logistics, and operational
            support solutions designed to help your business scale efficiently.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <button className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-2xl font-bold text-lg">
              Contact Us
            </button>

            <button className="border border-slate-600 hover:border-orange-500 hover:text-orange-400 transition px-10 py-5 rounded-2xl font-bold text-lg">
              Request Partnership
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}