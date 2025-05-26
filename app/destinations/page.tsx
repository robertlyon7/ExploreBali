"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"

const allDestinations = [
  {
    id: "pantai-pandawa",
    name: "Pantai Pandawa",
    location: "Kutuh, South Kuta District, Badung Regency",
    image: "/images/pantai-pandawa.jpg",
    description: "A stunning beach with white sand and limestone cliffs",
  },
  {
    id: "tanah-lot",
    name: "Tanah Lot",
    location: "Beraban, Kediri, Tabanan Regency",
    image: "/images/tanah-lot.jpg",
    description: "Iconic temple on a rock formation in the sea",
  },
  {
    id: "bedugul",
    name: "Bedugul",
    location: "Baturiti, Candikuning, Tabanan Regency",
    image: "/images/bedugul.jpg",
    description: "Mountain resort area with beautiful lakes and temples",
  },
  {
    id: "tukad-cepung-waterfall",
    name: "Tukad Cepung Waterfall",
    location: "Tembuku, Bangli Regency",
    image: "/images/tukad-cepung.jpg",
    description: "Hidden waterfall inside a cave with magical light beams",
  },
  {
    id: "lembongan-island",
    name: "Lembongan Island",
    location: "Klungkung Regency",
    image: "/images/lembongan-island.jpg",
    description: "Tropical island paradise with crystal clear waters",
  },
  {
    id: "bunut-bolong",
    name: "Bunut Bolong",
    location: "Manggisari, Pekutatan, Jembrana Regency",
    image: "/images/bunut-bolong.jpg",
    description: "Giant banyan tree with a natural tunnel through its trunk",
  },
  {
    id: "pantai-soka",
    name: "Pantai Soka",
    location: "Soka, Tabanan Regency",
    image: "/images/pantai-soka.jpg",
    description: "Black sand beach with dramatic waves and rice terraces",
  },
  {
    id: "pantai-suraberata",
    name: "Pantai Suraberata",
    location: "Suraberata, Tabanan Regency",
    image: "/images/pantai-suraberata.jpg",
    description: "Secluded beach with volcanic black sand and stunning sunsets",
  },
  {
    id: "alas-kedaton",
    name: "Alas Kedaton",
    location: "Kukuh, Marga, Tabanan Regency",
    image: "/images/alas-kedaton.jpg",
    description: "Sacred monkey forest sanctuary with ancient temple",
  },
  {
    id: "uluwatu",
    name: "Uluwatu Temple",
    location: "Pecatu, South Kuta, Badung Regency",
    image: "/images/uluwatu.jpg",
    description: "Clifftop temple with spectacular sunset views and Kecak dance",
  },
  {
    id: "mount-batur",
    name: "Mount Batur",
    location: "Kintamani, Bangli Regency",
    image: "/images/mount-batur.jpg",
    description: "Active volcano perfect for sunrise trekking adventures",
  },
  {
    id: "tegallalang",
    name: "Tegallalang Rice Terraces",
    location: "Tegallalang, Gianyar Regency",
    image: "/images/tegallalang.jpg",
    description: "UNESCO World Heritage rice terraces with stunning views",
  },
  {
    id: "sekumpul-waterfall",
    name: "Sekumpul Waterfall",
    location: "Sekumpul, Buleleng Regency",
    image: "/images/sekumpul-waterfall.jpg",
    description: "Bali's most beautiful waterfall with seven cascading falls",
  },
  {
    id: "jatiluwih",
    name: "Jatiluwih Rice Terraces",
    location: "Jatiluwih, Tabanan Regency",
    image: "/images/jatiluwih.jpg",
    description: "Expansive rice terraces offering panoramic mountain views",
  },
  {
    id: "nusa-penida",
    name: "Nusa Penida",
    location: "Klungkung Regency",
    image: "/images/nusa-penida.jpg",
    description: "Rugged island with dramatic cliffs and pristine beaches",
  },
  {
    id: "kuta-beach",
    name: "Kuta Beach",
    location: "Kuta, Badung Regency",
    image: "/images/kuta-beach.jpg",
    description: "Famous surfing beach with vibrant nightlife and golden sand",
  },
  {
    id: "seminyak",
    name: "Seminyak Beach",
    location: "Seminyak, Badung Regency",
    image: "/images/seminyak.jpg",
    description: "Upscale beach destination with luxury resorts and beach clubs",
  },
  {
    id: "sanur-beach",
    name: "Sanur Beach",
    location: "Sanur, Denpasar",
    image: "/images/sanur-beach.jpg",
    description: "Peaceful beach perfect for families with calm waters",
  },
  {
    id: "besakih-temple",
    name: "Besakih Temple",
    location: "Besakih, Karangasem Regency",
    image: "/images/besakih-temple.jpg",
    description: "Mother Temple of Bali, the largest and holiest temple complex",
  },
  {
    id: "goa-gajah",
    name: "Goa Gajah (Elephant Cave)",
    location: "Bedulu, Blahbatuh, Gianyar Regency",
    image: "/images/goa-gajah.jpg",
    description: "Ancient archaeological site with intricate stone carvings",
  },
  {
    id: "tirta-empul",
    name: "Tirta Empul Temple",
    location: "Tampaksiring, Gianyar Regency",
    image: "/images/tirta-empul.jpg",
    description: "Sacred water temple famous for its holy spring water",
  },
  {
    id: "ubud-monkey-forest",
    name: "Ubud Monkey Forest",
    location: "Ubud, Gianyar Regency",
    image: "/images/ubud-monkey-forest.jpg",
    description: "Sacred sanctuary home to hundreds of long-tailed macaques",
  },
  {
    id: "campuhan-ridge",
    name: "Campuhan Ridge Walk",
    location: "Ubud, Gianyar Regency",
    image: "/images/campuhan-ridge.jpg",
    description: "Scenic walking trail with panoramic views of lush valleys",
  },
  {
    id: "gitgit-waterfall",
    name: "Gitgit Waterfall",
    location: "Gitgit, Sukasada, Buleleng Regency",
    image: "/images/gitgit-waterfall.jpg",
    description: "Majestic 35-meter waterfall surrounded by tropical forest",
  },
  {
    id: "banyumala-waterfall",
    name: "Banyumala Twin Waterfall",
    location: "Wanagiri, Sukasada, Buleleng Regency",
    image: "/images/banyumala-waterfall.jpg",
    description: "Hidden twin waterfalls with crystal clear natural pools",
  },
  {
    id: "lovina-beach",
    name: "Lovina Beach",
    location: "Buleleng Regency",
    image: "/images/lovina-beach.jpg",
    description: "Black sand beach famous for dolphin watching at sunrise",
  },
  {
    id: "amed-beach",
    name: "Amed Beach",
    location: "Amed, Karangasem Regency",
    image: "/images/amed-beach.jpg",
    description: "Traditional fishing village with excellent diving and snorkeling",
  },
]

