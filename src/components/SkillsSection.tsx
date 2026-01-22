import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee";

// First row tools
const toolsRow1 = [
  { name: "Make.com", logo: "https://cdn.worldvectorlogo.com/logos/make-1.svg" },
  { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-2.svg" },
  { name: "n8n", logo: "https://n8n.io/favicon.ico" },
  { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
  { name: "ChatGPT", logo: "https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg" },
  { name: "Claude", logo: "https://www.anthropic.com/favicon.ico" },
  { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg" },
  { name: "OpenRouter", logo: "https://openrouter.ai/favicon.ico" },
  { name: "Grok", logo: "https://x.ai/favicon.ico" },
  { name: "Vapi", logo: "https://vapi.ai/favicon.ico" },
  { name: "Gemini", logo: "https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png" },
];

// Second row tools (different set)
const toolsRow2 = [
  { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
  { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
  { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
  { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
  { name: "ElevenLabs", logo: "https://elevenlabs.io/favicon.ico" },
  { name: "Google Calendar", logo: "https://cdn.worldvectorlogo.com/logos/google-calendar-2020.svg" },
  { name: "Telegram", logo: "https://cdn.worldvectorlogo.com/logos/telegram-1.svg" },
  { name: "GoHighLevel", logo: "https://assets.cdn.filesafe.space/CbtJkQn3xgTyE1dYsCCn/media/65694b4a82f02211f4d80e8c.png" },
  { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg" },
  { name: "Freepik", logo: "https://cdn.worldvectorlogo.com/logos/freepik.svg" },
  { name: "Midjourney", logo: "https://cdn.worldvectorlogo.com/logos/midjourney.svg" },
  { name: "Google Docs", logo: "https://cdn.worldvectorlogo.com/logos/google-docs-2020.svg" },
  { name: "Google Sheets", logo: "https://cdn.worldvectorlogo.com/logos/google-sheets-2020-logo.svg" },
];

const ToolCard = ({ tool }: { tool: { name: string; logo: string } }) => {
  return (
    <div className="flex items-center gap-3 glass px-5 py-3 rounded-xl hover:glow-primary transition-all duration-300 cursor-default min-w-fit">
      <div className="w-8 h-8 rounded-md bg-white/90 flex items-center justify-center p-1">
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="w-6 h-6 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <span className="text-sm font-medium whitespace-nowrap">{tool.name}</span>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 noise opacity-30" />
      
      <div className="relative z-10">
        <div className="container px-4 sm:px-6">
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
                Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
                Tools & <span className="text-gradient">Technologies</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Specialized in cutting-edge AI and automation technologies to build 
                powerful solutions for modern businesses.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Marquee - Full Width */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <Marquee pauseOnHover className="[--duration:30s] py-4">
            {toolsRow1.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </Marquee>
          
          <Marquee pauseOnHover reverse className="[--duration:35s] py-4">
            {toolsRow2.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
