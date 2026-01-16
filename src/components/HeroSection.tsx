import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import markPhoto from "@/assets/mark-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 lg:pt-0 lg:pb-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 noise opacity-50" />
      
      {/* Floating orbs - smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 lg:mb-8"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Philippines</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-4 lg:mb-6"
              >
                Workflow &<br />
                <span className="text-gradient">AI Automation</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-10"
              >
                I help businesses save time, reduce errors, and increase productivity 
                by building seamless automation workflows with Zapier, Make.com, 
                GoHighLevel, and n8n.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                  <a href="#portfolio">
                    Let's Work Together
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
                  <a href="#contact">Contact Me</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Photo with Glow Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Outer glow ring */}
              <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full border-2 border-primary/30 animate-pulse-glow" />
              
              {/* Inner glow ring */}
              <div className="absolute w-[175px] h-[175px] sm:w-[245px] sm:h-[245px] md:w-[315px] md:h-[315px] lg:w-[370px] lg:h-[370px] rounded-full border border-primary/50 shadow-[0_0_40px_rgba(34,211,238,0.3)] sm:shadow-[0_0_60px_rgba(34,211,238,0.3)]" />
              
              {/* Photo container */}
              <div className="relative w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-primary/60 shadow-[0_0_50px_rgba(34,211,238,0.4)] sm:shadow-[0_0_80px_rgba(34,211,238,0.4)]">
                <img 
                  src={markPhoto} 
                  alt="Mark Lester Acak" 
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient for better blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              
              {/* Decorative glow behind */}
              <div className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
