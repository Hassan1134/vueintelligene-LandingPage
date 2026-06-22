import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 w-full bg-gradient-to-b from-white to-neon-green/5 z-50 border-b border-gray-300/50">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="font-bold text-lg text-gray-900">Logo</div>
          
          <nav className="hidden md:flex gap-12 items-center">
            <a href="/" className="text-gray-900 hover:text-gray-700 text-sm font-medium">Home</a>
            <a href="/about" className="text-gray-900 hover:text-gray-700 text-sm font-medium">About</a>
            <a href="/projects" className="text-gray-900 hover:text-gray-700 text-sm font-medium">Works</a>
          </nav>

          <div className="hidden md:flex gap-3 items-center">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 transition">
              Get Started
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-5 py-1.5 rounded-full text-xs font-medium hover:bg-gray-900 hover:text-white transition">
              Login
            </button>
          </div>

          <button className="md:hidden text-gray-900" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-300/50 bg-gradient-to-b from-white to-neon-green/5">
            <nav className="flex flex-col gap-4 px-4 py-4">
              <a href="/" className="text-gray-900 hover:text-gray-700">Home</a>
              <a href="/about" className="text-gray-900 hover:text-gray-700">About</a>
              <a href="/projects" className="text-gray-900 hover:text-gray-700">Works</a>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 w-full">
                Get Started
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-full text-xs font-medium hover:bg-gray-900 hover:text-white w-full">
                Login
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden mx-4 sm:mx-6 lg:mx-8 mt-6 rounded-3xl">
        <div className="absolute inset-0 bg-black">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
            alt="Contact Hero"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight">
            Let's Connect and Create Something Great
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            {[
              { icon: Mail, title: "Email", content: "hello@vuetelligence.com", link: "mailto:hello@vuetelligence.com" },
              { icon: Phone, title: "Phone", content: "+1 (555) 123-4567", link: "tel:+15551234567" },
              { icon: MapPin, title: "Office", content: "123 Innovation Street, Tech City, TC 12345", link: "#" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a 
                  key={i}
                  href={item.link}
                  className="bg-white p-8 rounded-2xl hover:shadow-lg hover:-translate-y-2 transition duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-neon-green" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Send us a Message</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <form className="bg-white border border-gray-200 p-10 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-gray-900 font-semibold text-sm block mb-2">Full Name *</label>
                <input 
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition"
                  required
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm block mb-2">Email *</label>
                <input 
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-gray-900 font-semibold text-sm block mb-2">Company</label>
                <input 
                  type="text"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm block mb-2">Subject *</label>
                <input 
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="text-gray-900 font-semibold text-sm block mb-2">Message *</label>
              <textarea 
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition resize-none"
                required
              ></textarea>
            </div>

            <button className="w-full bg-neon-green text-black py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Find answers to common questions about our services and how we can help your team.
              </p>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="space-y-0 animate-fade-in-right">
              {[
                {
                  q: "What's your typical response time?",
                  a: "We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly."
                },
                {
                  q: "Do you offer custom solutions?",
                  a: "Yes! We specialize in creating custom solutions tailored to your specific needs and requirements."
                },
                {
                  q: "What's your pricing model?",
                  a: "We offer flexible pricing based on your team size and requirements. Contact us for a personalized quote."
                },
                {
                  q: "Do you provide onboarding support?",
                  a: "Absolutely. We provide comprehensive onboarding and training to ensure your team gets the most out of our platform."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, bank transfers, and can discuss custom payment arrangements for enterprise clients."
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className="group border-b border-gray-200 py-5 cursor-pointer transition duration-300 hover:bg-gray-50/50"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full text-left flex items-start justify-between gap-4"
                  >
                    <span className="font-medium text-gray-900 text-sm leading-relaxed flex-1 hover:text-neon-green transition">
                      {faq.q}
                    </span>
                    <span className={`text-gray-400 flex-shrink-0 text-xl transition-transform duration-300 ${expandedFaq === i ? "rotate-180 text-neon-green" : ""}`}>
                      −
                    </span>
                  </button>
                  {expandedFaq === i && (
                    <p className="text-gray-600 mt-3 text-sm leading-relaxed animate-fade-in pl-0">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-neon-green to-neon-green-dark py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to Get Started?</h2>
          <p className="text-black/80 text-lg mb-8 leading-relaxed">
            Schedule a demo or get in touch with our team today
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300 transform hover:scale-105">
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <p className="text-gray-400">© 2024 vuetelligence. All rights reserved.</p>
          <div className="text-gray-400">info@vuetelligence.com</div>
        </div>
      </footer>
    </div>
  );
}
