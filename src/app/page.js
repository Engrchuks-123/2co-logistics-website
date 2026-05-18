export default function TwoCOLogisticsWebsite() {
  const services = [
    "Fleet & Haulage Operations",
    "Nationwide Distribution",
    "Last-Mile Delivery",
    "Warehousing Solutions",
    "Corporate Logistics Contracts",
    "E-commerce Logistics",
  ];

  const jobs = [
    "Fleet Operations Supervisor",
    "Truck Driver",
    "Logistics Coordinator",
    "Warehouse Officer",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl font-black shadow-lg">
              2CO
            </div>
            <div>
              <h1 className="text-xl font-bold">2CO LOGISTICS LTD</h1>
              <p className="text-sm text-slate-400">Fleet • Haulage • Distribution</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-orange-400">Home</a>
            <a href="#about" className="hover:text-orange-400">About</a>
            <a href="#services" className="hover:text-orange-400">Services</a>
            <a href="#partners" className="hover:text-orange-400">Partners</a>
            <a href="#blog" className="hover:text-orange-400">Blog</a>
            <a href="#shop" className="hover:text-orange-400">Shop</a>
            <a href="#careers" className="hover:text-orange-400">Careers</a>
            <a href="#contact" className="hover:text-orange-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10" />

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm mb-6">
              Trusted Fleet & Haulage Partner
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Smart Logistics &
              <span className="text-orange-500"> Haulage Solutions</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
  At 2CO Logistics Ltd, we deliver smart, reliable, and results-driven logistics
  solutions designed to keep businesses moving efficiently across Nigeria.
  We specialize in haulage operations, fleet management, driver management,
  procurement logistics, and nationwide distribution services tailored to meet
  the demands of modern businesses.</p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-4 rounded-2xl font-semibold shadow-xl">
                Book a Truck
              </button>

              <button className="border border-slate-700 hover:border-orange-500 px-6 py-4 rounded-2xl font-semibold transition">
                Track Shipment
              </button>

              <button className="border border-slate-700 hover:border-orange-500 px-6 py-4 rounded-2xl font-semibold transition">
                Make Payment
              </button>
            </div>
          </div>

          <div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-4xl font-black text-orange-500">150+</h3>
                  <p className="text-slate-400 mt-2">Fleet Vehicles</p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-4xl font-black text-orange-500">36</h3>
                  <p className="text-slate-400 mt-2">States Covered</p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-4xl font-black text-orange-500">24/7</h3>
                  <p className="text-slate-400 mt-2">Support Service</p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-4xl font-black text-orange-500">99%</h3>
                  <p className="text-slate-400 mt-2">Delivery Efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">About 2CO LOGISTICS LTD</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              At 2co Logistics Ltd, we deliver smart, reliable, and results-driven logistics solutions designed to keep businesses moving efficiently. We specialize in haulage operations, fleet management, driver management, procurement support, and logistics services tailored to meet the demands of modern businesses across Nigeria.
Founded by Engr. Chukwudi Christopher Okonji, a seasoned transport and fleet operations professional with years of hands-on industry experience, the company was built on the principles of operational excellence, accountability, efficiency, and customer satisfaction. His extensive background in fleet operations, logistics coordination, transport management, and process optimization forms the foundation of the company’s service culture and operational standards.
With a strong focus on safety, professionalism, timely delivery, and operational efficiency, we help businesses optimize transportation costs, improve fleet performance, and maintain seamless supply chain operations. Our team combines industry expertise, disciplined execution, and a customer-first approach to provide dependable logistics solutions that clients can trust.
From cargo movement and fleet coordination to professional driver outsourcing and procurement support, 2co Logistics Ltd is committed to delivering efficiency, professionalism, and long-term value at every stage of the logistics process.

Our Core Services

Haulage & Transportation Services

Fleet Management Solutions

Driver Recruitment & Management

Logistics & Supply Chain Support

Procurement & Operational Support Services

Fleet Performance Monitoring & Optimization


Why Choose Us

Reliable and timely service delivery

Professional and experienced operations team

Commitment to safety and accountability

Cost-effective logistics solutions

Customer-focused operational support

Strong understanding of transport and fleet operations

2co Logistics Ltd — Moving Businesses Forward Efficiently.
            </p>

            <div className="space-y-4">
              <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                <h3 className="font-bold text-orange-400 mb-2">Mission</h3>
                <p className="text-slate-300">To deliver world-class logistics and transportation solutions through disciplined operations, skilled personnel, modern fleet management practices, and a strong commitment to customer success.</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                <h3 className="font-bold text-orange-400 mb-2">Vision</h3>
                <p className="text-slate-300">To redefine logistics and fleet operations in Africa by setting the standard for efficiency, reliability, safety, and customer satisfaction.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-black mb-6">Why Choose Us?</h3>

            <div className="space-y-5">
              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">
                Experienced Fleet Operations Team
              </div>
              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">
                Real-Time Shipment Tracking
              </div>
              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">
                Nationwide Coverage
              </div>
              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">
                Fast Customer Response
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive transportation and logistics solutions tailored for businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-orange-500 transition shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 font-black text-xl mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4">{service}</h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Reliable and scalable logistics service designed for operational excellence.
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-3 rounded-xl font-semibold">
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">Our Partners</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            Trusted by businesses and organizations across multiple industries.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Manufacturing", "Retail", "Oil & Gas", "E-commerce"].map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-2xl py-10 text-xl font-bold"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black mb-3">Latest Insights</h2>
              <p className="text-slate-400">Industry updates and fleet management insights.</p>
            </div>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-2xl font-semibold">
              View All Posts
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
                <div className="h-56 bg-gradient-to-br from-orange-500 to-orange-700" />

                <div className="p-8">
                  <div className="text-orange-400 text-sm mb-3">Logistics & Fleet Management</div>

                  <h3 className="text-2xl font-bold mb-4">
                    Fuel Optimization Strategies for Modern Fleet Operations
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    Learn practical ways businesses can reduce fuel costs and improve operational efficiency.
                  </p>

                  <button className="text-orange-500 font-semibold">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Shop</h2>
            <p className="text-slate-400">Logistics accessories and operational products.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Safety Vest", "Fleet Tracker", "Logistics Toolkit"].map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
                <div className="h-56 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 mb-6" />
                <h3 className="text-2xl font-bold mb-3">{item}</h3>
                <p className="text-slate-400 mb-6">Premium quality logistics product.</p>
                <button className="bg-orange-500 px-5 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Careers</h2>
            <p className="text-slate-400">Join our growing logistics and operations team.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">{job}</h3>
                <p className="text-slate-400 mb-6">
                  We are looking for qualified professionals to join our operations team.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-semibold transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-black mb-6">Contact Us</h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Ready to move your business forward with reliable logistics and transportation solutions?
            </p>

            <div className="space-y-6">
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h3 className="font-bold text-orange-400 mb-2">Office Address</h3>
                <p className="text-slate-300">9b State Housing by NUJ, Calabar, Cross River State, Nigeria</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h3 className="font-bold text-orange-400 mb-2">Email</h3>
                <p className="text-slate-300">okonjichris4@gmail.com</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h3 className="font-bold text-orange-400 mb-2">Support</h3>
                <p className="text-slate-300">24/7 Customer Support Available</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
            <h3 className="text-3xl font-black mb-8">Send a Message</h3>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your logistics needs"
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <button className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-2xl font-bold text-lg shadow-xl">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-black text-orange-500">2CO LOGISTICS LTD</h3>
            <p className="text-slate-400 mt-2">Efficient Logistics. Reliable Delivery.</p>
          </div>

          <div className="text-slate-500 text-sm">
            © 2026 2CO LOGISTICS LTD. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+2347066066701"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl text-2xl"
      >
        💬
      </a>
    </div>
  );
}
