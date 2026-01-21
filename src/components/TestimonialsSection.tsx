import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Hoop Shorts",
    role: "AI-Powered NBA Video Clipping",
    content: "Mark built us an incredible AI system that completely transformed our content workflow. What used to take hours of manual editing now runs automatically — finding NBA highlights, creating shorts, and posting everywhere. Absolutely game-changing!",
    rating: 5,
  },
  {
    name: "Motivation Timepiece",
    role: "AI Quote Generation & Chatbot",
    content: "Working with Mark was amazing. He created an automation that generates quotes, designs images, and posts to Facebook without me lifting a finger. Plus the chatbot he built keeps our followers engaged 24/7. Highly recommend!",
    rating: 5,
  },
  {
    name: "Zapp Tech",
    role: "Tech Content Repurposing",
    content: "Mark delivered exactly what we needed — an AI system that turns our long tech reviews into viral shorts automatically. The quality is incredible and it posts to all our platforms. Best investment we've made!",
    rating: 5,
  },
  {
    name: "Scarlet Eve AI",
    role: "Telegram AI Image Bot",
    content: "Mark created the most unique Telegram bot for us. Our users love the anime image generation experience he built. The customization options are endless and the results are consistently beautiful. Mark really knows his stuff!",
    rating: 5,
  },
  {
    name: "Cavinti Suite",
    role: "Airbnb AI Support Agent",
    content: "Before Mark's chatbot, we were overwhelmed with guest inquiries. Now our AI assistant handles everything — bookings, questions, check-ins — all day, every day. Mark saved us countless hours and improved our guest experience!",
    rating: 5,
  },
  {
    name: "Mitchy Dental Lounge",
    role: "AI Voice Receptionist",
    content: "Mark built us an AI voice receptionist that handles all our appointment calls. It checks availability, books slots, and sends confirmations — all through natural conversation. We never miss a booking anymore. Mark is a genius!",
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
