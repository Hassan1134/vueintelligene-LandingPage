import { useState, useCallback, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Play } from "lucide-react";
// import Marquee from "react-fast-marquee";
import MarqueePackage from "react-fast-marquee";

const Marquee =
  (MarqueePackage as any).default || MarqueePackage;
import Hero1 from "../../public/own.png";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("amy");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  console.log(Marquee);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "" });
  };


  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const logos = [
    {
      name: "OWN",
      src: Hero1,
    },
    {
      name: "Luxury Living",
      src: "https://via.placeholder.com/120x60/333333/666666?text=LUXURY+LIVING",
    },
    {
      name: "COVET",
      src: "https://via.placeholder.com/120x60/333333/666666?text=COVET",
    },
  ];


  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(circle_at_top_left,_#e9f8d8_0%,_transparent_35%)]">
      {/* Header */}
      <header
        className={`
    sticky top-0 z-50 w-full transition-all duration-300
    ${scrolled
            ? "backdrop-blur-lg bg-white/60 shadow-lg border-b border-white/20"
            : "bg-transparent"
          }
  `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">

          {/* Logo */}
          {/* <div className="font-bold text-xl text-black">
            Logo
          </div> */}
          <div className="flex items-center gap-2 ">
            <img
              src="https://vuetelligence.com/assets/dark-logo-8de9accc.png"
              className="w-32 h-auto"
              alt="Logo"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center absolute left-1/2 -translate-x-1/2">
            <a
              href="#"
              className="text-black text-sm font-medium hover:opacity-70 transition"
            >
              Home
            </a>

            <a
              href="#"
              className="text-black text-sm font-medium hover:opacity-70 transition"
            >
              About
            </a>

            <a
              href="#"
              className="text-black text-sm font-medium hover:opacity-70 transition"
            >
              Works
            </a>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex gap-3 items-center">

            <button
              className="
          bg-[#171717] 
          text-white 
          px-7 py-3 
          rounded-full 
          text-sm 
          font-semibold
          hover:bg-black
          transition
        "
            >
              Get Started
            </button>


            <button
              className="
          border border-black
          text-black
          px-7 py-3
          rounded-full
          text-sm
          font-semibold
          hover:bg-black
          hover:text-white
          transition
        "
            >
              Login
            </button>

          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#edf8dc] px-6 py-5">
            <nav className="flex flex-col gap-4">

              <a href="#" className="text-black">
                Home
              </a>

              <a href="#" className="text-black">
                About
              </a>

              <a href="#" className="text-black">
                Works
              </a>

              <button className="bg-black text-white rounded-full py-3">
                Get Started
              </button>
              <button className="border border-black rounded-full py-3">
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
            src="https://vuetelligence.com/assets/design-afcf5462.jpg"
            alt="Hero"
            className="w-full object-contain opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 max-w-2xl leading-tight">
            Redefining collaboration, communication and AI-Powered connectivity
          </h1>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-neon-green text-black px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Featured Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid md:grid-cols-12 gap-8 items-stretch animate-fade-in-up">

            {/* Image */}
            <div className="md:col-span-6 rounded-3xl overflow-hidden bg-black min-h-[450px]">
              <img
                src="https://vuetelligence.com/assets/amy-ai-07e22362.jpg"
                alt="Amy AI"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-6 bg-gray-100 p-10 rounded-2xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Amy AI
              </h3>

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

              <button className="bg-neon-green text-black px-6 py-2 rounded font-semibold text-sm hover:bg-neon-green-dark transition w-fit">
                View More
              </button>
            </div>
          </div>

          {/* Project 2 - VUWR MEETINGS */}
          <div className="grid md:grid-cols-12 gap-8 items-stretch animate-fade-in-up">
            {/* Content */}
            <div className="md:col-span-6 bg-gray-100 p-10 rounded-2xl flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">
                VUWR MEETINGS
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed text-base">
                VUWR MEETINGS is a secure, next-generation video conferencing platform
                designed for businesses of all sizes. Featuring 4K HDR video, enhanced
                audio clarity, and unlimited meeting capacity, it delivers a truly
                immersive communication experience.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                VUWR MEETINGS is a secure, next-generation video conferencing platform
                designed for businesses of all sizes. Featuring 4K HDR video, enhanced
                audio clarity, and unlimited meeting capacity, it delivers a truly
                immersive communication experience.
              </p>

              <button className="bg-neon-green text-black px-6 py-2 rounded font-semibold text-sm hover:bg-neon-green-dark transition w-fit">
                View More
              </button>

            </div>

            {/* Image */}
            <div className="md:col-span-6 rounded-3xl overflow-hidden bg-black min-h-[450px] order-1 md:order-2">
              <img
                src="https://vuetelligence.com/assets/meeting-ca80c13b.jpg"
                alt="VUWR Meetings"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project 3 - DEIJIDESIGN */}
          <div className="grid md:grid-cols-12 gap-8 items-stretch animate-fade-in-up">
            {/* Image */}
            <div className="md:col-span-6 rounded-3xl overflow-hidden bg-black min-h-[450px]">
              <img
                src="https://vuetelligence.com/assets/design-afcf5462.jpg"
                alt="DEIJIDESIGN"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-6 bg-gray-100 p-10 rounded-2xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">
                DEIJIDESIGN
              </h3>

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

              <button className="bg-neon-green text-black px-6 py-2 rounded font-semibold text-sm hover:bg-neon-green-dark transition w-fit">
                View More
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Stories From Clients */}
      <section className="relative py-24 md:py-24 px-4 pt-12 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: 'url(https://vuetelligence.com/assets/amy-ai-07e22362.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-green/80 to-transparent"></div>
        {/* <div className="absolute right-0 top-0 h-full w-0 md:w-1/2">
          <img
            src="https://vuetelligence.com/assets/amy-ai-07e22362.jpg"
            alt="Clients"
            className="w-full h-full object-cover opacity-40"
          />
        </div> */}

        <div className="relative z-10 px-8 md:px-16 py-20 md:py-28">
          <div className="max-w-2xl mb-12 animate-fade-in-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">Stories From Clients</h2>
            <p className="text-gray-900 text-base leading-relaxed font-medium">
              Real experiences, genuine feedback—discover how our creative solutions have transformed brands and elevated businesses.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-2 animate-fade-in-up">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 bg-transparent p-5 rounded-2xl border-2 border-gray-900 hover:shadow-lg transition duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-gray-900 text-xl leading-none">★</span>
                  ))}
                </div>
                <p className="text-gray-900 font-bold mb-3 text-sm leading-tight">
                  "They're good enough for me!"
                </p>
                <p className="text-gray-900 text-xs mb-6 leading-relaxed font-medium">
                  If designs from DEIJIDESIGN are good enough for Oprah and JLo, ya better believe they're good enough for me!
                </p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">LaRae Day</p>
                  <p className="text-gray-900 text-xs">CEO</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Will You Be Getting - Comparison Table */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">What will you<br />be getting</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
              Real experiences, genuine feedback—discover how our creative solutions have transformed brands and elevated businesses.
            </p>
          </div>

          {/* Tabs Container */}
          <div className="mb-12 bg-gray-50 p-4 rounded-2xl flex justify-center w-full animate-fade-in-up hide-scrollbar overflow-x-auto">
            <div className="flex justify-center gap-4 md:gap-8">
              {["amy", "vuwr", "deiji"].map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 md:px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition duration-300 text-sm md:text-base ${activeTab === tab
                    ? "bg-neon-green text-black"
                    : "text-gray-700 hover:text-gray-900"
                    }`}
                >
                  {["AMY AI", "VUWR MEETINGS", "DEIJIDESIGN"][idx]}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto animate-fade-in-up hide-scrollbar rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="text-left py-4 px-6 font-bold text-sm">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-sm bg-neon-green text-black">Amy AI</th>
                  <th className="text-center py-4 px-6 font-bold text-sm">ChatGPT (OpenAI)</th>
                  <th className="text-center py-4 px-6 font-bold text-sm">Claude (Anthropic)</th>
                  <th className="text-center py-4 px-6 font-bold text-sm">Salesforce Einstein</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Embedded in live meetings",
                  "Real-time webinar interaction",
                  "Context-aware enterprise customization",
                  "Workflow automation",
                  "Integration with communication platform"
                ].map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-200 bg-white hover:bg-gray-50 transition">
                    <td className="py-5 px-6 font-medium text-gray-900 text-sm">{feature}</td>
                    <td className="text-center py-5 px-6 bg-neon-green">
                      <span className="text-black font-bold text-xl">✓</span>
                    </td>
                    <td className="text-center py-5 px-6">
                      {idx < 3 ? <span className="text-gray-400 text-xl">✕</span> : <span className="text-gray-400 text-xl">✕</span>}
                    </td>
                    <td className="text-center py-5 px-6">
                      {idx === 0 ? <span className="text-gray-400 text-xl">✕</span> : <span className="text-gray-400 text-xl">✕</span>}
                    </td>
                    <td className="text-center py-5 px-6">
                      {idx < 2 ? <span className="text-gray-400 text-xl">✕</span> : <span className="text-neon-green/50 text-xl">✓</span>}
                    </td>
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

            <Marquee
              speed={50}
              gradient={false}
              pauseOnHover={true}
            >
              <div className="flex items-center gap-16 md:gap-24 mr-16 md:mr-24">
                <img
                  src="https://vuetelligence.com/assets/Slider%20logo-04-18651b3e.png"
                  alt="OWN"
                  className="h-12 md:h-16 object-contain"
                />

                <img
                  src="https://vuetelligence.com/assets/Slider%20logo-01-cb413c1b.png"
                  alt="Luxury Living"
                  className="h-12 md:h-16 object-contain"
                />

                <img
                  src="https://vuetelligence.com/assets/Slider%20logo-05-16f3a681.png"
                  alt="COVET"
                  className="h-12 md:h-16 object-contain"
                />

                <img
                  src="https://vuetelligence.com/assets/Slider%20logo-06-7bd0b846.png"
                  alt="OWN"
                  className="h-12 md:h-16 object-contain"
                />

                <img
                  src="https://vuetelligence.com/assets/Slider%20logo-03-1c90bfda.png"
                  alt="Luxury Living"
                  className="h-12 md:h-16 object-contain"
                />

                <img
                  src="https://vuetelligence.com/assets/Slider%20logo-07-07479866.png"
                  alt="COVET"
                  className="h-12 md:h-16 object-contain"
                />

                <img
                  src="https://vuetelligence.com/assets/Slider%20logo-02-df22a79a.png"
                  alt="COVET"
                  className="h-12 md:h-16 object-contain"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className=" py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden aspect-video bg-black">
            {/* Video */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              controls={isPlaying}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source
                src="https://vuetelligence.com/assets/Video2-43d3f917.mp4"
                type="video/mp4"
              />
            </video>

            {/* Overlay */}
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

      {/* FAQ */}
      <section className="pt-5 pb-5">
        <div className="min-h-screen bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Title */}
            <div className="px-6 sm:px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-start">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Frequently
                <br />
                asked questions
              </h1>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-sm">
                Real experiences, genuine feedback—discover how our creative
                solutions have transformed brands and elevated businesses.
              </p>
            </div>

            {/* Right Column - FAQ List */}
            <div className="bg-gray-50 px-6 sm:px-8 lg:px-16 py-16 lg:py-24">
              <div className="space-y-0 max-w-2xl">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border-b border-gray-200 py-5 cursor-pointer transition duration-300 last:border-b-0"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full text-left font-medium text-gray-900 flex items-start justify-between gap-4 hover:text-emerald-600 transition text-sm lg:text-base"
                    >
                      <span className="flex-1 leading-snug">{faq.q}</span>
                      <span
                        className={`text-emerald-600 flex-shrink-0 transition-transform duration-300 mt-0.5 ${expandedFaq === i ? "rotate-180" : ""
                          }`}
                      >
                        −
                      </span>
                    </button>
                    {expandedFaq === i && (
                      <p className="text-gray-600 mt-4 text-xs lg:text-sm leading-relaxed animate-fade-in">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative py-24 md:py-24 px-4 pt-12 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: 'url(https://vuetelligence.com/assets/amy-ai-07e22362.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-green/80 to-transparent"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Contact us
            </h2>
            <p className="text-black/90 text-lg mb-8">
              Let's collaborate and create something amazing!
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-right">
            <h3 className="text-black font-semibold text-lg mb-6">Get in touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-black font-semibold text-sm block mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition"
                  required
                />
              </div>
              <div>
                <label className="text-black font-semibold text-sm block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-10 rounded-t-3xl">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Left - Logo & Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img
                  src="https://vuetelligence.com/assets/white-logo-dd7001ca.png"
                  className="w-32 h-auto"
                  alt="Logo"
                />
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">
                  info@vuetelligence.com
                </p>
                <p className="text-gray-400 text-sm">
                  +1 (866) 357-5012
                </p>
              </div>
            </div>

            {/* Center - Navigation */}
            <div className="flex justify-center gap-8">
              <a href="/" className="text-gray-400 hover:text-white transition text-sm">
                Home
              </a>
              <a href="/about" className="text-gray-400 hover:text-white transition text-sm">
                About
              </a>
              <a href="/works" className="text-gray-400 hover:text-white transition text-sm">
                Works
              </a>
            </div>

            {/* Right - Social Icons */}
            <div className="flex justify-end gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2.25c5.379 0 9.75 4.371 9.75 9.75s-4.371 9.75-9.75 9.75S2.25 17.379 2.25 12 6.621 2.25 12 2.25m3.5 5.25a.75.75 0 100-1.5.75.75 0 000 1.5M12 6a6 6 0 100 12 6 6 0 000-12m0 2a4 4 0 110 8 4 4 0 010-8" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© Vuetelligence copyright 2026</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-gray-400 transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-gray-400 transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
