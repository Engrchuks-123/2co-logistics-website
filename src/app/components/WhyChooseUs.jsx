export default function WhyChooseUs() {
  const features = [
    {
      title: "Operational Excellence",
      description:
        "We maintain high standards in fleet coordination, dispatch planning, and logistics execution.",
    },
    {
      title: "Nationwide Coverage",
      description:
        "Our logistics network supports efficient operations across multiple states and delivery routes.",
    },
    {
      title: "Professional Drivers",
      description:
        "Experienced and well-supervised drivers focused on safety, professionalism, and timely delivery.",
    },
    {
      title: "24/7 Support",
      description:
        "Our operations team remains available to provide updates, coordination, and logistics support.",
    },
  ];

  return (
    <section className="py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>

          <div className="inline-flex px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm mb-6">
            Why Businesses Choose Us
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Trusted Logistics Partner For
            <span className="block text-orange-500">
              Reliable Operations
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            At 2CO Logistics Ltd, we combine operational expertise,
            disciplined fleet management, and customer-focused logistics
            support to help businesses move products efficiently,
            safely, and on schedule.
          </p>

          <div className="space-y-6">

            {features.map((feature, index) => (

              <div
                key={index}
                className="flex gap-5 bg-slate-950 border border-slate-800 rounded-2xl p-6"
              >

                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-black">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative">

          <div className="bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-[40px] p-1">

            <div className="bg-slate-950 rounded-[36px] p-10 h-full">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                  <h3 className="text-5xl font-black text-orange-500 mb-3">
                    98%
                  </h3>
                  <p className="text-slate-400">
                    Delivery Reliability
                  </p>
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                  <h3 className="text-5xl font-black text-orange-500 mb-3">
                    24/7
                  </h3>
                  <p className="text-slate-400">
                    Operational Support
                  </p>
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                  <h3 className="text-5xl font-black text-orange-500 mb-3">
                    20+
                  </h3>
                  <p className="text-slate-400">
                    Fleet Assets
                  </p>
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                  <h3 className="text-5xl font-black text-orange-500 mb-3">
                    36
                  </h3>
                  <p className="text-slate-400">
                    States Served
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}