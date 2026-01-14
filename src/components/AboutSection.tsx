import { motion } from "framer-motion";
import { Bot, Cpu, Workflow, Zap } from "lucide-react";

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image/Visual */}
            <motion.div {...fadeInUp} className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                <div className="relative glass rounded-3xl p-8 h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:glow-primary transition-all duration-300">
                      <Bot className="w-10 h-10 text-primary" />
                      <span className="text-sm font-medium">AI Agents</span>
                    </div>
                    <div className="glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:glow-primary transition-all duration-300">
                      <Workflow className="w-10 h-10 text-accent" />
                      <span className="text-sm font-medium">Workflows</span>
                    </div>
                    <div className="glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:glow-primary transition-all duration-300">
                      <Cpu className="w-10 h-10 text-primary" />
                      <span className="text-sm font-medium">Automation</span>
                    </div>
                    <div className="glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:glow-primary transition-all duration-300">
                      <Zap className="w-10 h-10 text-accent" />
                      <span className="text-sm font-medium">Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
                Hi, I'm <span className="text-gradient">Mark Lester Acak</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  I'm an AI Automation Specialist passionate about transforming
                  how businesses operate through intelligent automation
                  solutions.
                </p>
                <p>
                  With expertise in AI agents, workflow automation, and system
                  integrations, I help companies eliminate repetitive tasks,
                  streamline operations, and unlock new levels of efficiency.
                </p>
                <p>
                  My approach combines technical innovation with strategic
                  thinking—ensuring every solution I build delivers measurable
                  results and real business value.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">1k+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Hours Automated
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">95%</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;