import React from "react";

import { Analytics } from "@vercel/analytics/react" 
import { SpeedInsights } from "@vercel/speed-insights/react"
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Analytics />
      <SpeedInsights />
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black sticky top-0 z-50">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            FRONTLINE CAR WASH
          </h1>
          <p className="text-sm text-gray-400">
            Built For Those Who Serve
          </p>
        </div>

        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl font-semibold"
        >
          Book Now
        </a>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src="/FCW photo 19.jpg"
          alt="Frontline Car Wash"
          className="w-full h-[650px] object-cover object-center opacity-30"        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <img
            src="/FCW photo 6.jpg"
            alt="Frontline Logo"
            className="w-48 md:w-64 mb-6 rounded-full shadow-2xl border border-white/20"
          />

          <h2 className="text-5xl md:text-7xl font-black mb-4">
            PROFESSIONAL
            <span className="text-blue-500"> CAR DETAILING</span>
          </h2>

          <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
            Premium car washing and detailing services dedicated to keeping your
            vehicle spotless, protected, and looking its absolute best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-bold"
            >
              View Services
            </a>

            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl font-bold"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-28 py-20 px-6 md:px-20 bg-neutral-950">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">About Frontline</h3>

          <p className="text-gray-300 text-lg leading-8">
            
Frontline Car Wash is a locally owned and owner-operated car detailing business built on professionalism, pride, and service. Founded by a law enforcement officer with a passion for automotive care, Frontline was created to provide high-quality detailing services while supporting the hardworking men and women who serve our communities every day.

With several years of detailing experience, Frontline Car Wash has worked on everything from luxury and exotic vehicles including Lamborghinis and Mercedes G-Wagons to everyday family vehicles, work trucks, and patrol cars used by law enforcement agencies. No matter the vehicle, every detail is completed with the same level of care, precision, and attention to detail.

At Frontline, this is more than just washing cars. It’s about building relationships, serving the local community, and providing dependable, professional service people can trust. Whether you're a first responder, business owner, tradesman, or everyday driver, Frontline Car Wash is committed to delivering a clean vehicle and an experience built on respect and integrity.

          </p>
        </div>
      </section>

    {/* SERVICES */}
<section id="services" className="scroll-mt-28 py-20 px-6 md:px-20 bg-black">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-blue-500 font-bold tracking-[0.25em] uppercase mb-3">
        Detailing Packages
      </p>

      <h3 className="text-4xl md:text-5xl font-black">
        Our Services
      </h3>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Professional vehicle care for everyday drivers, luxury vehicles, work trucks,
        and public safety vehicles.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Exterior Wash",
          badge: "Clean & Protect",
          text: "Hand wash, foam bath, wheels, tires, windows, bug removal, and a clean finish built to make your vehicle stand out.",
          image: "/FCW photo 7.jpg",
        },
        {
          title: "Full Detail",
          badge: "Complete Refresh",
          text: "Comprehensive interior and exterior detailing, including deep cleaning, stain removal, leather conditioning, and paint protection for a like-new finish.",
          image: "/FCW photo 10.jpg",
        },
        {
          title: "Ceramic Coating",
          badge: "Complete Protection",
          text: "Protect your investment with our premium ceramic coating service, designed to provide long-lasting shine and protection.",
          image: "/FCW photo 12.jpg",
        },
      ].map((service) => (
        <div
          key={service.title}
          className="group relative overflow-hidden rounded-3xl min-h-[420px] border border-white/10 hover:border-blue-500 transition duration-300 shadow-2xl"
        >
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

          <div className="relative z-10 h-full min-h-[420px] flex flex-col justify-end p-8">
            <span className="inline-block w-fit bg-blue-600/25 text-blue-300 border border-blue-500/40 px-4 py-2 rounded-full text-sm font-bold mb-5">
              {service.badge}
            </span>

            <h4 className="text-3xl font-black mb-4 group-hover:text-blue-400 transition">
              {service.title}
            </h4>

            <p className="text-gray-200 leading-7 mb-6">
              {service.text}
            </p>

            <a
              href="#contact"
              className="inline-block text-blue-300 font-bold hover:text-blue-200 transition"
            >
              Request Quote →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  
 {/* WHY CHOOSE US */}
<section
  className="scroll-mt-28 relative py-24 px-6 md:px-20 overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/why-frontline.jpg')" }}
