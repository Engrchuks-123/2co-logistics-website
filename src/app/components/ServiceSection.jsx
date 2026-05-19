export default function ServicesSection() {
  const services = [
    {
      title: "Fleet Management",
      description:
        "Comprehensive fleet coordination, vehicle monitoring, maintenance planning, and operational efficiency management.",
    },
    {
      title: "Haulage Operations",
      description:
        "Reliable nationwide cargo transportation services with professional drivers and optimized route planning.",
    },
    {
      title: "Procurement Logistics",
      description:
        "Efficient sourcing, movement, and coordination of goods and materials for businesses across Nigeria.",
    },
    {
      title: "Distribution Services",
      description:
        "Fast and scalable product distribution solutions designed for retail, FMCG, and enterprise operations.",
    },
    {
      title: "Driver Management",
      description:
        "Professional driver sourcing, supervision, compliance monitoring, and performance management solutions.",
    },
    {
      title: "Warehouse Support",
      description:
        "Integrated warehouse coordination and logistics support services for inventory and fulfillment operations.",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 bg-slate-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-20">

          <div className="inline-flex px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm mb-6">
            Our Core Services
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Logistics Solutions Built For
            <span className="block text-orange-500">
              Modern Businesses
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            We provide scalable transport and logistics services designed
            to help businesses optimize operations, reduce downtime,
            and improve delivery performance nationwide.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-orange-500/40 transition duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-2xl font-black mb-6">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}