import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"

export default function HomePage() {
  return (
    <PageLayout>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hands.jpg')", // Make sure this image is in /public/images/
        }}
      >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4 bg-gradient-to-r from-white/20 to-white/10 p-4 rounded-lg backdrop-blur-sm">
  <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
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


             

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-12">
                <Link href="/labs">
                  <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                    EXPLORE OUR LABS
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
                  >
                    PARTNER WITH US
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Puzzle Graphic Placeholder */}
           
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
