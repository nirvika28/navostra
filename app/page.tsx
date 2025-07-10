import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"

export default function HomePage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                  Providing Star-Class
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  Innovations in
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Education & Technology
                </span>
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/labs">
                <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                  EXPLORE OUR LABS
                </Button>
              </Link>
              <Link href="/partners">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
                >
                  PARTNER WITH US
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Puzzle Graphic */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Hand illustration */}
              <div className="absolute bottom-0 right-1/4 w-32 h-40 bg-gradient-to-t from-orange-300 to-orange-200 rounded-t-full transform rotate-12"></div>

              {/* Puzzle pieces */}
              <div className="absolute top-8 right-8 transform rotate-12">
                <div className="relative">
                  <div className="w-32 h-24 bg-gradient-to-br from-pink-400 to-pink-500 relative">
                    <div className="absolute -right-3 top-1/2 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute top-2 right-2 text-white font-bold text-xs">SOFTWARE</div>
                    <div className="absolute bottom-2 right-2 text-white font-bold text-xs">TOOLS</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 left-8 transform -rotate-6">
                <div className="relative">
                  <div className="w-32 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 relative">
                    <div className="absolute -right-3 top-1/2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute -top-3 left-1/2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm">
                      EDUCATION
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 right-12 transform rotate-6">
                <div className="relative">
                  <div className="w-32 h-24 bg-gradient-to-br from-blue-400 to-blue-500 relative">
                    <div className="absolute -left-3 top-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute bottom-2 left-2 text-white font-bold text-lg">DESIGN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom geometric lines */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-4">
          <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
          <div className="w-24 h-1 bg-teal-600"></div>
          <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
          <div className="w-32 h-1 bg-teal-600"></div>
          <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
        </div>
      </div>
    </PageLayout>
  )
}
