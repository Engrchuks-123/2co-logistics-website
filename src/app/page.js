import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ServiceSection from "./components/ServiceSection"
import WhyChooseUs from "./components/WhyChooseUs"
import PartnersSection from "./components/PartnersSection"
import FleetShowcase from "./components/FleetShowcase"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"
import FloatingWhatsApp from "./components/FloatingWhatsApp"

export default function TwoCOLogisticsWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">

      <Navbar />

      <HeroSection />

      <AboutSection />

      <ServiceSection />

      <WhyChooseUs />

      <PartnersSection />

      <FleetShowcase />

      <CTASection />

      {/* Blog */}
      <section id="blog" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-3">
                Latest Insights
              </h2>

              <p className="text-slate-400 max-w-2xl">
                Industry updates and fleet management insights.
              </p>
            </div>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-2xl font-semibold hover:bg-orange-500 hover:text-white transition">
              View All Posts
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* BLOG 1 */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="h-56 bg-gradient-to-br from-orange-500 to-orange-700" />

              <div className="p-8">
                <div className="text-orange-400 text-sm mb-3">
                  Logistics & Fleet Management
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Fuel Optimization Strategies for Modern Fleet Operations
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Learn practical ways businesses can reduce fuel costs and improve operational efficiency.
                </p>

                <button className="text-orange-500 font-semibold">
                  Read More →
                </button>
              </div>
            </div>

            {/* BLOG 2 */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-cyan-700" />

              <div className="p-8">
                <div className="text-orange-400 text-sm mb-3">
                  Supply Chain Solutions
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Improving Delivery Timelines Through Smart Route Planning
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Discover how optimized route planning improves delivery speed and customer satisfaction.
                </p>

                <button className="text-orange-500 font-semibold">
                  Read More →
                </button>
              </div>
            </div>

            {/* BLOG 3 */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="h-56 bg-gradient-to-br from-purple-500 to-pink-700" />

              <div className="p-8">
                <div className="text-orange-400 text-sm mb-3">
                  Transport Operations
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Why Reliable Fleet Management Matters in Modern Logistics
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Explore how strong fleet management systems reduce downtime and improve operational efficiency.
                </p>

                <button className="text-orange-500 font-semibold">
                  Read More →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />

      <FloatingWhatsApp />

    </div>
  )
}