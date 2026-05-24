import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
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
          src="/FCW photo 5.jpg"
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
      <section className="py-20 px-6 md:px-20 bg-neutral-950">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">About Frontline</h3>

          <p className="text-gray-300 text-lg leading-8">
            
Frontline Car Wash is a locally owned and owner-operated car detailing business built on professionalism, pride, and service. Founded by a law enforcement officer with a passion for automotive care, Frontline was created to provide high-quality detailing services while supporting the hardworking men and women who serve our communities every day.

With several years of detailing experience, Frontline Car Wash has worked on everything from luxury and exotic vehicles including Lamborghinis and Mercedes G-Wagons to everyday family vehicles, work trucks, and patrol cars used by law enforcement agencies. No matter the vehicle, every detail is completed with the same level of care, precision, and attention to detail.

At Frontline, this is more than just washing cars. It’s about building relationships, serving the local community, and providing dependable, professional service people can trust. Whether you're a first responder, business owner, tradesman, or everyday driver, Frontline Car Wash is committed to delivering a clean vehicle and an experience built on respect and integrity.

Built for those who serve. Trusted by the community.

          </p>
        </div>
      </section>

    {/* SERVICES */}
<section id="services" className="py-24 px-6 md:px-20 bg-black">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-blue-500 font-bold tracking-[0.25em] uppercase mb-3">
        Detailing Packages
      </p>
      <h3 className="text-4xl md:text-5xl font-black">Our Services</h3>
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
        },
        {
          title: "Interior Detail",
          badge: "Deep Interior Reset",
          text: "Vacuuming, wipe-downs, cup holders, vents, plastics, door panels, glass, and interior refresh for a cleaner ride.",
        },
        {
          title: "Full Detail",
          badge: "Complete Package",
          text: "A full inside-and-out detail designed for daily drivers, patrol cars, luxury vehicles, SUVs, and work vehicles.",
        },
      ].map((service) => (
        <div
          key={service.title}
          className="group bg-gradient-to-b from-neutral-900 to-black rounded-3xl p-8 border border-white/10 hover:border-blue-500 transition shadow-2xl"
        >
          <div className="mb-6">
            <span className="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-bold">
              {service.badge}
            </span>
          </div>

          <h4 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition">
            {service.title}
          </h4>

          <p className="text-gray-300 leading-7 mb-6">
            {service.text}
          </p>

          <a
            href="#contact"
            className="inline-block text-blue-400 font-bold hover:text-blue-300 transition"
          >
            Request Quote →
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-20 bg-neutral-950">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold">Why Choose Frontline?</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Professional Service",
            "Attention To Detail",
            "Reliable Scheduling",
            "Locally Owned",
          ].map((item) => (
            <div
              key={item}
              className="bg-neutral-900 border border-white/10 rounded-2xl p-8 text-center font-semibold text-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

     {/* GALLERY */}
<section className="py-24 px-6 md:px-20 bg-neutral-950">
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
<section className="py-24 px-6 md:px-20 bg-black">
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
  className="py-24 px-6 md:px-20 bg-blue-600"
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
      action="https://formsubmit.co/frontlinecarwash26@gmail.com"
      method="POST"
      className="bg-black/90 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
    >
      <input type="hidden" name="_subject" value="New Quote Request - Frontline Car Wash" />
      <input type="hidden" name="_captcha" value="false" />

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

      <p className="text-center text-gray-400 text-sm mt-6">
        You can also call/text: (941) 293-7233
      </p>
    </form>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-8 text-center text-gray-500">
        <p>
          © 2026 High Rock Custom Designs
        </p>
      </footer>
    </div>
  );
}