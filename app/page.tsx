"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X } from "lucide-react"

export default function ExploreBali() {
  const [activeCategory, setActiveCategory] = useState("Adventure")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categorizedDestinations = {
    Adventure: [
      {
        id: "nusa-penida",
        title: "Nusa Penida",
        subtitle: "One of the best islands",
        image: "/images/nusa-penida.jpg",
      },
      {
        id: "mount-batur",
        title: "Mount Batur",
        subtitle: "Sunrise volcano trekking",
        image: "/images/mount-batur.jpg",
      },
      {
        id: "sekumpul-waterfall",
        title: "Sekumpul Waterfall",
        subtitle: "Bali's most beautiful waterfall",
        image: "/images/sekumpul-waterfall.jpg",
      },
    ],
    Romantic: [
      {
        id: "tanah-lot",
        title: "Tanah Lot",
        subtitle: "Enjoying sunset views during",
        image: "/images/tanah-lot.jpg",
      },
      {
        id: "uluwatu",
        title: "Uluwatu Temple",
        subtitle: "Clifftop temple with sunset",
        image: "/images/uluwatu.jpg",
      },
      {
        id: "seminyak",
        title: "Seminyak Beach",
        subtitle: "Luxury beach with sunset",
        image: "/images/seminyak.jpg",
      },
    ],
    Mountains: [
      {
        id: "bedugul",
        title: "Bedugul",
        subtitle: "Mountain resort with lakes",
        image: "/images/bedugul.jpg",
      },
      {
        id: "jatiluwih",
        title: "Jatiluwih Rice Terraces",
        subtitle: "UNESCO World Heritage site",
        image: "/images/jatiluwih.jpg",
      },
      {
        id: "campuhan-ridge",
        title: "Campuhan Ridge Walk",
        subtitle: "Scenic walking trail in Ubud",
        image: "/images/campuhan-ridge.jpg",
      },
    ],
    Heritage: [
      {
        id: "goa-gajah",
        title: "Goa Gajah",
        subtitle: "Cave of elephant",
        image: "/images/goa-gajah.jpg",
      },
      {
        id: "besakih-temple",
        title: "Besakih Temple",
        subtitle: "Mother Temple of Bali",
        image: "/images/besakih-temple.jpg",
      },
      {
        id: "tirta-empul",
        title: "Tirta Empul Temple",
        subtitle: "Sacred water temple",
        image: "/images/tirta-empul.jpg",
      },
    ],
  }

  const categories = ["Adventure", "Romantic", "Mountains", "Heritage"]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <nav className="sticky top-0 z-50 bg-[#050d21] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg md:text-xl font-bold">
            Explore <span className="text-[#4aa4e9]">Bali</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#4aa4e9] hover:text-[#4aa4e9] transition-colors">
              Home
            </Link>
            <Link href="/destinations" className="hover:text-[#4aa4e9] transition-colors">
              Destinations
            </Link>
            <Link href="/about" className="hover:text-[#4aa4e9] transition-colors">
              About
            </Link>
          </div>

          <button
            className="md:hidden p-2 relative z-50 transition-all duration-300 ease-in-out hover:bg-white/10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-75"
                }`}
              />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-700 mt-4">
            <div className="flex flex-col space-y-1 pt-4 pb-4">
              <Link
                href="/"
                className={`text-[#4aa4e9] hover:text-[#4aa4e9] transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white/10 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className={`hover:text-[#4aa4e9] transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white/10 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? "150ms" : "0ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/about"
                className={`hover:text-[#4aa4e9] transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white/10 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-[#050d21] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 p-8 min-h-[500px]">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Discover,
              <br />
              Explore Bali
            </h1>
            <p className="text-base md:text-lg mb-8 text-gray-300 leading-relaxed">
              Explore stunning destinations, unique experiences, and plan your perfect trip today!
            </p>
            <Link href="/destinations">
              <Button className="bg-[#4aa4e9] hover:bg-[#4aa4e9]/90 w-fit px-6 py-3 rounded-full">Explore Now →</Button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/landingimage1.jpg"
              alt="Bali Temple Pathway"
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-[#4aa4e9] font-medium mb-2">Traveler's Favourite</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#050d21]">
              Explore All Popular
              <br />
              Locations
            </h2>
            <p className="text-gray-600 max-w-md">
              Get ready and embark on your dream adventure with our expert guidance and tailored experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-4xl">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/besakih-temple.jpg"
                  alt="Ancient Temple"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/landingimage2.jpg"
                  alt="Beach Resort"
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/landingimage3.jpg"
                  alt="Coastal Paradise"
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/landingimage4.jpg"
                  alt="Ocean View"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#050d21]">Plan your Next Trip</h2>

          <div className="flex space-x-8 mb-8 border-b">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-2 border-b-2 font-medium transition-colors ${
                  activeCategory === category
                    ? "border-[#4aa4e9] text-[#4aa4e9]"
                    : "border-transparent text-gray-500 hover:text-[#4aa4e9]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categorizedDestinations[activeCategory as keyof typeof categorizedDestinations].map((destination) => (
              <Link key={destination.id} href={`/destinations/${destination.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-0">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.title}
                      width={250}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-[#050d21] mb-1">{destination.title}</h3>
                      <p className="text-sm text-gray-600">{destination.subtitle}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ready for Next Adventure */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0 relative">
              <Image
                src="/images/landingimage5.jpg"
                alt="Temple by the Sea"
                width={1000}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready for your Next Adventure</h2>
                  <Link href="/destinations">
                    <Button className="bg-[#4aa4e9] hover:bg-[#4aa4e9]/90 px-6 py-3 rounded-full">Explore Now →</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050d21] text-white py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="text-2xl font-bold mb-6">
              Explore <span className="text-[#4aa4e9]">Bali</span>
            </div>

            <div className="flex space-x-8 mb-8">
              <a href="#" className="text-white hover:text-[#4aa4e9] transition-colors">
                Discover
              </a>
              <a href="#" className="text-white hover:text-[#4aa4e9] transition-colors">
                Trips
              </a>
              <a href="#" className="text-white hover:text-[#4aa4e9] transition-colors">
                About Us
              </a>
            </div>

            <p className="text-gray-300 max-w-2xl leading-relaxed">
              Welcome to Explore Bali, your ultimate guide to the breathtaking island of Bali! Whether you're a
              first-time visitor or a seasoned traveler, our website is designed to help you discover the best that Bali
              has to offer—from pristine beaches and lush rice terraces to vibrant cultural experiences and hidden gems.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#4aa4e9] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#4aa4e9] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#4aa4e9] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400">© All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
