import { motion } from "framer-motion";
import { Bot, Code, LineChart, Lightbulb, Settings, Users } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Workflow Automation",
    description: "Transform repetitive tasks into intelligent automated workflows that run 24/7, saving countless hours and reducing human error.",
  },
  {
    icon: Code,
    title: "Custom AI Solutions",
    description: "Tailored AI implementations designed for your specific business needs—from chatbots to document processing systems.",
  },
  {
    icon: Settings,
    title: "Business Process Optimization",
    description: "Analyze and redesign your operations to maximize efficiency, eliminate bottlenecks, and create scalable processes.",
  },
  {
    icon: Lightbulb,
    title: "Consultation & Strategy",
    description: "Expert guidance on AI adoption, automation roadmaps, and technology strategy to future-proof your business.",
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    description: "Automated reporting dashboards and analytics systems that turn your data into actionable insights.",
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Empower your team with hands-on training to leverage AI tools and automation platforms effectively.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 noise opacity-30" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              How I Can <span className="text-gradient">Help You</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end automation services designed to transform your business operations 
              and drive measurable results.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group glass rounded-2xl p-8 hover:glow-primary transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold font-display mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
