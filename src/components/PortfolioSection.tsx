import { motion } from "framer-motion";
import { ArrowUpRight, Bot, FileText, Mail, MessageSquare, Zap } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI Customer Support Bot",
    description: "Built an intelligent chatbot that handles 80% of customer inquiries automatically, reducing response time from hours to seconds.",
    problem: "High volume of repetitive customer questions overwhelming support team",
    tools: ["OpenAI", "Make.com", "Slack", "HubSpot"],
    results: "80% reduction in support tickets, 24/7 availability",
    icon: MessageSquare,
    category: "AI Agents",
  },
  {
    id: 2,
    title: "Lead Qualification Pipeline",
    description: "Automated lead scoring and qualification system that routes prospects to the right sales rep instantly.",
    problem: "Sales team wasting time on unqualified leads",
    tools: ["n8n", "Airtable", "HubSpot", "Slack"],
    results: "3x increase in qualified leads, 50% faster response time",
    icon: Zap,
    category: "Workflow",
  },
  {
    id: 3,
    title: "Document Processing AI",
    description: "AI-powered system that extracts, categorizes, and processes documents automatically with high accuracy.",
    problem: "Manual document processing consuming 40+ hours weekly",
    tools: ["Claude", "Make.com", "Google Drive", "Notion"],
    results: "95% accuracy, 40 hours saved per week",
    icon: FileText,
    category: "AI Automation",
  },
  {
    id: 4,
    title: "Email Automation Suite",
    description: "Smart email system that drafts personalized responses and manages inbox efficiently using AI.",
    problem: "Executives spending 2+ hours daily on email management",
    tools: ["OpenAI", "Zapier", "Gmail", "Notion"],
    results: "70% reduction in email handling time",
    icon: Mail,
    category: "AI Automation",
  },
  {
    id: 5,
    title: "AI Content Generator",
    description: "Automated content creation pipeline for social media, blogs, and marketing materials.",
    problem: "Content team struggling to maintain posting schedule",
    tools: ["ChatGPT", "Make.com", "Airtable", "Buffer"],
    results: "5x content output, consistent brand voice",
    icon: Bot,
    category: "AI Agents",
  },
  {
    id: 6,
    title: "CRM Integration Hub",
    description: "Unified automation system connecting multiple platforms for seamless data flow.",
    problem: "Data silos causing inconsistent customer information",
    tools: ["n8n", "HubSpot", "Salesforce", "Stripe"],
    results: "100% data consistency, zero manual entry",
    icon: Zap,
    category: "Integration",
  },
];

const categories = ["All", "AI Agents", "Workflow", "AI Automation", "Integration"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Portfolio
            </span>
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
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-semibold font-display mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="border-t border-border/50 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary font-medium">
                    📈 {project.results}
                  </p>
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
