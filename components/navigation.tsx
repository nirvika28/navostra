"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-2 mr-3">
              <img
                src="/navostra-logo.png"
                alt="Navostra Logo"
                className="w-8 h-8 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="text-2xl font-bold text-gray-900">NAVOSTRA</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/labs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Labs
              </Link>
              <Link href="/partners" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Partners
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
