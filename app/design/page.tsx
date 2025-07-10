// app/page.tsx

import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-200 flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-3">
          {/* Replace with your logo image */}
          <Image src="/logo.png" alt="Navostra Logo" width={60} height={60} />
          <span className="text-2xl font-bold text-blue-900">NAVOSTRA EDUNITIVE TECHNOLOGIES</span>
        </div>
        <nav className="space-x-4">
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold">HOME</button>
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold">ABOUT US</button>
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold">SERVICES</button>
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold">CONTACT</button>
        </nav>
      </header>

      {/* Main Content */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Designs that Speak Education</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Our in-house creative studio brings your institution’s vision to life through impactful design. We craft visually engaging materials that communicate clearly, inspire trust, and enhance your educational brand.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Logos & Brand Identity */}
          <div className="bg-blue-900 rounded-xl p-6 flex flex-col items-center">
            <Image src="/logo-identity.jpg" alt="Logos & Brand Identity" width={120} height={80} className="mb-4 rounded" />
            <h2 className="text-white text-xl font-semibold">LOGOS & BRAND IDENTITY</h2>
          </div>
          {/* Posters, Booklets & Flyers */}
          <div className="bg-blue-900 rounded-xl p-6 flex flex-col items-center">
            <Image src="/posters-flyers.jpg" alt="Posters, Booklets & Flyers" width={120} height={80} className="mb-4 rounded" />
            <h2 className="text-white text-xl font-semibold">POSTERS, BOOKLETS & FLYERS</h2>
          </div>
          {/* Brochures & Catalogues */}
          <div className="bg-blue-900 rounded-xl p-6 flex flex-col items-center">
            <Image src="/brochures.jpg" alt="Brochures & Catalogues" width={120} height={80} className="mb-4 rounded" />
            <h2 className="text-white text-xl font-semibold">BROCHURES & CATALOGUES</h2>
          </div>
          {/* Educational Visuals & Promotional Collateral */}
          <div className="bg-blue-900 rounded-xl p-6 flex flex-col items-center">
            <Image src="/educational-visuals.jpg" alt="Educational Visuals & Promotional Collateral" width={120} height={80} className="mb-4 rounded" />
            <h2 className="text-white text-xl font-semibold">EDUCATIONAL VISUALS & PROMOTIONAL COLLATERAL</h2>
          </div>
        </div>

        <p className="mt-12 text-xl font-semibold text-blue-700">
          From concept to completion, we ensure every design reflects professionalism, purpose, and creativity.
        </p>
      </section>
    </main>
  );
}
