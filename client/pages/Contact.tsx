import { Mail, Phone, MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FaqSection from "../components/FaqSection";

  const contactFaqs = [
    {
      q: "What are the methods, that you can use to access the platform?",
      a: "No. All deliverables are white-label by default. No branding, no watermarks, and source files are yours. The work is yours to present.",
    },
    {
      q: "How does the platform ensure all participant questions are answered?",
      a: "Our platform uses AI-powered systems to monitor and respond to participant questions in real-time, ensuring comprehensive coverage.",
    },
    {
      q: "What are the benefits of using AES-256 for encryption?",
      a: "AES-256 provides military-grade encryption security, protecting your data with 256-bit key length for maximum confidentiality.",
    },
    {
      q: "What are the key benefits of the automated meeting management of Amy AI?",
      a: "Automated meeting management streamlines scheduling, transcription, note-taking, and follow-ups, saving teams hours of manual work.",
    },
    {
      q: "What are the benefits of the AI-Enabled features in more detail?",
      a: "AI-enabled features provide intelligent insights, predictive analytics, and automated workflows that enhance productivity and decision-making.",
    },
    {
      q: "How Automated meeting management works?",
      a: "Our system automatically schedules meetings, creates agendas, generates real-time transcripts, and produces comprehensive post-meeting summaries.",
    },
    {
      q: "How do the tiered subscription plans work?",
      a: "Our tiered plans range from Starter to Enterprise, each offering different levels of features, user seats, and support options.",
    },
    {
      q: "What AI meeting management features are included in the Standard plan?",
      a: "Standard plan includes real-time transcription, AI note-taking, meeting insights, and basic automation features for teams up to 50 users.",
    },
    {
      q: "What are examples of how AI participant matching may be used?",
      a: "Participant matching connects users with similar interests, skills, or goals for networking, collaboration, and knowledge sharing.",
    },
    {
      q: "What methods does the system use to assess participant matching?",
      a: "The system uses machine learning algorithms that analyze profiles, behavior patterns, and interaction history for optimal matching.",
    },
    {
      q: "How are user profiles created and maintained?",
      a: "Users create profiles with their information, which the system continuously updates based on activity, preferences, and feedback.",
    },
    {
      q: "How can I get started with the platform?",
      a: "Simply sign up on our website, choose your subscription plan, and follow the onboarding wizard to set up your first meeting.",
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
