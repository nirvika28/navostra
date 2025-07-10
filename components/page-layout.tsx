import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface PageLayoutProps {
  children: React.ReactNode
  showContactButton?: boolean
}

export function PageLayout({ children, showContactButton = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-500 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-32"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/10 rounded-full translate-y-32"></div>
        <div className="absolute top-1/4 left-0 w-48 h-32 bg-white/5 transform -rotate-12 -translate-x-16"></div>
        <div className="absolute top-1/2 right-0 w-56 h-40 bg-white/5 transform rotate-12 translate-x-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-24 bg-white/5 transform -rotate-6"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-3">
              <img src="/images/logo.jpg" alt="Navostra Logo" className="w-25 h-38 object-contain" />

                <div>

                </div>
              </div>
            </Link>

            {/* Navigation Pills */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/">
                <Button className="bg-blue-500/80 hover:bg-blue-600/80 text-white px-8 py-2 rounded-full border-2 border-white/20">
                  HOME
                </Button>
              </Link>
              <Link href="/about">
                <Button className="bg-blue-500/80 hover:bg-blue-600/80 text-white px-8 py-2 rounded-full border-2 border-white/20">
                  ABOUT US
                </Button>
              </Link>
              <Link href="/services">
                <Button className="bg-blue-500/80 hover:bg-blue-600/80 text-white px-8 py-2 rounded-full border-2 border-white/20">
                  SERVICES
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-blue-500/80 hover:bg-blue-600/80 text-white px-8 py-2 rounded-full border-2 border-white/20">
                  CONTACT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>

      {/* Contact Us Button - Bottom Right */}
      {showContactButton && (
        <Link href="/contact">
          <Button className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Contact Us</span>
          </Button>
        </Link>
      )}

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-20">
        <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
          <div className="flex justify-around">
            <Link href="/">
              <Button size="sm" className="bg-blue-500/80 text-white rounded-full">
                HOME
              </Button>
            </Link>
            <Link href="/about">
              <Button size="sm" className="bg-blue-500/80 text-white rounded-full">
                ABOUT
              </Button>
            </Link>
            <Link href="/services">
              <Button size="sm" className="bg-blue-500/80 text-white rounded-full">
                SERVICES
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-blue-500/80 text-white rounded-full">
                CONTACT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
