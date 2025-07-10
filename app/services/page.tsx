 
 import Link from 'next/link';
 export default function WhatWeOffer() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">What We Offer</h2>
      <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg mb-12">
        At Navostra Edunitive Technologies, we blend education, technology, and creativity to build future-ready learning ecosystems. Here's a quick look at our three core service verticals:
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Core Offerings */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img
            src="/images/core.jpg" // make sure this exists in public/images/
            alt="Core Offerings"
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-blue-700 mb-2">Our Core Offerings</h3>
          <ul className="text-left text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Educational Lab Setup</li>
            <li>Training & Handholding</li>
            <li>Science Centres</li>
            <li>Skill Programs</li>
            <li>Content Creation</li>
          </ul>
          <Link href="/labs">
  <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
    LEARN MORE
  </button>
</Link>
        </div>

        {/* IT Solutions */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img
            src="/images/it.jpg" // make sure this exists
            alt="IT Solutions"
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-blue-700 mb-2">IT Solutions</h3>
          <ul className="text-left text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Learning Management Systems</li>
            <li>AI-Integrated LMS Platforms</li>
            <li>ERP, CRM, and Billing Systems for Institutions</li>
            <li>Custom Software Development for Education Sector</li>
          </ul>
         <Link href="/it-solutions">
  <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
    LEARN MORE
  </button>
</Link>
        </div>

        {/* Creative & Branding */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img
            src="/images/creative.jpg" // make sure this exists
            alt="Creative & Branding"
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-blue-700 mb-2">Creative & Branding Solutions</h3>
          <ul className="text-left text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Branding & Logos, Brochures, Flyers, Booklets</li>
            <li>Posters, Visual Kits & Catalogues</li>
            <li>Custom Educational Graphics</li>
          </ul>
          <Link href="/design">
  <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
    LEARN MORE
  </button>
</Link>

        </div>
      </div>
    </div>
  );
}
