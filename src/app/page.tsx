'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Play, Mail, Phone, MapPin, ChevronRight, Film, Camera, Video, Lightbulb, Award, TrendingUp } from 'lucide-react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4)
    }, 3000)
    
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Film,
      title: 'Film Production',
      description: 'Produksi film berkualitas tinggi dari konsep hingga post-production'
    },
    {
      icon: Video,
      title: 'TV Program',
      description: 'Program televisi swasta yang engaging dan profesional'
    },
    {
      icon: Camera,
      title: 'Video Content',
      description: 'Konten video kreatif untuk berbagai platform dan kebutuhan'
    },
    {
      icon: Lightbulb,
      title: 'Creative Concept',
      description: 'Pengembangan konsep kreatif dan storyboard yang menarik'
    }
  ]

  const portfolioItems = [
    { id: 1, title: 'Corporate Documentary', category: 'Documentary', image: '/assets/film-studio.png' },
    { id: 2, title: 'TV Commercial', category: 'Advertisement', image: '/assets/control-room.png' },
    { id: 3, title: 'Music Video', category: 'Entertainment', image: '/assets/film-crew.png' },
    { id: 4, title: 'TV Series Episode', category: 'Television', image: '/assets/tv-studio.png' },
    { id: 5, title: 'Brand Film', category: 'Corporate', image: '/assets/film-studio.png' },
    { id: 6, title: 'Short Film', category: 'Cinema', image: '/assets/film-crew.png' }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              MAHA JAYA PRATAMA
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-purple-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-purple-400 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.png" alt="Hero Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                PT MAHA JAYA
              </span>
              <br />
              <span className="text-white">PRATAMA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creative Video Production & Television Program Specialist
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Transforming visions into compelling visual stories through innovative film production and television programming
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Showreel
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                View Our Work
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 relative transition-all duration-1000 ${scrollY > 200 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">MAHA JAYA PRATAMA</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                We are a leading creative production company specializing in high-quality film production and private television programming. With years of experience in the industry, we've successfully delivered numerous projects that captivate audiences and exceed client expectations.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Our team consists of passionate creatives, technical experts, and industry professionals who work together to bring your vision to life with innovation and excellence.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">15+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">30+</div>
                  <div className="text-gray-400">Team Members</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-30" />
              <Card className="relative bg-white/5 backdrop-blur-md border-white/10 overflow-hidden">
                <img src="/assets/film-studio.png" alt="Film Studio" className="w-full h-48 object-cover opacity-50" />
                <CardContent className="p-8">
                  <Award className="h-16 w-16 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Excellence in Production</h3>
                  <p className="text-gray-300">
                    Committed to delivering exceptional quality in every project, from concept development to final delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 relative transition-all duration-1000 ${scrollY > 600 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive production services tailored to bring your creative vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card 
                  key={index}
                  className={`bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer ${activeService === index ? 'ring-2 ring-purple-500' : ''}`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <CardContent className="p-6 text-center">
                    <Icon className={`h-12 w-12 mx-auto mb-4 transition-all duration-300 ${activeService === index ? 'text-purple-400 scale-110' : 'text-gray-400'}`} />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-20 relative transition-all duration-1000 ${scrollY > 1000 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcase of our latest and greatest work in film and television production
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-16 w-16 text-white/50 group-hover:text-white/80 transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">Click to view project details</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 relative transition-all duration-1000 ${scrollY > 1400 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's create something amazing together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-400">
                      Jalan Taurus Nomor 37 A, Kota Bandung, Jawa Barat
                    </div>
                    <div className="text-gray-400">
                      Desa/Kelurahan Gumuruh, Kec. Batununggal
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-600/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-400">085285703497</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-red-600/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400">pt.mahajayapratama@outlook.co.id</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
                      />
                    </div>
                    <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
                MAHA JAYA PRATAMA
              </h3>
              <p className="text-gray-400">
                Creative Video Production & Television Program Specialist
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-purple-400 transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-purple-400 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-purple-400 transition-colors text-left">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-gray-400 hover:text-purple-400 transition-colors text-left">Portfolio</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="/privacy" className="block text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="block text-gray-400 hover:text-purple-400 transition-colors">Terms & Conditions</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="space-y-2">
                <div className="text-gray-400">Connect with us on social media</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT MAHA JAYA PRATAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}