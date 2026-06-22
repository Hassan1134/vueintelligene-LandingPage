import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Amy AI",
      category: "AI",
      image: "https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=600&h=500&fit=crop",
      description: "Intelligent virtual avatar for customer support",
      tech: ["AI", "ML", "React"]
    },
    {
      id: 2,
      title: "VUWR Meetings",
      category: "Video",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop",
      description: "Next-generation video conferencing platform",
      tech: ["WebRTC", "React", "Node.js"]
    },
    {
      id: 3,
      title: "DEIJIDESIGN",
      category: "Design",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop",
      description: "Premium luxury design and branding solutions",
      tech: ["Design", "Figma", "UX"]
    },
    {
      id: 4,
      title: "Analytics Suite",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=600&h=500&fit=crop",
      description: "Real-time analytics and data visualization",
      tech: ["Analytics", "D3.js", "Python"]
    },
    {
      id: 5,
      title: "Collab Hub",
      category: "Collaboration",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop",
      description: "Team collaboration and project management",
      tech: ["React", "Firebase", "WebSockets"]
    },
    {
      id: 6,
      title: "Mobile Experience",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=600&h=500&fit=crop",
      description: "Cross-platform mobile application",
      tech: ["React Native", "TypeScript", "Firebase"]
    }
  ];

  const categories = ["all", "AI", "Video", "Design", "Analytics", "Collaboration", "Mobile"];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 w-full bg-gradient-to-b from-white to-neon-green/5 z-50 border-b border-gray-300/50">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="font-bold text-lg text-gray-900">Logo</div>
          
          <nav className="hidden md:flex gap-12 items-center">
            <a href="/" className="text-gray-900 hover:text-gray-700 text-sm font-medium">Home</a>
            <a href="/about" className="text-gray-900 hover:text-gray-700 text-sm font-medium">About</a>
            <a href="/projects" className="text-gray-900 hover:text-gray-700 text-sm font-medium bg-neon-green/15 px-3 py-1 rounded">Works</a>
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
              <a href="/projects" className="text-gray-900 hover:text-gray-700 bg-neon-green/15 px-3 py-1 rounded inline-block">Works</a>
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
            alt="Projects Hero"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight">
            Portfolio of Innovation
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl">
            Explore our latest projects and see what we've built
          </p>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition duration-300 capitalize ${
                  activeCategory === cat
                    ? "bg-neon-green text-black"
                    : "border-2 border-gray-300 text-gray-900 hover:border-neon-green"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden bg-gray-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300">
                      <button className="w-14 h-14 bg-neon-green rounded-full flex items-center justify-center hover:scale-110 transition">
                        <span className="text-black font-bold">→</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block bg-neon-green/10 text-neon-green text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-neon-green transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-neon-green to-neon-green-dark py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Start Your Project Today</h2>
          <p className="text-black/80 text-lg mb-8 leading-relaxed">
            Let's create something amazing together
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300 transform hover:scale-105">
            Get Started
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
