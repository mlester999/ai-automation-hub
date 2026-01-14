import { motion } from "framer-motion";
import { ArrowUpRight, Bot, FileText, Mail, MessageSquare, Zap } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Hoop Shorts — Automation AI-Powered NBA Video Clipping and Shorts Automation",
    description:
      "Built an AI-powered automated content system that generates optimized titles and descriptions, discovers long-form NBA videos with no existing Shorts, intelligently identifies and extracts high-impact moments, transforms them into engaging short-form videos, and automatically publishes across YouTube Shorts, Facebook Reels, and Instagram Reels.",
    problem: "High volume of repetitive customer questions overwhelming support team",
    tools: ["n8n", "OpenAI", "Klap AI", "Meta", "YouTube"],
    results: "90% reduction in manual editing work, 5–10 times faster content production",
    icon: Zap,
    category: "AI Automation",
    href: "https://www.youtube.com/@HoopShortsOfficial",
  },
  {
    id: 2,
    title: "Motivation Timepiece — AI-Powered Motivational Quote Image Generation",
    description:
      "This AI-powered automated workflow creates and publishes motivational content to Facebook without manual effort. It uses AI to generate quotes from famous motivational speakers, produces matching speaker visuals, adds the quote as text overlay on the image, and automatically uploads the final post to a Facebook page.",
    problem: "Sales team wasting time on unqualified leads",
    tools: ["Midjourney", "Airtable", "n8n", "Facebook", "Meta"],
    results: "Zero manual quote research, 100% automated posting",
    icon: FileText,
    category: "Workflow",
    href: "https://www.facebook.com/motivation.timepiece/",
  },
  {
    id: 3,
    title: "Scarlet Eve AI — Christmas Anime Companion for AI Image Creation",
    description:
      "A Christmas-themed anime waifu AI agent available on Telegram, designed to guide users through a cozy and magical AI image creation experience. Users can chat naturally or use simple commands to generate anime-style images filled with winter charm and holiday sparkle. It allows full customization of image results, including expressions, emotions, poses, outfits, and companions. ",
    problem: "Manual document processing consuming 40+ hours weekly",
    tools: ["n8n", "Telegram", "Midjourney", "X", "OpenAI"],
    results: "Instant image variations, consistent anime-style results",
    icon: Bot,
    category: "AI Agents",
    href: "https://t.me/ScarletEveAIBot",
  },
  {
    id: 4,
    title: "AI Expense Tracking & Budgeting Workflow",
    description:
      "Made an automated expense tracking system that records daily expenses directly from Telegram into Notion in real time. Eliminates manual logging, reduces tracking errors, and provides a centralized, always-updated view of personal or business finances — enabling faster budgeting decisions with zero manual input.",
    problem: "Executives spending 2+ hours daily on email management",
    tools: ["Notion", "n8n", "Telegram", "Gmail", "OpenAI"],
    results: "Zero missed entries, real-time expense tracking",
    icon: MessageSquare,
    category: "Workflow",
    href: "https://t.me/MarkyExpenseBot",
  },
  {
    id: 5,
    title: "Motivation Timepiece — Messaging AI Chatbot Integration",
    description:
      "Made an intelligent automated messaging chatbot designed to engage followers through meaningful motivational conversations. It responds to user questions about motivation, personal growth, and life advice, provides thoughtful interpretations of deep and inspirational quotes.",
    problem: "Data silos causing inconsistent customer information",
    tools: ["Meta", "n8n", "Google", "Stripe"],
    results: "24/7 automated motivational conversations",
    icon: Mail,
    category: "Integration",
    href: "https://www.messenger.com/t/957891900736687",
  },
  {
    id: 6,
    title: "Zapp Tech — AI Automation for Tech Content Repurposing",
    description:
      "An AI-powered content automation system that transforms long-form tech videos—such as smartphone, smartwatch, and high-tech reviews—into engaging, social-media-ready shorts. Automatically identifies the best moments, formats clips for YouTube Shorts, Facebook, and Instagram, and publishes them with zero manual editing.",
    problem: "Content team struggling to maintain posting schedule",
    tools: ["OpenAI", "Klap AI", "n8n", "OneDrive", "Meta", "YouTube"],
    results: "AI-selected viral moments, multi-platform auto posting",
    icon: Zap,
    category: "AI Automation",
    href: "https://www.instagram.com/officialzapptech/",
  },
];

const categories = ["All", "AI Agents", "Workflow", "AI Automation", "Integration"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world automation solutions that delivered measurable business impact.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass rounded-2xl p-6 hover:glow-primary transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/inner w-12 h-12 rounded-xl glass flex items-center justify-center hover:glow-primary hover:text-primary transition-all duration-300 cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover/inner:text-primary transition-colors" />
                  </a>
                </div>

                <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>

                <h3 className="text-xl font-semibold font-display mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="border-t border-border/50 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span key={tool} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary font-medium">📈 {project.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