const DESTINATIONS_PER_PAGE = 9

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const filteredDestinations = allDestinations.filter(
    (destination) =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredDestinations.length / DESTINATIONS_PER_PAGE)
  const startIndex = (currentPage - 1) * DESTINATIONS_PER_PAGE
  const endIndex = startIndex + DESTINATIONS_PER_PAGE
  const currentDestinations = filteredDestinations.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const generatePageNumbers = () => {
    const pages = []
    const maxVisiblePages = 7

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i)
        }
        pages.push("...")
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 3) {
        pages.push(1)
        pages.push("...")
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push("...")
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push("...")
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#050d21] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg md:text-xl font-bold">
            Explore <span className="text-[#4aa4e9]">Bali</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#4aa4e9] transition-colors">
              Home
            </Link>
            <Link href="/destinations" className="text-[#4aa4e9]">
              Destinations
            </Link>
            <Link href="/about" className="hover:text-[#4aa4e9] transition-colors">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-700 mt-4">
            <div className="flex flex-col space-y-1 pt-4 pb-4">
              <Link
                href="/"
                className={`hover:text-[#4aa4e9] transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white/10 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className={`text-[#4aa4e9] hover:text-[#4aa4e9] transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white/10 transform ${
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

      {/* Header Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-[#050d21]">List of Destinations</h1>
            <p className="text-sm md:text-base text-gray-600 mb-8">Discover the most popular destinations in Bali</p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1) // Reset to first page when searching
                }}
                className="pl-10 py-3 border-2 border-gray-200 focus:border-[#4aa4e9] rounded-lg"
              />
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-6">
            <p className="text-gray-600 text-center">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredDestinations.length)} of{" "}
              {filteredDestinations.length} destinations
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {currentDestinations.map((destination) => (
              <Link key={destination.id} href={`/destinations/${destination.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-0">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-[#050d21] mb-2">{destination.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {destination.location}
                      </div>
                      <p className="text-sm text-gray-500">{destination.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No destinations found matching your search.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 bg-white rounded-full shadow-lg px-4 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 hover:bg-gray-100 disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {generatePageNumbers().map((page, index) => (
                  <div key={index}>
                    {page === "..." ? (
                      <span className="px-3 py-1 text-gray-500">...</span>
                    ) : (
                      <Button
                        variant={currentPage === page ? "default" : "ghost"}
                        size="sm"
                        onClick={() => handlePageChange(page as number)}
                        className={`px-3 py-1 min-w-[32px] ${
                          currentPage === page ? "bg-[#4aa4e9] text-white hover:bg-[#4aa4e9]/90" : "hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </Button>
                    )}
                  </div>
                ))}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 hover:bg-gray-100 disabled:opacity-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
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
