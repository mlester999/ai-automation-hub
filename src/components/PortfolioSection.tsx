import { motion } from "framer-motion";
import { ArrowUpRight, Bot, ChevronLeft, ChevronRight, FileText, Mail, MessageSquare, Phone, X, Zap } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import project images
import hoopShortsImg from "@/assets/project-hoop-shorts.png";
import motivationTimepieceImg from "@/assets/project-motivation-timepiece.png";
import scarletEveImg from "@/assets/project-scarlet-eve.png";
import expenseTrackingImg from "@/assets/project-expense-tracking.png";
import chatbotImg from "@/assets/project-chatbot.png";
import zappTechImg from "@/assets/project-zapp-tech.png";
import mitchyDentalImg from "@/assets/project-mitchy-dental.png";

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
    image: hoopShortsImg,
    gallery: [hoopShortsImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
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
    image: motivationTimepieceImg,
    gallery: [motivationTimepieceImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
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
    image: scarletEveImg,
    gallery: [scarletEveImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
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
    image: expenseTrackingImg,
    gallery: [expenseTrackingImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 5,
    title: "Cavinti Suite — AI Support Agent Chatbot Integration",
    description:
      "Made an intelligent automated messaging chatbot for an Airbnb property called Cavinti Suite in Cavinti, Laguna, Philippines. It responds to guest inquiries, handles booking questions, manages appointment scheduling, provides property information, and assists with check-in/check-out details — all available 24/7 without manual intervention.",
    problem: "Data silos causing inconsistent customer information",
    tools: ["Meta", "n8n", "Google", "Stripe"],
    results: "24/7 automated guest support and booking assistance",
    icon: Mail,
    category: "Integration",
    href: "https://www.facebook.com/cavinti.suite/",
    image: chatbotImg,
    gallery: [chatbotImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
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
    image: zappTechImg,
    gallery: [zappTechImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 7,
    title: "Mitchy Dental Lounge — AI Voice Receptionist",
    description:
      "Built an AI-powered voice receptionist for Mitchy Dental Lounge that handles appointment scheduling, slot availability checks, booking confirmations, and appointment updates — all through natural voice conversations. Integrates with Google Calendar for real-time availability and automated booking management.",
    problem: "Missed calls and manual appointment scheduling overwhelming front desk staff",
    tools: ["n8n", "ElevenLabs", "Google Calendar", "OpenAI", "Airtable"],
    results: "24/7 automated appointment scheduling, zero missed bookings",
    icon: Phone,
    category: "AI Agents",
    href: "#",
    image: mitchyDentalImg,
    gallery: [mitchyDentalImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
];

const categories = ["All", "AI Agents", "Workflow", "AI Automation", "Integration"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  const handleImageClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass rounded-2xl overflow-hidden hover:glow-primary transition-all duration-300"
              >
                {/* Background Image - Now Clickable */}
                <div 
                  className="relative h-56 sm:h-64 overflow-hidden bg-[#1a1a1a] cursor-pointer"
                  onClick={() => handleImageClick(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  {/* Click hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="px-4 py-2 rounded-full glass text-sm font-medium text-primary">
                      Click to view gallery
                    </span>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 w-10 h-10 rounded-xl glass backdrop-blur-sm flex items-center justify-center hover:glow-primary hover:text-primary transition-all duration-300 cursor-pointer z-10"
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>

                <div className="p-6">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background/95 backdrop-blur-xl border-border/50 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>{selectedProject?.title || "Project Gallery"}</DialogTitle>
          </VisuallyHidden>
          {selectedProject && (
            <div className="relative">
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-border/50">
                <h3 className="text-lg sm:text-xl font-semibold font-display pr-8 text-foreground">
                  {selectedProject.title}
                </h3>
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {selectedProject.category}
                </span>
              </div>

              {/* Carousel */}
              <div className="p-4 sm:p-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedProject.gallery.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden">
                          <img
                            src={image}
                            alt={`${selectedProject.title} - Image ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-background/80 border-border hover:bg-background" />
                  <CarouselNext className="right-2 bg-background/80 border-border hover:bg-background" />
                </Carousel>

                {/* Image counter */}
                <div className="flex justify-center gap-2 mt-4">
                  {selectedProject.gallery.map((_, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full bg-muted-foreground/30"
                    />
                  ))}
                </div>
              </div>

              {/* Footer with link */}
              <div className="p-4 sm:p-6 border-t border-border/50 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  {selectedProject.gallery.length} images
                </p>
                {selectedProject.href !== "#" && (
                  <a
                    href={selectedProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
