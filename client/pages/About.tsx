import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
        alt="About Hero"
        title="Empowering teams with innovative collaboration solutions"
        buttons={[{ label: "Learn Our Story", variant: "primary" }]}
      />

      {/* Company Story */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">Our Journey</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Founded with a vision to transform how teams communicate and collaborate, we've been at the forefront of innovation for over a decade.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Our passion for solving real-world problems has driven us to create solutions that not only meet expectations but exceed them. Every product we build is a testament to our commitment to excellence.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Today, we work with hundreds of companies across the globe, helping them unlock the potential of their teams through intelligent, intuitive technology.
              </p>
            </div>

            <div className="h-80 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl overflow-hidden hover:shadow-2xl transition duration-300 animate-fade-in-right">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Team"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Mission & Vision</h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Guided by clear values and ambitious goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            <div className="bg-white p-10 rounded-2xl border-l-4 border-neon-green hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To empower teams worldwide by providing intelligent collaboration tools that enhance communication, streamline workflows, and unlock human potential through technology.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border-l-4 border-neon-green hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                A world where distance is irrelevant, where teams collaborate effortlessly across borders, and where technology brings people together to achieve extraordinary things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Core Values</h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            {[
              { title: "Innovation", desc: "Continuously pushing boundaries to deliver cutting-edge solutions" },
              { title: "Integrity", desc: "Building trust through honest, transparent communication" },
              { title: "Collaboration", desc: "Believing in the power of teamwork and shared success" },
              { title: "Excellence", desc: "Committed to highest quality in everything we do" },
              { title: "Impact", desc: "Creating meaningful change that matters to our customers" },
              { title: "Growth", desc: "Embracing learning and evolution in all aspects" },
            ].map((value, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-2 transition duration-300">
                <div className="w-12 h-12 bg-neon-green rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
              What sets us apart from the competition
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Industry Experience",
                desc: "Over a decade of expertise in collaboration technology, serving companies from startups to enterprises.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
              },
              {
                title: "Customer-First Approach",
                desc: "Every feature is built based on real feedback from our users. We listen, learn, and improve constantly.",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
                reverse: true,
              },
              {
                title: "24/7 Premium Support",
                desc: "Our dedicated support team is always ready to help you succeed. Your success is our success.",
                image: "https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=600&h=400&fit=crop",
              },
            ].map((item, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in-up`}>
                <div className={item.reverse ? "order-2 md:order-2" : "order-1"}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                </div>
                <div className={`h-80 bg-gray-300 rounded-3xl overflow-hidden hover:shadow-2xl transition duration-300 ${item.reverse ? "order-1 md:order-1" : "order-2"}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Team</h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Talented individuals united by a shared passion for innovation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 animate-fade-in-up">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-64 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${i === 1 ? "1507003211169" : i === 2 ? "1438761681033" : i === 3 ? "1516321318423" : "1500648767791"}?w=400&h=400&fit=crop`}
                    alt={`Team member ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Team Member {i}</h3>
                  <p className="text-gray-600 text-sm mb-3">Leadership Title</p>
                  <p className="text-gray-600 text-xs leading-relaxed">Brief bio about their role and expertise</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-neon-green to-neon-green-dark py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to Collaborate?</h2>
          <p className="text-black/80 text-lg mb-8 leading-relaxed">
            Join hundreds of companies already transforming their teamwork
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-black text-black bg-transparent px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
