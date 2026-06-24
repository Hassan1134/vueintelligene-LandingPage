export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  heroImage: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  tech: string[];
  technologies: string[];
  timeline: { phase: string; desc: string }[];
  metrics: { value: string; label: string }[];
  testimonial: { quote: string; author: string; title: string };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Amy AI",
    category: "AI",
    image: "https://vuetelligence.com/assets/amy-ai-07e22362.jpg",
    heroImage: "https://vuetelligence.com/assets/amy-ai-07e22362.jpg",
    description: "Intelligent virtual avatar for customer support",
    fullDescription: "Intelligent Virtual Avatar for Customer Support",
    challenge:
      "Companies were struggling with managing customer support at scale. Response times were slow, consistency was lacking, and hiring support teams was expensive.",
    solution:
      "We built Amy AI, an intelligent virtual avatar powered by advanced AI that provides instant, human-like customer support 24/7.",
    results:
      "50% reduction in support tickets, 90% customer satisfaction rate, 40% cost savings",
    tech: ["AI", "ML", "React"],
    technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "AWS"],
    timeline: [
      { phase: "Discovery", desc: "Understanding requirements and market analysis" },
      { phase: "Planning", desc: "Architecting the solution and defining features" },
      { phase: "Design", desc: "Creating UI/UX and avatar design" },
      { phase: "Development", desc: "Building core platform and AI models" },
      { phase: "Launch", desc: "Deployment and customer onboarding" },
    ],
    metrics: [
      { value: "50%", label: "Support Cost Reduction" },
      { value: "90%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Availability" },
      { value: "99.9%", label: "Uptime" },
    ],
    testimonial: {
      quote:
        "Amy AI transformed our customer support operations. The ROI was immediate and tangible. Highly recommended!",
      author: "Sarah Johnson",
      title: "CEO, TechCorp",
    },
  },
  {
    id: 2,
    title: "VUETELLIGENCE MEETINGS",
    category: "Video",
    image: "https://vuetelligence.com/assets/meeting-ca80c13b.jpg",
    heroImage: "https://vuetelligence.com/assets/meeting-ca80c13b.jpg",
    description: "Next-generation video conferencing platform",
    fullDescription: "Secure, next-generation video conferencing for enterprise teams",
    challenge:
      "Remote teams faced unreliable video calls, poor audio quality, and limited collaboration tools that hindered productivity.",
    solution:
      "VUETELLIGENCE MEETINGS delivers 4K HDR video conferencing with AI-powered noise cancellation, unlimited participants, and integrated collaboration tools.",
    results:
      "35% improvement in team productivity, 60% reduction in travel costs, 95% uptime SLA",
    tech: ["WebRTC", "React", "Node.js"],
    technologies: ["WebRTC", "React", "Node.js", "Redis", "Kubernetes", "GCP"],
    timeline: [
      { phase: "Research", desc: "Analyzing existing solutions and identifying gaps" },
      { phase: "Architecture", desc: "Designing scalable real-time infrastructure" },
      { phase: "MVP", desc: "Building core video and audio pipeline" },
      { phase: "Beta", desc: "Private beta testing with enterprise clients" },
      { phase: "Launch", desc: "Public launch and marketing campaigns" },
    ],
    metrics: [
      { value: "4K", label: "Video Quality" },
      { value: "35%", label: "Productivity Gain" },
      { value: "60%", label: "Travel Cost Reduction" },
      { value: "95%", label: "Uptime SLA" },
    ],
    testimonial: {
      quote:
        "VUETELLIGENCE MEETINGS replaced three different tools we were using. Crystal clear video and the collaboration features are second to none.",
      author: "Marcus Lee",
      title: "CTO, GlobalRemote Inc.",
    },
  },
  {
    id: 3,
    title: "DEIJIDESIGN",
    category: "Design",
    image: "https://vuetelligence.com/assets/design-afcf5462.jpg",
    heroImage: "https://vuetelligence.com/assets/design-afcf5462.jpg",
    description: "Premium luxury design and branding solutions",
    fullDescription: "Redefining luxury through confidence, creativity, and artistry",
    challenge:
      "Luxury brands needed a design partner who could translate intangible values — exclusivity, heritage, and craftsmanship — into compelling digital and physical identities.",
    solution:
      "DEIJIDESIGN offers bespoke branding, editorial design, and digital experiences built on deep cultural research and world-class craftsmanship.",
    results:
      "200% increase in brand perception scores, partnerships with Oprah's OWN Network, JLo's brand portfolio, and global luxury retailers",
    tech: ["Design", "Figma", "UX"],
    technologies: ["Figma", "Adobe Creative Suite", "Framer", "Webflow", "After Effects", "Blender"],
    timeline: [
      { phase: "Brand Audit", desc: "Deep dive into brand DNA and market positioning" },
      { phase: "Strategy", desc: "Defining visual language and brand pillars" },
      { phase: "Concepting", desc: "Exploring multiple creative directions" },
      { phase: "Execution", desc: "Crafting final deliverables across all touchpoints" },
      { phase: "Handoff", desc: "Brand guidelines and asset delivery" },
    ],
    metrics: [
      { value: "200%", label: "Brand Perception Increase" },
      { value: "50+", label: "Luxury Clients" },
      { value: "12", label: "Industry Awards" },
      { value: "100%", label: "White-Label Delivery" },
    ],
    testimonial: {
      quote:
        "If designs from DEIJIDESIGN are good enough for Oprah and JLo, ya better believe they're good enough for me!",
      author: "LaRae Day",
      title: "CEO, Luxury Living Co.",
    },
  },
  // {
  //   id: 4,
  //   title: "Analytics Suite",
  //   category: "Analytics",
  //   image: "https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=600&h=500&fit=crop",
  //   heroImage: "https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=1200&h=800&fit=crop",
  //   description: "Real-time analytics and data visualization",
  //   fullDescription: "Turn raw data into actionable business intelligence in real time",
  //   challenge:
  //     "Businesses were drowning in data but starving for insights. Existing tools were too slow, too complex, or too siloed to drive real decisions.",
  //   solution:
  //     "Analytics Suite unifies data streams into a single real-time dashboard with AI-powered anomaly detection and predictive forecasting.",
  //   results:
  //     "3× faster decision-making, 45% reduction in reporting overhead, adopted by 200+ companies",
  //   tech: ["Analytics", "D3.js", "Python"],
  //   technologies: ["Python", "Apache Kafka", "D3.js", "React", "PostgreSQL", "Snowflake"],
  //   timeline: [
  //     { phase: "Discovery", desc: "Identifying key metrics and data sources" },
  //     { phase: "Ingestion", desc: "Building real-time data pipelines" },
  //     { phase: "Modeling", desc: "Developing AI forecasting models" },
  //     { phase: "Visualization", desc: "Designing intuitive dashboard UI" },
  //     { phase: "Deployment", desc: "Cloud deployment and client onboarding" },
  //   ],
  //   metrics: [
  //     { value: "3×", label: "Faster Decisions" },
  //     { value: "45%", label: "Reporting Overhead Cut" },
  //     { value: "200+", label: "Companies Using It" },
  //     { value: "Real-time", label: "Data Processing" },
  //   ],
  //   testimonial: {
  //     quote:
  //       "We went from weekly reports to live dashboards overnight. The AI forecasting alone paid for the subscription in the first month.",
  //     author: "Dana Osei",
  //     title: "Head of Data, FinScale",
  //   },
  // },
  // {
  //   id: 5,
  //   title: "Collab Hub",
  //   category: "Collaboration",
  //   image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop",
  //   heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop",
  //   description: "Team collaboration and project management",
  //   fullDescription: "One workspace for tasks, docs, and real-time collaboration",
  //   challenge:
  //     "Teams juggled multiple tools for tasks, documents, communication, and file storage — leading to context switching, lost information, and missed deadlines.",
  //   solution:
  //     "Collab Hub consolidates project management, live document editing, chat, and file sharing into one seamless workspace.",
  //   results:
  //     "40% fewer missed deadlines, 55% reduction in tool sprawl, 10,000+ active teams",
  //   tech: ["React", "Firebase", "WebSockets"],
  //   technologies: ["React", "Firebase", "WebSockets", "Yjs", "TypeScript", "Tailwind CSS"],
  //   timeline: [
  //     { phase: "User Research", desc: "Interviews with 100+ teams on pain points" },
  //     { phase: "Prototyping", desc: "Rapid prototyping of core collaboration flows" },
  //     { phase: "Development", desc: "Building real-time sync and conflict resolution" },
  //     { phase: "Beta", desc: "Closed beta with 50 pilot teams" },
  //     { phase: "Scale", desc: "Infrastructure scaling and public launch" },
  //   ],
  //   metrics: [
  //     { value: "40%", label: "Fewer Missed Deadlines" },
  //     { value: "55%", label: "Tool Sprawl Reduction" },
  //     { value: "10k+", label: "Active Teams" },
  //     { value: "<50ms", label: "Real-Time Sync Latency" },
  //   ],
  //   testimonial: {
  //     quote:
  //       "Collab Hub replaced Slack, Notion, Asana, and Google Drive for us. One tool, zero chaos.",
  //     author: "Priya Sharma",
  //     title: "Engineering Manager, BuildFast",
  //   },
  // },
  // {
  //   id: 6,
  //   title: "Mobile Experience",
  //   category: "Mobile",
  //   image: "https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=600&h=500&fit=crop",
  //   heroImage: "https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=1200&h=800&fit=crop",
  //   description: "Cross-platform mobile application",
  //   fullDescription: "Native-quality experiences built for iOS and Android from a single codebase",
  //   challenge:
  //     "Clients needed high-performance mobile apps for both iOS and Android but couldn't afford separate native teams or long development cycles.",
  //   solution:
  //     "Using React Native with a custom design system, we ship pixel-perfect, performant apps for both platforms simultaneously — at half the cost.",
  //   results:
  //     "2× faster time to market, 4.8-star app store ratings, 500k+ downloads across client apps",
  //   tech: ["React Native", "TypeScript", "Firebase"],
  //   technologies: ["React Native", "TypeScript", "Firebase", "Reanimated", "Expo", "Fastlane"],
  //   timeline: [
  //     { phase: "Scoping", desc: "Feature prioritization and platform strategy" },
  //     { phase: "Design", desc: "Mobile-first UI/UX with native feel" },
  //     { phase: "Development", desc: "Cross-platform build with shared codebase" },
  //     { phase: "QA", desc: "Device testing across iOS and Android" },
  //     { phase: "Release", desc: "App Store and Play Store submissions" },
  //   ],
  //   metrics: [
  //     { value: "2×", label: "Faster Time to Market" },
  //     { value: "4.8★", label: "Average App Store Rating" },
  //     { value: "500k+", label: "Downloads" },
  //     { value: "2-in-1", label: "iOS & Android from One Codebase" },
  //   ],
  //   testimonial: {
  //     quote:
  //       "We launched on both platforms in 10 weeks. The quality rivaled apps built by teams twice the size.",
  //     author: "Jess Kim",
  //     title: "Founder, QuickShip",
  //   },
  // },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getRelatedProjects(currentId: number, count = 2): Project[] {
  const current = getProjectById(currentId);
  if (!current) return [];

  const sameCategory = projects.filter(
    (p) => p.id !== currentId && p.category === current.category
  );

  const others = projects.filter(
    (p) => p.id !== currentId && p.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, count);
}
