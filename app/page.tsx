"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SchoolLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#00008A] text-white z-50 shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Excellence Academy</div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button onClick={() => scrollToSection("home")} className="hover:text-gray-300 transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-gray-300 transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("programs")} className="hover:text-gray-300 transition-colors">
                Programs
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-gray-300 transition-colors">
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col space-y-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#00008A] border-t border-blue-700">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left py-2 hover:text-gray-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left py-2 hover:text-gray-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="block w-full text-left py-2 hover:text-gray-300"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left py-2 hover:text-gray-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-[#00008A] to-[#0000CD] text-white pt-20 pb-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="/placeholder.svg?height=600&width=1200&text=School+Campus"
            alt="School background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">Shaping Tomorrow's Leaders</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Excellence Academy provides world-class education that empowers students to achieve their dreams and make
              a positive impact on the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("programs")}
                className="bg-white text-[#00008A] hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Explore Programs
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#00008A] px-8 py-3 text-lg font-semibold"
              >
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00008A] mb-6">About Excellence Academy</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 50 years, Excellence Academy has been at the forefront of educational innovation, nurturing
                young minds and preparing them for success in an ever-changing world.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our dedicated faculty, state-of-the-art facilities, and comprehensive curriculum ensure that every
                student receives the support they need to excel academically and personally.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00008A]">2,500+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00008A]">98%</div>
                  <div className="text-sm text-gray-600">Graduation Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00008A]">150+</div>
                  <div className="text-sm text-gray-600">Faculty Members</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500&text=School+Campus+Building"
                alt="School Campus"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00008A] text-center mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "Elementary Education",
                description:
                  "Building strong foundations in literacy, numeracy, and critical thinking skills through engaging and interactive learning experiences.",
              },
              {
                icon: "🔬",
                title: "STEM Programs",
                description:
                  "Cutting-edge science, technology, engineering, and mathematics programs that prepare students for the careers of tomorrow.",
              },
              {
                icon: "🎨",
                title: "Arts & Culture",
                description:
                  "Comprehensive arts education including visual arts, music, theater, and cultural studies to foster creativity and expression.",
              },
              {
                icon: "⚽",
                title: "Athletics",
                description:
                  "Competitive sports programs and physical education that promote teamwork, discipline, and healthy lifestyle habits.",
              },
              {
                icon: "🌍",
                title: "Global Studies",
                description:
                  "International curriculum and exchange programs that prepare students to be global citizens and leaders.",
              },
              {
                icon: "💼",
                title: "Career Preparation",
                description:
                  "Practical skills training and career guidance to ensure students are ready for higher education and the workforce.",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transform transition-transform"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#00008A] rounded-full flex items-center justify-center text-2xl text-white mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#00008A] mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#00008A] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <strong>Address:</strong>
                    <br />
                    123 Education Boulevard
                    <br />
                    Learning City, LC 12345
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <strong>Phone:</strong>
                    <br />
                    (555) 123-4567
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <strong>Email:</strong>
                    <br />
                    info@excellenceacademy.edu
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">🕒</span>
                  <div>
                    <strong>Office Hours:</strong>
                    <br />
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Full Name
                  </label>
                  <input type="text" id="name" name="name" required className="w-full p-3 rounded-md text-gray-900" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-md text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full p-3 rounded-md text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full p-3 rounded-md text-gray-900 resize-vertical"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-[#00008A] hover:bg-gray-100 py-3 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000066] text-white text-center py-8">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Excellence Academy. All rights reserved. | Empowering minds, shaping futures.</p>
        </div>
      </footer>
    </div>
  )
}
