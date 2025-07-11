import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-200 font-sans">
      {/* Header */}
      <header className="bg-blue-120 flex flex-col md:flex-row items-center justify-between px-8 py-6 md:py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo.jpg"
              alt="Navostra Logo"
              width={150}
              height={150}
              className="rounded-md object-contain"
            />
            <span className="text-2xl md:text-3xl font-extrabold text-blue-900">
              NAVOSTRA EDUNITIVE TECHNOLOGIES
            </span>
          </div>

          {/* Navigation Buttons */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">

<Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md">
  HOME
</Link>
<Link href="/about" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md">
  ABOUT US
</Link>
<Link href="/services" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md">
  SERVICES
</Link>
<Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md">
  CONTACT
</Link>

</nav>


        </div>
      </header>

      {/* Main Content */}
      <section className="text-center mt-12 px-4">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          Designs that Speak Education
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Our in-house creative studio brings your institution’s vision to life through impactful design.
          We craft visually engaging materials that communicate clearly, inspire trust, and enhance your educational brand.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Service Card */}
          {[
            { img: '/images/design1.png', title: 'LOGOS & BRAND IDENTITY' },
            { img: '/images/design2.png', title: 'POSTERS, BOOKLETS & FLYERS' },
            { img: '/images/design3.png', title: 'BROCHURES & CATALOGUES' },
            { img: '/images/design4.png', title: 'EDUCATIONAL VISUALS & PROMOTIONAL COLLATERAL' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-900 rounded-xl p-6 flex flex-col items-center hover:scale-[1.03] transition-transform duration-200"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={130}
                height={90}
                className="mb-4 rounded"
              />
              <h2 className="text-white text-lg font-semibold text-center">{item.title}</h2>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xl font-semibold text-blue-700">
          From concept to completion, we ensure every design reflects professionalism, purpose, and creativity.
        </p>
      </section>
    </main>
  );
}
