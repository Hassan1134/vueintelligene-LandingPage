import { Mail, Phone, MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FaqSection from "../components/FaqSection";

const contactFaqs = [
  {
    q: "What's your typical response time?",
    a: "We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.",
  },
  {
    q: "Do you offer custom solutions?",
    a: "Yes! We specialize in creating custom solutions tailored to your specific needs and requirements.",
  },
  {
    q: "What's your pricing model?",
    a: "We offer flexible pricing based on your team size and requirements. Contact us for a personalized quote.",
  },
  {
    q: "Do you provide onboarding support?",
    a: "Absolutely. We provide comprehensive onboarding and training to ensure your team gets the most out of our platform.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, bank transfers, and can discuss custom payment arrangements for enterprise clients.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
        alt="Contact Hero"
        title="Let's Connect and Create Something Great"
        subtitle="Have questions? We'd love to hear from you. Get in touch with our team."
      />

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
              { icon: MapPin, title: "Office", content: "123 Innovation Street, Tech City, TC 12345", link: "#" },
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
              />
            </div>

            <button className="w-full bg-neon-green text-black py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <FaqSection
        faqs={contactFaqs}
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services and how we can help your team."
      />

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

      <Footer />
    </div>
  );
}
