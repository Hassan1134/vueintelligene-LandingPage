import { useState, useRef } from "react";
import MarqueePackage from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FaqSection from "../components/FaqSection";

const Marquee = (MarqueePackage as any).default || MarqueePackage;

export default function Index() {
  const [activeTab, setActiveTab] = useState("amy");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "" });
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const comparisonData = {
    amy: {
      headers: ["Amy AI", "ChatGPT (OpenAI)", "Claude (Anthropic)", "Salesforce Einstein"],
      rows: [
        {
          feature: "Embedded in live meetings",
          values: [true, false, false, false],
        },
        {
          feature: "Real-time webinar interaction",
          values: [true, false, false, false],
        },
        {
          feature: "Context-aware enterprise customization",
          values: [true, "limited", "limited", true],
        },
        {
          feature: "Workflow automation",
          values: [true, "limited", "limited", true],
        },
        {
          feature: "Integration with communication platform",
          values: [true, false, false, "limited"],
        },
      ],
    },

    vuwr: {
      headers: ["VUETELLIGENCE MEETINGS", "Zoom", "Microsoft Teams", "Google Meet", "Webex", "Hopin"],
      rows: [
        {
          feature: "AI-powered real-time Q&A",
          values: [true, false, "limited", false, "limited", false],
        },
        {
          feature: "AI + Human interaction combined",
          values: [true, false, false, false, false, false],
        },
        {
          feature: "Persistent engagment after meetings",
          values: [true, false, "limited", false, false, "limited"],
        },
        {
          feature: "Interactive knowledge networks",
          values: [true, "limited", "limited", false, "limited", false],
        },
        {
          feature: "Webinar + networking integrations",
          values: [true, false, "limited", false, false, true],
        },
        {
          feature: "AI moderations & follow-ups",
          values: [true, false, "limited", false, false, false],
        },
        {
          feature: "Scalable to large audiences",
          values: [true, true, true, true, true, true],
        },
        {
          feature: "Built-in monitization",
          values: [true, false, false, false, false, "limited"],
        },
      ],
    },

    deiji: {
      headers: ["DeijiDesign", "Micheal Kors", "Coach", "Tory Burch"],
      rows: [
        {
          feature: "Luxury product offering",
          values: [true, true, true, true],
        },
        {
          feature: "E-commerce presence",
          values: [true, true, true, true],
        },
        {
          feature: "Ai-powered customer engagement",
          values: [true, false, false, false],
        },
        {
          feature: "Live streaming merchandising",
          values: [true, false, false, false],
        },
        {
          feature: "Integration with communication platform",
          values: [true, false, false, false],
        },
      ],
    },
  };

  const currentData = comparisonData[activeTab];

  const faqs = [
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

  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(circle_at_top_left,_#e9f8d8_0%,_transparent_35%)]">
      <Header />

      <HeroSection
        image="https://vuetelligence.com/assets/design-afcf5462.jpg"
        alt="Hero"
        title="Redefining collaboration, communication and AI-Powered connectivity"
        objectFit="contain"

        buttons={[
          { label: "Get Started", variant: "primary", href: "/contact" },
          // { label: "Login", variant: "secondary" },
        ]}
      />

      {/* Featured Projects */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Featured Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Project 1 - Amy AI */}
          <div className="grid md:grid-cols-12 gap-8 items-stretch animate-fade-in-up">
            <div className="md:col-span-6 rounded-3xl overflow-hidden bg-black min-h-[450px]">
              <img
                src="https://vuetelligence.com/assets/amy-ai-07e22362.jpg"
                alt="Amy AI"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:col-span-6 bg-gray-100 p-10 rounded-2xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Amy AI</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-base">
                AMY AI delivers instant, human-like customer support through an
                intelligent virtual avatar. Powered by advanced contextual awareness
                and real-time knowledge access, AMY enhances communication,
                personalization, and engagement.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                AMY AI delivers instant, human-like customer support through an
                intelligent virtual avatar. Powered by advanced contextual awareness
                and real-time knowledge access, AMY enhances communication,
                personalization, and engagement.
              </p>
              <button
                onClick={() => navigate("https://www.deijidesign.com/")}
                className="bg-neon-green text-black px-6 py-2 rounded font-semibold text-sm hover:bg-neon-green-dark transition w-fit">
                View More
              </button>
            </div>
          </div>

          {/* Project 2 - VUWR Meetings */}
          <div className="grid md:grid-cols-12 gap-8 items-stretch animate-fade-in-up">
            <div className="md:col-span-6 bg-gray-100 p-10 rounded-2xl flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">VUETELLIGENCE MEETINGS</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-base">
                VUETELLIGENCE MEETINGS is a secure, next-generation video conferencing platform
                designed for businesses of all sizes. Featuring 4K HDR video, enhanced
                audio clarity, and unlimited meeting capacity, it delivers a truly
                immersive communication experience.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                VUETELLIGENCE MEETINGS is a secure, next-generation video conferencing platform
                designed for businesses of all sizes. Featuring 4K HDR video, enhanced
                audio clarity, and unlimited meeting capacity, it delivers a truly
                immersive communication experience.
              </p>
              <button 
               onClick={() => navigate("https://www.deijidesign.com/")}
              className="bg-neon-green text-black px-6 py-2 rounded font-semibold text-sm hover:bg-neon-green-dark transition w-fit">
                View More
              </button>
            </div>
            <div
              className="md:col-span-6 rounded-3xl overflow-hidden bg-black min-h-[450px] order-1 md:order-2 relative cursor-pointer group"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <video
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
              >
                <source src="/video2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <div className="ml-2 w-0 h-0 border-l-[24px] border-l-black border-y-[14px] border-y-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - DEIJIDESIGN */}
          <div className="grid md:grid-cols-12 gap-8 items-stretch animate-fade-in-up">
            <div className="md:col-span-6 rounded-3xl overflow-hidden bg-black min-h-[450px]">
              <img
                src="https://vuetelligence.com/assets/design-afcf5462.jpg"
                alt="DEIJIDESIGN"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:col-span-6 bg-gray-100 p-10 rounded-2xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">DEIJIDESIGN</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-base">
                DEIJIDESIGN redefines what luxury means. It is built on confidence,
                creativity, and artistry. Every creation speaks of timeless elegance.
                Each design is a statement of individuality. Craftsmanship and detail
                are never compromised. It inspires a new generation of global luxury
                consumers.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                DEIJIDESIGN redefines what luxury means. It is built on confidence,
                creativity, and artistry. Every creation speaks of timeless elegance.
                Each design is a statement of individuality. Craftsmanship and detail
                are never compromised. It inspires a new generation of global luxury
                consumers.
              </p>
              <button 
               onClick={() => navigate("https://www.deijidesign.com/")}
              className="bg-neon-green text-black px-6 py-2 rounded font-semibold text-sm hover:bg-neon-green-dark transition w-fit">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories From Clients */}
      <section
        className="relative py-24 md:py-24 px-4 pt-12 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url(https://vuetelligence.com/assets/amy-ai-07e22362.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-green/80 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 py-20 md:py-28">
          <div className="max-w-2xl mb-12 animate-fade-in-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Stories From Clients
            </h2>
            <p className="text-gray-900 text-base leading-relaxed font-medium">
              Real experiences, genuine feedback—discover how our creative solutions have transformed brands and elevated businesses.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-2 animate-fade-in-up hide-scrollbar">
            {[
              {
                quote: "WOW!!! This is a transformative and generational shift in communications.",
                full: "Thanks so much for forwarding me updates. You continue to inspire and create what is impossible for others to do. Going through the platform now. WOW!!! This is a transformative and generational shift in communications.",
                name: "John G.",
                title: "",
              },
              {
                quote: "Users are in for a big surprise as they see and hear what it can do!",
                full: "This will generate considerable adoption in Vuetelligence across social media and cable tv. Users are in for a big surprise as they see and hear what it can do!",
                name: "Bruce",
                title: "",
              },
              {
                quote: "I get a feeling I could start a business, connect it to Vuetelligence, and practically let it run itself!",
                full: "I looked over what you sent and I am not only impressed, I am overwhelmed. I get a feeling I could start a business, connect it to Vuetelligence, and practically let it run itself!",
                name: "Bruce C.",
                title: "Former White House Communication Security Officer/Analyst",
              },
              {
                quote: "You really got something going here. It's a race to Alpha Centauri!",
                full: "You really got something going here. It's a race to Alpha Centauri!",
                name: "Dr. Dennis Bonnette",
                title: "",
              },
              {
                quote: "This is sooooooooooooo amazing.",
                full: "This is sooooooooooooo amazing.",
                name: "Sal Fradella",
                title: "Investment Banker",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 bg-transparent p-5 rounded-2xl border-2 border-gray-900 hover:shadow-lg transition duration-300 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-gray-900 text-xl leading-none">★</span>
                  ))}
                </div>
                <p className="text-gray-900 font-bold mb-3 text-sm leading-tight">
                  "{t.quote}"
                </p>
                <p className="text-gray-900 text-xs mb-6 leading-relaxed font-medium flex-1">
                  {t.full}
                </p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  {t.title && <p className="text-gray-900 text-xs">{t.title}</p>}
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-[calc(50vw-10rem)]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* What Will You Be Getting - Comparison Table */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What will you
              <br />
              be getting
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
              Real experiences, genuine feedback—discover how our creative
              solutions have transformed brands and elevated businesses.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-12 bg-gray-50 p-4 rounded-2xl flex justify-center w-full animate-fade-in-up hide-scrollbar overflow-x-auto">
            <div className="flex justify-center gap-4 md:gap-8">
              {[
                { key: "amy", label: "AMY AI" },
                { key: "vuwr", label: "VUETELLIGENCE MEETINGS" },
                { key: "deiji", label: "DEIJIDESIGN" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 md:px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-300 text-sm md:text-base ${activeTab === tab.key
                    ? "bg-neon-green text-black shadow-md"
                    : "text-gray-700 hover:text-gray-900"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div
            key={activeTab}
            className="overflow-x-auto animate-fade-in-up hide-scrollbar rounded-lg border border-gray-200"
          >
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="text-left py-4 px-6 font-bold text-sm">
                    Feature
                  </th>

                  {currentData.headers.map((header, index) => (
                    <th
                      key={header}
                      className={`text-center py-4 px-6 font-bold text-sm ${index === 0
                        ? "bg-neon-green text-black"
                        : ""
                        }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {currentData.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-5 px-6 font-medium text-gray-900 text-sm">
                      {row.feature}
                    </td>

                    {row.values.map((value, valueIndex) => (
                      <td
                        key={valueIndex}
                        className={`text-center py-5 px-6 ${valueIndex === 0 ? "bg-neon-green" : ""
                          }`}
                      >
                        {value === true && (
                          <span
                            className={`font-bold text-xl ${valueIndex === 0 ? "text-black" : "text-green-500"
                              }`}
                          >
                            ✓
                          </span>
                        )}

                        {value === false && (
                          <span className="font-bold text-xl text-gray-400">
                            ✕
                          </span>
                        )}

                        {value === "limited" && (
                          <span className="text-xs md:text-sm font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                            Limited
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Partners Band */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-2xl py-12 md:py-16 px-8">
            <h2 className="text-center text-white text-lg md:text-xl font-semibold mb-12">
              Our Partners and Clients
            </h2>
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
              <div className="flex items-center gap-16 md:gap-24 mr-16 md:mr-24">
                {[
                  { src: "https://vuetelligence.com/assets/Slider%20logo-04-18651b3e.png", alt: "OWN" },
                  { src: "https://vuetelligence.com/assets/Slider%20logo-01-cb413c1b.png", alt: "Luxury Living" },
                  { src: "https://vuetelligence.com/assets/Slider%20logo-05-16f3a681.png", alt: "COVET" },
                  { src: "https://vuetelligence.com/assets/Slider%20logo-06-7bd0b846.png", alt: "OWN" },
                  { src: "https://vuetelligence.com/assets/Slider%20logo-03-1c90bfda.png", alt: "Luxury Living" },
                  { src: "https://vuetelligence.com/assets/Slider%20logo-07-07479866.png", alt: "COVET" },
                  { src: "https://vuetelligence.com/assets/Slider%20logo-02-df22a79a.png", alt: "COVET" },
                ].map((logo) => (
                  <img
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 md:h-16 object-contain"
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden aspect-video bg-black">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              controls={isPlaying}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/video1.mp4" type="video/mp4" />
            </video>
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <button
                  onClick={handlePlay}
                  className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
                >
                  <div className="ml-2 w-0 h-0 border-l-[30px] border-l-black border-y-[18px] border-y-transparent" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />

      {/* Contact Section */}
      <section
        className="relative py-24 md:py-24 px-4 pt-12 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url(https://vuetelligence.com/assets/amy-ai-07e22362.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-green/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Contact us</h2>
            <p className="text-black/90 text-lg mb-8">Let's collaborate and create something amazing!</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-right">
            <h3 className="text-black font-semibold text-lg mb-6">Get in touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-black font-semibold text-sm block mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition"
                  required
                />
              </div>
              <div>
                <label className="text-black font-semibold text-sm block mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300 transform hover:scale-105"
              >
                Let's talk!
              </button>
            </form>
          </div>
        </div>
      </section>

      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="absolute inset-0 backdrop-blur-md bg-black/60" />
          <div
            className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white text-xl font-bold transition"
            >
              ✕
            </button>
            <video
              className="w-full aspect-video"
              controls
              autoPlay
              playsInline
            >
              <source src="/video2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
