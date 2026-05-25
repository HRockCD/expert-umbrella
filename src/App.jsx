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

  {/* DETAILING PACKAGES */}
<section id="services" className="scroll-mt-28 py-24 px-6 md:px-20 bg-black">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-blue-500 font-bold tracking-[0.25em] uppercase mb-3">
        Detailing Packages
      </p>

      <h3 className="text-4xl md:text-5xl font-black">
        Our Packages
      </h3>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Professional detailing packages built for everyday drivers, luxury vehicles,
        public safety vehicles, and complete vehicle resets.
      </p>
    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
      {[
        {
          title: "Basic Clean",
          price: "$50",
          subtitle: "Cars & SUVs",
          image: "/exterior.jpg",
          description: "A solid refresh for everyday drivers.",
          includes: [
            "Exterior Hand Wash",
            "Tire & Wheel Clean",
            "Interior Vacuum",
            "Dashboard & Console Wipe Down",
            "Window Clean Inside & Out",
          ],
        },
        {
          title: "Front Line Detail",
          price: "$159",
          subtitle: "Cars & SUVs",
          image: "/interior-detail.jpg",
          description: "Our best all-around detail for a like-new feel.",
          includes: [
            "Everything in Basic Clean",
            "Foam Pre-Soak",
            "Hand Wash & Dry",
            "Interior Deep Clean",
            "Door Jambs Cleaned",
            "Leather/Vinyl Conditioning",
            "Air Vents & Crevices Detailed",
            "Protectant Applied",
          ],
        },
        {
          title: "Premium Detail",
          price: "$249",
          subtitle: "Cars & SUVs",
          image: "/full-detail.jpg",
          description: "Next-level care for next-level results.",
          includes: [
            "Everything in Front Line Detail",
            "Clay Bar Treatment",
            "Paint Decontamination",
            "One-Step Paint Enhancement",
            "Premium Wax / Sealant",
            "Engine Bay Clean",
            "Headlight Restoration",
          ],
        },
        {
          title: "Ultimate Detail",
          price: "Starting At $1000",
          subtitle: "Cars & SUVs",
          image: "/ultimate-detail.jpg",
          description: "The complete top-to-bottom reset.",
          includes: [
            "Everything in Premium Detail",
            "Multi-Step Paint Correction",
            "System X Max G+",
            "Interior Steam Clean",
            "Deep Carpet & Upholstery Shampoo",
            "Trunk Detail",
            "Long-Lasting Protection",
          ],
        },
      ].map((pkg) => (
        <div
          key={pkg.title}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 hover:border-blue-500 transition duration-300 shadow-2xl"
        >
          <div className="relative h-56 overflow-hidden">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          <div className="p-7">
            <h4 className="text-2xl font-black mb-2 group-hover:text-blue-400 transition">
              {pkg.title}
            </h4>

            <p className="text-gray-400 mb-6">
              {pkg.description}
            </p>

            <div className="mb-6">
              <p className="text-2xl font-black text-blue-500">
                {pkg.price}
              </p>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                {pkg.subtitle}
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {pkg.includes.map((item) => (
                <div key={item} className="flex gap-3 text-gray-300">
                  <span className="text-blue-400 font-black">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="block text-center bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 font-black"
            >
              Request Quote
            </a>
          </div>
        </div>
      ))}
    </div>

   <div className="mt-14 grid lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2 bg-neutral-950 border border-white/10 rounded-3xl p-8 shadow-2xl">
    <p className="text-blue-500 font-bold tracking-[0.2em] uppercase mb-3">
      Add-On Services
    </p>

    <h4 className="text-3xl font-black mb-3">
      Enhance Your Detail
    </h4>

    <p className="text-gray-400 mb-8">
      Add any of these services to your package for a deeper, more complete clean.
    </p>

    <div className="grid sm:grid-cols-2 gap-4">
      {[
        ["Seat Shampoo", "$25 per seat"],
        ["Pet Hair Removal", "starting at $75"],
        ["Paint Correction", "$100 per hour"],
        ["Glass Coating", "$40 per window"],
        ["Headlight Restoration", "$65 per headlight"],
        ["Engine Bay Clean", "$30"],
        ["Ozone Treatment", "$40"],
      ].map(([name, price, detail]) => (
        <div
          key={name}
          className="bg-black border border-white/10 rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-blue-500 transition"
        >
          <div>
            <h5 className="font-black text-white">
              {name}
            </h5>

            <p className="text-gray-500 text-sm mt-1">
              {detail}
            </p>
          </div>

          <p className="text-1xl font-black text-blue-400">
            {price}
          </p>
        </div>
      ))}
    </div>
  </div>

  <div className="bg-neutral-950 border border-white/10 rounded-3xl p-8 shadow-2xl">
    <p className="text-blue-500 font-bold tracking-[0.2em] uppercase mb-3">
      Service Info
    </p>

    <h4 className="text-3xl font-black mb-8">
      Before You Book
    </h4>

    <div className="space-y-6">
      <div>
        <h5 className="font-black text-white mb-2">
          By Appointment Only
        </h5>
        <p className="text-gray-400">
          Each vehicle gets the time and attention it deserves.
        </p>
      </div>

      <div className="border-t border-white/10 pt-6">
        <h5 className="font-black text-white mb-2">
          Drop Off Only
        </h5>
        <p className="text-gray-400">
          Focused service for the best possible detailing results.
        </p>
      </div>

      <div className="border-t border-white/10 pt-6">
        <h5 className="font-black text-white mb-2">
          Serving Yadkinville, NC
        </h5>
        <p className="text-gray-400">
          Local detailing with a community-first mindset.
        </p>
      </div>
    </div>
  </div>
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
        "/FCW photo 11.jpg",
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