import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, MessageCircle, Calendar } from "lucide-react";
import { useEffect } from "react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/yourphonenumber", label: "WhatsApp" },
    { icon: Mail, href: "mailto:hello@marklester.dev", label: "Gmail" },
  ];

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 noise opacity-30" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Schedule a free consultation 
              to discuss how AI automation can transform your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Calendly Embed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 glass rounded-2xl p-4 sm:p-6 overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold font-display">Schedule a Call</h3>
              </div>
              <div
                className="calendly-inline-widget rounded-xl overflow-hidden"
                data-url="https://calendly.com/your-calendly-username/30min?hide_gdpr_banner=1&background_color=0a0a0f&text_color=e4e4e7&primary_color=22d3ee"
                style={{ minWidth: "280px", height: "600px" }}
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold font-display mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Follow me on social media or reach out directly via email. 
                  I typically respond within 24 hours.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:glow-primary hover:text-primary transition-all duration-300"
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold font-display mb-4">Quick Response</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>📍 Available for remote work worldwide</p>
                  <p>⏰ Response within 24 hours</p>
                  <p>💬 Free initial consultation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
