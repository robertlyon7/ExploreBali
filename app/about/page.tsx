"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MapPin, Camera, Heart, Star, Award, Globe, Compass, Menu, X } from "lucide-react"

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const stats = [
    { number: "50+", label: "Destinations", icon: MapPin },
    { number: "10K+", label: "Happy Travelers", icon: Users },
    { number: "5", label: "Years Experience", icon: Award },
    { number: "100+", label: "Local Partners", icon: Globe },
  ]

  const values = [
    {
      title: "Authentic Experiences",
      description:
        "We believe in showcasing the real Bali, connecting travelers with authentic local culture and traditions.",
      icon: Heart,
    },
    {
      title: "Sustainable Tourism",
      description: "We're committed to responsible travel that preserves Bali's natural beauty for future generations.",
      icon: Globe,
    },
    {
      title: "Expert Guidance",
      description: "Our local expertise ensures you discover hidden gems and experience Bali like a true insider.",
      icon: Compass,
    },
    {
      title: "Memorable Moments",
      description: "Every journey should create lasting memories that you'll treasure for a lifetime.",
      icon: Camera,
    },
  ]

  const team = [
    {
      name: "Made Sutrisna",
      role: "Founder & Local Guide",
      image: "/images/ourteam1.jpg",
      description:
        "Born and raised in Bali, Made has been sharing his island's beauty with travelers for over 10 years.",
    },
    {
      name: "Kadek Sari",
      role: "Cultural Expert",
      image: "/images/ourteam2.jpg",
      description:
        "Kadek specializes in Balinese traditions and ensures authentic cultural experiences for our guests.",
    },
    {
      name: "Wayan Agus",
      role: "Adventure Coordinator",
      image: "/images/ourteam3.jpg",
      description: "Wayan organizes thrilling adventures from volcano hikes to underwater explorations.",
    },
  ]

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
            <Link href="/destinations" className="hover:text-[#4aa4e9] transition-colors">
              Destinations
            </Link>
            <Link href="/about" className="text-[#4aa4e9]">
              About Us
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
                className={`text-[#4aa4e9] hover:text-[#4aa4e9] transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white/10 transform ${
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

      {/* Hero Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/aboutimage2.jpg"
                alt="Bali Temple at Sunset"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#4aa4e9] text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-[#050d21] mb-6">About Us</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to Explore Bali, your ultimate guide to the breathtaking island of Bali! Whether you're a
                first-time visitor or a seasoned traveler, our website is designed to help you discover the best that
                Bali has to offer—from pristine beaches and lush rice terraces to vibrant cultural experiences and
                hidden gems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded by passionate locals who know every corner of this magical island, we're dedicated to creating
                unforgettable experiences that connect you with the true spirit of Bali. Our mission goes beyond just
                tourism—we're committed to sustainable travel that benefits local communities and preserves the natural
                beauty of our beloved island.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-[#4aa4e9] hover:bg-[#4aa4e9]/90">
                  <Link href="/destinations">Explore Destinations</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#4aa4e9] text-[#4aa4e9] hover:bg-[#4aa4e9] hover:text-white"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-8 bg-[#050d21] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These numbers represent our commitment to providing exceptional travel experiences and supporting the
              local Balinese community.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#4aa4e9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-[#4aa4e9] mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#050d21] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Explore Bali, our mission is to help travelers create unforgettable memories by providing
                comprehensive, up-to-date, and reliable information about Bali's top attractions, unique experiences,
                and local insights.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that every traveler deserves an authentic and enriching adventure, and we are committed to
                making your journey seamless and enjoyable. Our platform connects you with the heart and soul of Bali,
                ensuring that your visit contributes positively to local communities while creating memories that last a
                lifetime.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#4aa4e9] rounded-full"></div>
                  <span className="text-gray-700">Authentic local experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#4aa4e9] rounded-full"></div>
                  <span className="text-gray-700">Sustainable tourism practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#4aa4e9] rounded-full"></div>
                  <span className="text-gray-700">Supporting local communities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/aboutimage3.jpg"
                alt="Bali Cliff"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-[#050d21]">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#050d21] mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experiences we create for our travelers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeValue === index ? "ring-2 ring-[#4aa4e9] shadow-lg" : ""
                }`}
                onClick={() => setActiveValue(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-[#4aa4e9] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#050d21] mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#050d21] mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of local experts is dedicated to sharing the beauty and culture of Bali with travelers
              from around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-[#050d21] mb-1">{member.name}</h3>
                    <p className="text-[#4aa4e9] font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/landingimage4.jpg"
            alt="Bali Adventure"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050d21]/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Your Adventure Starts Here</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Ready to discover the magic of Bali? Let us guide you through an unforgettable journey filled with
            breathtaking landscapes, rich culture, and authentic experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/destinations">
              <Button size="lg" className="bg-[#4aa4e9] hover:bg-[#4aa4e9]/90 px-8 py-3">
                Start Exploring
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-[#050d21] bg-white px-8 py-3"
            >
              Plan Your Trip
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-[#050d21] text-white py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="text-2xl font-bold mb-6">
              Explore <span className="text-[#4aa4e9]">Bali</span>
            </div>

            <div className="flex space-x-8 mb-8">
              <a href="/" className="text-white hover:text-[#4aa4e9] transition-colors">
                Home
              </a>
              <a href="/destinations" className="text-white hover:text-[#4aa4e9] transition-colors">
                Destinations
              </a>
              <a href="/" className="text-white hover:text-[#4aa4e9] transition-colors">
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
                <a href="https://x.com/" className="text-gray-400 hover:text-[#4aa4e9] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/" className="text-gray-400 hover:text-[#4aa4e9] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.pinterest.com/" className="text-gray-400 hover:text-[#4aa4e9] transition-colors">
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
