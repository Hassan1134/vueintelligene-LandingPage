import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProjectById, getRelatedProjects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4">
          <h1 className="text-5xl font-bold text-gray-900">Project Not Found</h1>
          <p className="text-gray-600 text-lg">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/projects"
            className="bg-neon-green text-black px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition"
          >
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProjects = getRelatedProjects(project.id);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-fade-in">
        <Link
          to="/projects"
          className="flex items-center gap-2 text-neon-green hover:text-neon-green-dark transition font-semibold text-sm"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-16 md:mb-24 animate-fade-in">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-8 sm:p-12 lg:p-16 w-full">
            <span className="inline-block bg-neon-green/20 text-neon-green text-sm font-semibold px-4 py-2 rounded-full mb-6">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-white/80 text-lg max-w-2xl">{project.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 animate-fade-in-up">
          {[
            { title: "Challenge", content: project.challenge },
            { title: "Solution", content: project.solution },
            { title: "Results", content: project.results },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 animate-fade-in-up">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            {project.technologies.map((tech, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="w-12 h-12 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-neon-green font-bold">⚙</span>
                </div>
                <p className="text-gray-900 font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 animate-fade-in-up">
            Development Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-2 animate-fade-in-up">
            {project.timeline.map((item, i) => (
              <div key={i} className="flex-1">
                <div className="relative">
                  <div
                    className={`h-12 rounded-full flex items-center justify-center font-bold text-white mb-4 ${
                      i % 2 === 0 ? "bg-neon-green text-black" : "bg-gray-900"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {i < project.timeline.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.phase}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics & Results */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 animate-fade-in-up">
            Metrics & Results
          </h2>
          <div className="grid md:grid-cols-4 gap-6 animate-fade-in-up">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-neon-green/10 to-neon-green/5 p-8 rounded-2xl text-center hover:shadow-lg transition duration-300"
              >
                <p className="text-4xl md:text-5xl font-bold text-neon-green mb-2">{metric.value}</p>
                <p className="text-gray-700 font-semibold text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="bg-white p-12 rounded-2xl shadow-lg border-l-4 border-neon-green">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 italic">
              "{project.testimonial.quote}"
            </p>
            <div>
              <p className="text-lg font-bold text-gray-900">{project.testimonial.author}</p>
              <p className="text-gray-600">{project.testimonial.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 animate-fade-in-up">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-300">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
                  </div>
                  <div className="p-8">
                    <span className="inline-block bg-neon-green/10 text-neon-green text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {p.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-neon-green transition mb-2">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-neon-green to-neon-green-dark py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-black/80 text-lg mb-8 leading-relaxed">
            Let's discuss how we can help your business achieve similar results
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <Link
              to="/contact"
              className="border-2 border-black text-black bg-transparent px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
