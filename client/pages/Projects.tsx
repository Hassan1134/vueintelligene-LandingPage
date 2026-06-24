import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "AI", "Video", "Design", "Analytics", "Collaboration", "Mobile"];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
        alt="Projects Hero"
        title="Portfolio of Innovation"
        subtitle="Explore our latest projects and see what we've built"
      />

      {/* Project Filters */}
      {/* <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
      </section> */}

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
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
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
          <p className="text-black/80 text-lg mb-8 leading-relaxed">Let's create something amazing together</p>
          <button 
          onClick={() => navigate("/contact")}
          className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
