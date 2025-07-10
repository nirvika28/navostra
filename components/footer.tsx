import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-2 mr-3">
                <img
                  src="/navostra-logo.png"
                  alt="Navostra Logo"
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <div className="text-2xl font-bold text-blue-400">NAVOSTRA</div>
            </div>
            <p className="text-gray-400">
              Navigating your path to success with innovative solutions and strategic expertise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Business Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Market Expansion
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/labs" className="hover:text-white">
                  Our Labs
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Navostra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
