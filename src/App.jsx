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
          className="w-full h-[650px] object-cover opacity-40"
        />

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
      <section
        id="services"
        className="py-20 px-6 md:px-20 bg-black"
      >
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold">Our Services</h3>
          <p className="text-gray-400 mt-4">
            Quality detailing packages designed for every vehicle.
          </p>

          <img
            src="/FCW photo 5.jpg"
            alt="Frontline Gallery"
            className="rounded-3xl shadow-2xl border border-white/10"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* SERVICE 1 */}
          <div className="bg-neutral-900 rounded-3xl p-8 border border-white/10 hover:border-blue-500 transition">
            <h4 className="text-2xl font-bold mb-4 text-blue-500">
              Exterior Wash
            </h4>

            <p className="text-gray-300 leading-7">
              Foam wash, hand wash, tire shine, wheel cleaning, windows, and
              exterior protection for a spotless finish.
            </p>
          </div>

          {/* SERVICE 2 */}
          <div className="bg-neutral-900 rounded-3xl p-8 border border-white/10 hover:border-blue-500 transition">
            <h4 className="text-2xl font-bold mb-4 text-blue-500">
              Interior Detail
            </h4>

            <p className="text-gray-300 leading-7">
              Full vacuum, wipe down, stain removal, plastics treatment, vents,
              and deep interior cleaning.
            </p>
          </div>

          {/* SERVICE 3 */}
          <div className="bg-neutral-900 rounded-3xl p-8 border border-white/10 hover:border-blue-500 transition">
            <h4 className="text-2xl font-bold mb-4 text-blue-500">
              Full Detail
            </h4>

            <p className="text-gray-300 leading-7">
              Complete inside-and-out detailing package to restore your vehicle
              and keep it protected.
            </p>
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
      <section className="py-20 px-6 md:px-20 bg-black">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold">Gallery</h3>
          <p className="text-gray-400 mt-4">
            Quality work you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <img
            src="/FCW photo 1.jpg"
            alt="Frontline Gallery"
            className="rounded-3xl shadow-2xl border border-white/10"
          />

          <img
            src="/FCW photo 2.jpg"
            alt="Frontline Gallery"
            className="rounded-3xl shadow-2xl border border-white/10"
          />

          <img
            src="/FCW photo 3.jpg"
            alt="Frontline Gallery"
            className="rounded-3xl shadow-2xl border border-white/10"
          />

          <img
            src="/FCW photo 4.jpg"
            alt="Frontline Gallery"
            className="rounded-3xl shadow-2xl border border-white/10"
          />

           <img
            src="/FCW photo 7.jpg"
            alt="Frontline Gallery"
            className="rounded-3xl shadow-2xl border border-white/10"
          />

           <img
            src="/FCW photo 8.jpg"
            alt="Frontline Gallery"
            className="rounded-3xl shadow-2xl border border-white/10"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 md:px-20 bg-blue-600 text-center"
      >
        <h3 className="text-5xl font-black mb-6">
          BOOK YOUR DETAIL TODAY
        </h3>

        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Call, email, or message us on Facebook to schedule your next wash or
          detailing service.
        </p>

        <div className="space-y-4 text-2xl font-semibold mb-10">
          <p>(941) 293-7233</p>
          <p>frontlinecarwash26@gmail.com</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="tel:9412937233"
            className="bg-white text-blue-700 hover:bg-gray-200 transition px-8 py-4 rounded-xl font-bold"
          >
            Call Now
          </a>

          <a
            href="mailto:frontlinecarwash26@gmail.com"
            className="bg-black hover:bg-neutral-800 transition px-8 py-4 rounded-xl font-bold"
          >
            Email Us
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61589980678399"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:bg-white hover:text-blue-700 transition px-8 py-4 rounded-xl font-bold"
          >
            Facebook Page
          </a>
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