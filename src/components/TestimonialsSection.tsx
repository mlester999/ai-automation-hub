import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jordan Hayes",
    role: "Founder, Hoop Shorts",
    content: "Mark built an incredible AI-powered video clipping system for our NBA content. We went from spending hours manually editing to having 5-10x faster content production. The automation discovers videos, extracts highlights, and publishes across all platforms automatically!",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    role: "Creator, Motivation Timepiece",
    content: "The AI chatbot and automated quote generation system Mark created transformed our Facebook page. We now have 24/7 motivational conversations with followers and 100% automated posting. Zero manual work required!",
    rating: 5,
  },
  {
    name: "Sam Nakamura",
    role: "Owner, Zapp Tech",
    content: "Mark's content repurposing automation is a game-changer. It takes our long-form tech reviews and automatically creates engaging shorts for YouTube, Facebook, and Instagram. AI-selected viral moments with multi-platform auto posting!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
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
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Client <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with AI automation.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 relative z-10">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