>
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      
      <div>
        <p className="text-blue-500 font-bold tracking-[0.25em] uppercase mb-3">
          Why Choose Frontline
        </p>

        <h3 className="text-4xl md:text-5xl font-black mb-6">
          Detail Work Built On Pride, Trust, And Service.
        </h3>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Frontline Car Wash brings a public safety mindset to every vehicle:
          professionalism, attention to detail, clear communication, and respect
          for the people we serve.
        </p>

        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-bold"
        >
          Get A Quote
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            title: "Owner Operated",
            text: "Every job is handled with pride, accountability, and personal attention.",
          },
          {
            title: "Law Enforcement Owned",
            text: "Built by someone who understands service, discipline, and community trust.",
          },
          {
            title: "Detail Driven",
            text: "From luxury vehicles to patrol cars, every vehicle gets the same level of care.",
          },
          {
            title: "Community Focused",
            text: "Supporting those who serve while providing dependable local vehicle care.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-2xl"
          >
            <div className="w-16 h-1 bg-blue-500 rounded-full mb-5" />

            <h4 className="text-xl font-black mb-3">
              {item.title}
            </h4>

            <p className="text-gray-300 leading-7">
              {item.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

{/* PRODUCTS WE USE */}
<section
  id="products"
  className="scroll-mt-28 py-24 px-6 md:px-20 bg-black"
>
  <div className="max-w-6xl mx-auto">
    
    <div className="text-center mb-16">
      <p className="text-blue-500 font-bold tracking-[0.25em] uppercase mb-3">
        Trusted Products
      </p>

      <h3 className="text-4xl md:text-5xl font-black">
        Professional Products We Trust
      </h3>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Frontline Car Wash uses professional-grade detailing products trusted
        throughout the automotive detailing industry.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* P&S */}
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 hover:border-blue-500 transition duration-300 shadow-2xl">
        
        <div className="h-72 bg-black flex items-center justify-center p-10">
          <img
            src="/P&S 4.png"
            alt="P&S Detailing Products"
            className="max-h-full object-contain group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-8">
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">
            Detailing Products
          </p>

          <h4 className="text-3xl font-black mb-4">
            P&S Professional Products
          </h4>

          <p className="text-gray-400 leading-8 text-lg">
            Frontline uses P&S professional detailing products known throughout
            the industry for quality cleaning performance, interior care, and
            professional-grade finishes.
          </p>
        </div>
      </div>

      {/* SYSTEM X */}
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 hover:border-blue-500 transition duration-300 shadow-2xl">
        
        <div className="h-72 bg-black flex items-center justify-center p-10">
          <img
            src="/System X.jpg"
            alt="System X Ceramic Coating"
            className="max-h-full object-contain group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-8">
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">
            Ceramic Coating
          </p>

          <h4 className="text-3xl font-black mb-4">
            System X Ceramic Protection
          </h4>

          <p className="text-gray-400 leading-8 text-lg">
            Frontline uses System X ceramic protection products designed to help
            protect paint, enhance gloss, and provide long-lasting surface
            protection for vehicles.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

     {/* GALLERY */}
     <section id="gallery" className="scroll-mt-28 py-24 px-6 md:px-20 bg-neutral-950">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-blue-500 font-bold tracking-[0.25em] uppercase mb-3">
        Recent Work
      </p>
      <h3 className="text-4xl md:text-5xl font-black">Gallery</h3>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        From luxury cars to everyday vehicles and patrol units, Frontline takes
        pride in every detail.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "/FCW photo 1.jpg",
        "/FCW photo 2.jpg",
        "/FCW photo 3.jpg",
        "/FCW photo 4.jpg",
        "/FCW photo 7.jpg",
        "/FCW photo 8.jpg",
      ].map((photo, index) => (
        <div
          key={photo}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
        >
          <img
            src={photo}
            alt={`Frontline Car Wash gallery photo ${index + 1}`}
            className="h-80 w-full object-contain bg-black image-rendering-auto group-hover:scale-105 transition duration-500"          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-sm text-blue-300 font-bold tracking-widest uppercase">
              Frontline Detail
            </p>
            <h4 className="text-xl font-black">
              Professional Finish
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* REVIEWS */}
<section id="reviews" className="scroll-mt-28 py-24 px-6 md:px-20 bg-black">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-blue-500 font-bold tracking-[0.25em] uppercase mb-3">
        Customer Feedback
      </p>
      <h3 className="text-4xl md:text-5xl font-black">What Customers Say</h3>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Trusted by everyday drivers, public safety professionals, and local vehicle owners.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Dylan Blake",
          text: "Lucas did an AMAZING job on our Sequoia. Having two kids plus two parents with demanding full time jobs, we often don’t have the time to be as detailed on our vehicles as we want to be. Not only are his services affordable, he has top quality products and an unmatched attention to detail. It is back to looking even cleaner than when we bought it!"
        },{
          name: "Customer Review",
          text: "Professional, reliable, and very detail-oriented. You can tell they take pride in their work.",
        },
        {
          name: "Customer Review",
          text: "Great service and great communication. Highly recommend Frontline Car Wash.",
        },
      ].map((review) => (
        <div
          key={review.text}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:border-blue-500 transition duration-300"
        >
          <div className="text-blue-400 text-3xl mb-4">★★★★★</div>
          <p className="text-gray-300 leading-7 mb-6">
            “{review.text}”
          </p>
          <p className="font-black text-white">{review.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* CONTACT / QUOTE FORM */}
<section
  id="contact"
  className="scroll-mt-28 py-24 px-6 md:px-20 bg-blue-600"
>
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h3 className="text-4xl md:text-5xl font-black mb-4">
        Get A Quote
      </h3>
      <p className="text-xl text-blue-100">
        Fill out the form below and Frontline Car Wash will follow up with you.
      </p>
    </div>

    <form
      action="https://formspree.io/f/mwvznnwo"
      method="POST"
      className="bg-black/90 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
    >
      <input type="hidden" name="_subject" value="New Quote Request - Frontline Car Wash" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-bold mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl p-4 bg-neutral-900 border border-white/10 text-white outline-none focus:border-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full rounded-xl p-4 bg-neutral-900 border border-white/10 text-white outline-none focus:border-blue-500"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full rounded-xl p-4 bg-neutral-900 border border-white/10 text-white outline-none focus:border-blue-500"
            placeholder="Your email"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Vehicle Type</label>
          <input
            type="text"
            name="vehicle"
            className="w-full rounded-xl p-4 bg-neutral-900 border border-white/10 text-white outline-none focus:border-blue-500"
            placeholder="Ex: Truck, SUV, Patrol car"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Service Needed</label>
          <select
            name="service"
            required
            className="w-full rounded-xl p-4 bg-neutral-900 border border-white/10 text-white outline-none focus:border-blue-500"
          >
            <option value="">Select a service</option>
            <option>Exterior Wash</option>
            <option>Interior Detail</option>
            <option>Full Detail</option>
            <option>Not Sure / Need Recommendation</option>
          </select>
        </div>

        <div>
          <label className="block font-bold mb-2">Preferred Contact Method</label>
          <select
            name="contact_method"
            className="w-full rounded-xl p-4 bg-neutral-900 border border-white/10 text-white outline-none focus:border-blue-500"
          >
            <option>Call</option>
            <option>Text</option>
            <option>Email</option>
            <option>Facebook Message</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block font-bold mb-2">Message / Vehicle Condition</label>
        <textarea
          name="message"
          rows="5"
          className="w-full rounded-xl p-4 bg-neutral-900 border border-white/10 text-white outline-none focus:border-blue-500"
          placeholder="Tell us what you need cleaned, vehicle condition, stains, pet hair, patrol/work vehicle, etc."
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-4 font-black text-lg"
      >
        Submit Quote Request
      </button>
    </form>
  </div>
</section>

{/* FOOTER */}
<footer className="bg-black border-t border-white/10 py-10 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h4 className="text-2xl font-black tracking-wide text-white">
          FRONTLINE CAR WASH
        </h4>

        <p className="text-gray-400 mt-2">
          Built For Those Who Serve
        </p>

      </div>

      <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-400">
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#services" className="hover:text-blue-400 transition">Services</a>
        <a href="#gallery" className="hover:text-blue-400 transition">Gallery</a>
        <a href="#reviews" className="hover:text-blue-400 transition">Reviews</a>
        <a href="#products" className="hover:text-blue-400 transition">Products</a>
      </div>

      <div className="text-center md:text-right">
        <p className="text-white font-bold">(941) 293-7233</p>

        <p className="text-gray-400 mt-2">
          frontlinecarwash26@gmail.com
        </p>

        <a
          href="https://www.facebook.com/profile.php?id=61589980678399"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition font-semibold"
        >
          Facebook Page →
        </a>
      </div>
    </div>

  <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
  <p>
    © 2026 Frontline Car Wash. All Rights Reserved.
  </p>

  <p className="text-center">
    Powered by{" "}
    <a
      href="https://detailersofyadkinville.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition"
    >
      Detailers of Yadkinville
    </a>

    {" "}•{" "}

    Website by{" "}
    <span className="text-white font-semibold">
      High Rock Custom Designs
    </span>
  </p>
</div>
    </div>
  </footer>
  </div>
  );
}