
'use client';

import Link from 'next/link';
import Image from 'next/image';

export  function Navbar() {
  return (
    <nav className="bg-[#6fc4d3] px-6 py-3 shadow-md flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-2 md:mb-0">
        <Image
          src="/images/logo.png" // Your actual logo
          alt="Navostra Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <div>
          <div className="text-xl font-bold text-white">NAVOSTRA</div>
          <div className="text-xs font-medium text-white/90">EDUNITIVE TECHNOLOGIES</div>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-gradient-to-b from-[#4da6ff] to-[#3399ff] hover:from-[#1e90ff] hover:to-[#0066cc] text-white font-semibold px-4 py-2 rounded-full shadow-md transition"
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="bg-gradient-to-b from-[#4da6ff] to-[#3399ff] hover:from-[#1e90ff] hover:to-[#0066cc] text-white font-semibold px-4 py-2 rounded-full shadow-md transition"
        >
          ABOUT US
        </Link>
        <Link
          href="/services"
          className="bg-gradient-to-b from-[#4da6ff] to-[#3399ff] hover:from-[#1e90ff] hover:to-[#0066cc] text-white font-semibold px-4 py-2 rounded-full shadow-md transition"
        >
          SERVICES
        </Link>
        <Link
          href="/contact"
          className="bg-gradient-to-b from-[#4da6ff] to-[#3399ff] hover:from-[#1e90ff] hover:to-[#0066cc] text-white font-semibold px-4 py-2 rounded-full shadow-md transition"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#111f9e] text-white px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left: Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="rounded-xl overflow-hidden border-4 border-orange-500">
          <img
            src="/images/connecton.jpeg" // Make sure this image is in public/images/
            alt="Student waving"
            className="w-full h-full object-cover max-w-md"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="md:w-1/2 w-full text-left space-y-6">
        <h2 className="text-3xl font-bold">We’d love to connect with you!</h2>

        <p className="text-white/90">
          Whether you're a school, NGO, CSR partner, company or educator – reach out to explore how we can co-create the future of learning.
        </p>

        <button className="bg-black rounded-full px-6 py-2 text-white hover:bg-white hover:text-black transition">
          GET IN TOUCH
        </button>

        {/* Contact Info */}
        <div className="space-y-2 text-lg">
          <p>
            📧 <strong>Email:</strong> founder.alphastrategix@gmail.com
          </p>
          <p>
            📍 <strong>Address:</strong> Sonipat, Haryana
          </p>
        </div>

        {/* Connect Button */}
        <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold px-6 py-2 rounded-full">
          CONNECT WITH US
        </button>

        {/* Social Media Links */}
        <div className="flex gap-6 text-xl pt-2">
          <a href="https://www.instagram.com/navostraoffical" className="hover:text-pink-400 transition">📸 Instagram</a>
          <a href="https://www.linkedin.com/company/navostra-edunitive-technologies/" className="hover:text-blue-400 transition">💼 LinkedIn</a>
          <a href="https://www.facebook.com/profile.php?id=61577076234418&mibextid=ZbWKwL" className="hover:text-blue-300 transition">📘 Facebook</a>
        </div>
      </div>
    </div>
  );
}
