import { motion } from "framer-motion";
import { ArrowUpRight, Bot, ChevronLeft, ChevronRight, FileText, Mail, MessageSquare, Phone, X, Zap, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import project images
import hoopShortsImg from "@/assets/project-hoop-shorts.png";
import hoopShortsYoutubeImg from "@/assets/hoop-shorts-youtube.png";
import hoopShortsInstagramImg from "@/assets/hoop-shorts-instagram.png";
import hoopShortsFacebookImg from "@/assets/hoop-shorts-facebook.png";
import motivationTimepieceImg from "@/assets/project-motivation-timepiece.png";
import motivationTimepieceChatImg from "@/assets/motivation-timepiece-chat.png";
import motivationTimepieceFacebookImg from "@/assets/motivation-timepiece-facebook.png";
import motivationTimepieceQuoteImg from "@/assets/motivation-timepiece-quote.png";
import scarletEveImg from "@/assets/project-scarlet-eve.png";
import expenseTrackingImg from "@/assets/project-expense-tracking.png";
import chatbotImg from "@/assets/project-chatbot.png";
import zappTechImg from "@/assets/project-zapp-tech.png";
import zappTechFacebookImg from "@/assets/zapp-tech-facebook.png";
import zappTechYoutubeImg from "@/assets/zapp-tech-youtube.png";
import zappTechInstagramImg from "@/assets/zapp-tech-instagram.png";
import mitchyDentalImg from "@/assets/project-mitchy-dental.png";
import xeroAsanaImg from "@/assets/project-xero-asana.png";
import markoBarDealImg from "@/assets/project-marko-bar-deal.png";
import aiContentRepurposingImg from "@/assets/project-ai-content-repurposing.png";
import aiContentRepurposing1Img from "@/assets/ai-content-repurposing-1.png";
import aiContentRepurposing2Img from "@/assets/ai-content-repurposing-2.png";
import aiContentRepurposing3Img from "@/assets/ai-content-repurposing-3.png";
import verdeFunnelImg from "@/assets/project-verde-funnel.png";
import zorivelleRealtyChatImg from "@/assets/zorivelle-realty-chat.png";
import zorivelleRealtyDbImg from "@/assets/zorivelle-realty-database.png";
import expenseTracker3Img from "@/assets/expense-tracker-3.png";
import expenseTracker4Img from "@/assets/expense-tracker-4.jpeg";
import expenseTracker5Img from "@/assets/expense-tracker-5.png";
import emailAgentImg from "@/assets/project-email-agent.png";
import zorivelleRealtyUiImg from "@/assets/project-zorivelle-realty-ui.png";
import brightsmileDentalImg from "@/assets/project-brightsmile-dental.png";
import brightsmilePage1Img from "@/assets/brightsmile-page1.png";
import brightsmilePage2Img from "@/assets/brightsmile-page2.png";
import brightsmilePage3Img from "@/assets/brightsmile-page3.png";
import brightsmileWorkflow1Img from "@/assets/brightsmile-workflow1.png";
import brightsmileWorkflow2Img from "@/assets/brightsmile-workflow2.png";
import apexRejuvenationImg from "@/assets/project-apex-rejuvenation.png";
import apexWorkflow1Img from "@/assets/apex-workflow1.png";
import apexWorkflow2Img from "@/assets/apex-workflow2.png";
import apexBookingImg from "@/assets/apex-booking.png";
import propertyWorkflowImg from "@/assets/property-workflow.png";
import propertyEmailImg from "@/assets/property-email.png";
import propertyPreviewImg from "@/assets/property-preview.png";
import propertyTypeformImg from "@/assets/property-typeform.png";

const projects = [
  {
    id: 1,
    title: "Hoop Shorts — AI-Powered NBA Video Clipping & Shorts Automation",
    description:
      "Built an AI-powered automated content system that generates optimized titles and descriptions, discovers long-form NBA videos with no existing Shorts, intelligently identifies and extracts high-impact moments, transforms them into engaging short-form videos, and automatically publishes across YouTube Shorts, Facebook Reels, and Instagram Reels.",
    problem: "High volume of repetitive customer questions overwhelming support team",
    tools: ["n8n", "OpenAI", "Klap AI", "Meta", "YouTube"],
    results: "90% reduction in manual editing work, 5–10 times faster content production",
    icon: Zap,
    categories: ["AI Automation", "n8n"],
    href: "https://www.youtube.com/@HoopShortsOfficial",
    image: hoopShortsImg,
    gallery: [hoopShortsImg, "loom:2620d8f7a3f844a28ca8690348c41da6", hoopShortsYoutubeImg, hoopShortsInstagramImg, hoopShortsFacebookImg],
  },
  {
    id: 2,
    title: "Motivation Timepiece — AI Automation for Motivational Quote Image Generation",
    description:
      "This AI-powered automated workflow creates and publishes motivational content to Facebook without manual effort. It uses AI to generate quotes from famous motivational speakers, produces matching speaker visuals, adds the quote as text overlay on the image, and automatically uploads the final post to a Facebook page.",
    problem: "Sales team wasting time on unqualified leads",
    tools: ["Midjourney", "Airtable", "n8n", "Facebook", "Meta"],
    results: "Zero manual quote research, 100% automated posting",
    icon: FileText,
    categories: ["Workflow", "n8n"],
    href: "https://www.facebook.com/motivation.timepiece/",
    image: motivationTimepieceImg,
    gallery: [motivationTimepieceImg, "loom:f16bbd9b73d549e4bb56fed1ab383d7a", motivationTimepieceFacebookImg, motivationTimepieceChatImg, motivationTimepieceQuoteImg],
  },
  {
    id: 3,
    title: "Automated Accounting Workflow — Xero to Google Sheets & Asana",
    description:
      "Built an automated accounting workflow using Make.com that extracts account transactions from Xero, processes the data through an iterator, and routes it to Google Sheets for reporting and Asana for task management — eliminating manual data entry and ensuring real-time financial tracking.",
    problem: "Manual accounting data entry consuming hours weekly",
    tools: ["Make", "Xero", "Google Sheets", "Asana"],
    results: "80% reduction in accounting data entry time",
    icon: FileText,
    categories: ["Workflow", "Make.com"],
    href: "https://www.loom.com/share/e3eefdc6c2484272a1bfd7233a969db8",
    image: xeroAsanaImg,
    gallery: [xeroAsanaImg, "loom:e3eefdc6c2484272a1bfd7233a969db8", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 4,
    title: "Scarlet Eve AI — Christmas Anime Companion for AI Image Creation",
    description:
      "A Christmas-themed anime waifu AI agent available on Telegram, designed to guide users through a cozy and magical AI image creation experience. Users can chat naturally or use simple commands to generate anime-style images filled with winter charm and holiday sparkle. It allows full customization of image results, including expressions, emotions, poses, outfits, and companions. ",
    problem: "Manual document processing consuming 40+ hours weekly",
    tools: ["n8n", "Telegram", "Midjourney", "X", "OpenAI"],
    results: "Instant image variations, consistent anime-style results",
    icon: Bot,
    categories: ["AI Agents", "n8n"],
    href: "https://t.me/ScarletEveAIBot",
    image: scarletEveImg,
    gallery: [scarletEveImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 5,
    title: "AI Expense Tracking & Budgeting Workflow",
    description:
      "Made an automated expense tracking system that records daily expenses directly from Telegram into Notion in real time. Eliminates manual logging, reduces tracking errors, and provides a centralized, always-updated view of personal or business finances — enabling faster budgeting decisions with zero manual input.",
    problem: "Executives spending 2+ hours daily on email management",
    tools: ["Notion", "n8n", "Telegram", "Gmail", "OpenAI"],
    results: "Zero missed entries, real-time expense tracking",
    icon: MessageSquare,
    categories: ["Workflow", "n8n"],
    href: "https://t.me/MarkyExpenseBot",
    image: expenseTrackingImg,
    gallery: [expenseTrackingImg, "/placeholder.svg", expenseTracker3Img, expenseTracker4Img, expenseTracker5Img],
  },
  {
    id: 6,
    title: "Cavinti Suite — AI Support Agent Chatbot Integration",
    description:
      "Made an intelligent automated messaging chatbot for an Airbnb property called Cavinti Suite in Cavinti, Laguna, Philippines. It responds to guest inquiries, handles booking questions, manages appointment scheduling, provides property information, and assists with check-in/check-out details — all available 24/7 without manual intervention.",
    problem: "Data silos causing inconsistent customer information",
    tools: ["Meta", "n8n", "Google", "Stripe"],
    results: "24/7 automated guest support and booking assistance",
    icon: Mail,
    categories: ["AI Agents", "Integration", "n8n"],
    href: "https://www.facebook.com/cavinti.suite/",
    image: chatbotImg,
    gallery: [chatbotImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 7,
    title: "Zapp Tech — AI Automation for Tech Content Repurposing",
    description:
      "An AI-powered content automation system that transforms long-form tech videos—such as smartphone, smartwatch, and high-tech reviews—into engaging, social-media-ready shorts. Automatically identifies the best moments, formats clips for YouTube Shorts, Facebook, and Instagram, and publishes them with zero manual editing.",
    problem: "Content team struggling to maintain posting schedule",
    tools: ["OpenAI", "Klap AI", "n8n", "OneDrive", "Meta", "YouTube"],
    results: "AI-selected viral moments, multi-platform auto posting",
    icon: Zap,
    categories: ["AI Automation", "n8n"],
    href: "https://www.instagram.com/officialzapptech/",
    image: zappTechImg,
    gallery: [zappTechImg, "/placeholder.svg", zappTechFacebookImg, zappTechYoutubeImg, zappTechInstagramImg],
  },
  {
    id: 8,
    title: "Mitchy Dental Lounge — AI Voice Receptionist",
    description:
      "Built an AI-powered voice receptionist for Mitchy Dental Lounge that handles appointment scheduling, slot availability checks, booking confirmations, and appointment updates — all through natural voice conversations. Integrates with Google Calendar for real-time availability and automated booking management.",
    problem: "Missed calls and manual appointment scheduling overwhelming front desk staff",
    tools: ["n8n", "ElevenLabs", "Google Calendar", "OpenAI", "Airtable"],
    results: "24/7 automated appointment scheduling, zero missed bookings",
    icon: Phone,
    categories: ["AI Agents", "n8n"],
    href: "#",
    image: mitchyDentalImg,
    gallery: [mitchyDentalImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 9,
    title: "Marko Bar Deal Automation — Automated Sales Pipeline with PandaDoc & Slack",
    description:
      "Built an automated deal workflow using Zapier that triggers when Airtable records reach 'Closed Won' status, automatically generates and sends PandaDoc contracts, notifies the team via Slack on success or failure, formats dates, creates onboarding tasks, and updates records — all without manual intervention.",
    problem: "Manual deal processing causing delays in contract delivery and onboarding",
    tools: ["Zapier", "Airtable", "PandaDoc", "Slack"],
    results: "Instant contract generation, real-time team notifications",
    icon: FileText,
    categories: ["Workflow", "Zapier"],
    href: "#",
    image: markoBarDealImg,
    gallery: [markoBarDealImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 10,
    title: "AI Content Repurposing — Multi-Platform Social Media Automation",
    description:
      "Created an AI-powered content repurposing automation using Zapier that monitors Google Drive for new video files, filters for .mp4 extensions, extracts content using AI, analyzes and returns structured data, loops through line items, and automatically distributes content to Facebook Pages and LinkedIn based on conditional paths.",
    problem: "Content team spending hours manually repurposing videos for different platforms",
    tools: ["Zapier", "Google Drive", "Facebook", "LinkedIn", "OpenAI"],
    results: "Zero-touch content distribution, multi-platform publishing",
    icon: Zap,
    categories: ["AI Automation", "Zapier"],
    href: "#",
    image: aiContentRepurposingImg,
    gallery: [aiContentRepurposingImg, "loom:1f56653be907400eb5ff77f54a1ba677", aiContentRepurposing1Img, aiContentRepurposing2Img, aiContentRepurposing3Img],
  },
  {
    id: 11,
    title: "AI Email Agent — Classification, KB Reply & Human in the Loop",
    description:
      "Built an intelligent email automation agent using Zapier that classifies incoming emails by confidence level using AI, routes high-confidence emails through a knowledge base lookup to generate and send automatic replies, and flags low-confidence emails to Slack for human review — ensuring fast, accurate responses with minimal manual effort.",
    problem: "Support team overwhelmed by high volume of repetitive email inquiries",
    tools: ["Zapier", "OpenAI", "Google Sheets", "Gmail", "Slack"],
    results: "Automated email replies for high-confidence queries, instant Slack alerts for edge cases",
    icon: Mail,
    categories: ["AI Agents", "Zapier"],
    href: "#",
    image: emailAgentImg,
    gallery: [emailAgentImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 12,
    title: "Zorivelle Realty Chatbot — RAG-Powered Document Q&A for Real Estate",
    description:
      "Built an intelligent RAG-based chatbot using n8n that processes and indexes real estate documents into a Supabase vector store, enabling instant AI-powered answers to user queries. The workflow monitors Google Drive for new files, extracts and embeds content via Google Gemini, and serves responses through a webhook-triggered AI agent — delivering accurate, document-grounded answers with zero manual lookup.",
    problem: "Agents spending hours searching through property documents for client answers",
    tools: ["n8n", "Supabase", "Google Gemini", "Google Drive", "OpenAI"],
    results: "Instant document-grounded answers, zero manual document searching",
    icon: Bot,
    categories: ["AI Agents", "n8n"],
    href: "#",
    image: chatbotImg,
    gallery: [chatbotImg, "/placeholder.svg", zorivelleRealtyChatImg, zorivelleRealtyDbImg, "/placeholder.svg"],
  },
  {
    id: 13,
    title: "Zorivelle Realty – Lovable UI + GHL Forms/Calendars",
    description:
      "Designed and developed a modern real estate funnel for Zorivelle Realty using Lovable, integrated with GoHighLevel forms and calendars for lead capture and appointment scheduling. Features include property catalog browsing, AI-powered chat widget, tour scheduling, and a fully responsive premium design — combining beautiful UI with powerful CRM-driven backend workflows.",
    problem: "No centralized platform for property browsing, lead capture, and appointment scheduling",
    tools: ["Lovable", "GoHighLevel", "Google Calendar"],
    results: "Streamlined lead capture, automated tour scheduling, professional online presence",
    icon: Zap,
    categories: ["Integration", "GoHighLevel"],
    href: "https://marky-estate-showcase.lovable.app",
    image: zorivelleRealtyUiImg,
    gallery: [zorivelleRealtyUiImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 14,
    title: "VERDÉ — Sales Funnel & Automation",
    description:
      "Built a high-converting sales funnel for VERDÉ Sparkling Pistachio using GoHighLevel, featuring urgency-driven copy, embedded product video, social proof badges, and automated order processing. The funnel includes scarcity triggers, trust signals, and a streamlined checkout flow — all powered by GHL automation workflows for lead nurturing and follow-up sequences.",
    problem: "No automated sales funnel to convert visitors into buyers with follow-up sequences",
    tools: ["GoHighLevel"],
    results: "Automated sales pipeline, higher conversion rates, hands-off order processing",
    icon: Zap,
    categories: ["GoHighLevel"],
    href: "#",
    image: verdeFunnelImg,
    gallery: [verdeFunnelImg, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 15,
    title: "BrightSmile Dental — Appointment Booking Funnel & Automation",
    description:
      "Designed and built a professional appointment booking funnel for BrightSmile Dental Clinic using GoHighLevel, featuring urgency-driven headlines, a free consultation CTA, trust-building clinic imagery, and automated booking workflows. The funnel includes scarcity triggers, phone integration, and streamlined scheduling — all powered by GHL automation for appointment reminders and follow-up sequences.",
    problem: "No streamlined online booking system to convert website visitors into scheduled dental appointments",
    tools: ["GoHighLevel"],
    results: "Automated appointment scheduling, increased booking conversions, reduced no-shows with automated reminders",
    icon: Zap,
    categories: ["GoHighLevel"],
    href: "#",
    image: brightsmileDentalImg,
    gallery: [brightsmileDentalImg, "/placeholder.svg", brightsmilePage1Img, brightsmileWorkflow1Img, brightsmileWorkflow2Img],
  },
  {
    id: 16,
    title: "Apex Rejuvenation — Telehealth Website & Appointment Automation",
    description:
      "Built a full concierge telehealth website and appointment booking system for Apex Rejuvenation using GoHighLevel. The site features physician-led hormone optimization services including TRT, medical weight loss, and peptide therapies. Includes automated consultation confirmation workflows, cancelled/no-show re-engagement sequences, and a streamlined booking calendar — all powered by GHL automation.",
    problem: "No professional online presence or automated booking system to convert leads into scheduled physician consultations",
    tools: ["GoHighLevel"],
    results: "Automated consultation booking, confirmation & reminder workflows, cancelled/no-show follow-up sequences, professional HIPAA-compliant web presence",
    icon: Zap,
    categories: ["GoHighLevel"],
    href: "#",
    image: apexRejuvenationImg,
    gallery: [apexWorkflow1Img, apexWorkflow2Img, "/placeholder.svg", apexRejuvenationImg, apexBookingImg],
  },
  {
    id: 17,
    title: "AI Property Visualization — Automated Listing & Image Generation Workflow",
    description:
      "Built an end-to-end n8n automation workflow that takes property details from a Typeform intake, generates a high-converting Facebook Marketplace listing using AI, creates 5 MLS-style property images via DALL-E (exterior, living room, kitchen, bedroom, backyard), and delivers the complete listing package with all images attached via Gmail — ready to copy, paste, and post.",
    problem: "Real estate agents spend hours manually creating property listings, writing descriptions, and sourcing or editing property images for each listing",
    tools: ["n8n"],
    results: "Fully automated listing generation from intake to email delivery, AI-generated MLS-style property images, high-converting listing copy with zero manual effort",
    icon: Zap,
    categories: ["AI Automation", "n8n", "Workflow"],
    href: "#",
    image: propertyWorkflowImg,
    gallery: [propertyWorkflowImg, propertyEmailImg, "/placeholder.svg", propertyPreviewImg, propertyTypeformImg],
  },
];

const categories = ["All", "AI Agents", "Workflow", "AI Automation", "Integration", "n8n", "Make.com", "Zapier", "GoHighLevel"];

// Gallery Carousel with active dot indicator and zoom feature
const GalleryCarousel = ({ gallery, title }: { gallery: string[]; title: string }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [loadingVideos, setLoadingVideos] = useState<Set<number>>(new Set());
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const MIN_ZOOM = 1;
  const MAX_ZOOM = 3;
  const ZOOM_STEP = 0.5;

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      // Reset zoom when changing slides
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
    });
  }, [api]);

  // Check if item is a Loom video (format: "loom:VIDEO_ID")
  const isLoomVideo = (item: string) => item.startsWith("loom:");
  const getLoomId = (item: string) => item.replace("loom:", "");

  const handleVideoLoad = (index: number) => {
    setLoadingVideos(prev => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  };

  // Set loading state when a video slide becomes active
  useEffect(() => {
    if (isLoomVideo(gallery[current]) && !loadingVideos.has(current)) {
      setLoadingVideos(prev => new Set(prev).add(current));
    }
  }, [current, gallery]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const newZoom = Math.max(prev - ZOOM_STEP, MIN_ZOOM);
      if (newZoom === MIN_ZOOM) {
        setPanPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    const currentItem = gallery[current];
    if (isLoomVideo(currentItem)) return; // Don't zoom videos
    
    if (zoomLevel === 1) {
      // Zoom to 300% centered on click position
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left - rect.width / 2;
      const clickY = e.clientY - rect.top - rect.height / 2;
      
      // Pan to center on clicked point (inverted because we want that point centered)
      setZoomLevel(MAX_ZOOM);
      setPanPosition({
        x: -clickX * (MAX_ZOOM - 1),
        y: -clickY * (MAX_ZOOM - 1),
      });
    } else {
      // Reset to 100%
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      // Allow much larger panning range to reach edges of zoomed image
      const maxPan = (zoomLevel - 1) * 500;
      setPanPosition({
        x: Math.max(-maxPan, Math.min(maxPan, newX)),
        y: Math.max(-maxPan, Math.min(maxPan, newY)),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Check if current item is an image (not a video)
  const isCurrentImage = !isLoomVideo(gallery[current]);

  return (
    <>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {gallery.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video bg-[#1a1a1a] rounded-xl" style={{ overflow: current === index && zoomLevel > 1 ? 'visible' : 'hidden' }}>
                <div 
                  className="absolute inset-0"
                  onDoubleClick={handleDoubleClick}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  style={{ 
                    cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                    overflow: current === index && zoomLevel > 1 ? 'visible' : 'hidden'
                  }}
                >
                {isLoomVideo(item) ? (
                  // Only render iframe when it's the active slide to pause on navigation
                  current === index ? (
                    <>
                      {/* Loading spinner */}
                      {loadingVideos.has(index) && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#1a1a1a]">
                          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                        </div>
                      )}
                      <iframe
                        src={`https://www.loom.com/embed/${getLoomId(item)}`}
                        frameBorder="0"
                        allowFullScreen
                        className={`w-full h-full transition-opacity duration-300 ${loadingVideos.has(index) ? 'opacity-0' : 'opacity-100'}`}
                        title={`${title} - Video ${index + 1}`}
                        onLoad={() => handleVideoLoad(index)}
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1" />
                        </div>
                        <span className="text-sm">Video</span>
                      </div>
                    </div>
                  )
                ) : (
                  <img
                    src={item}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-full object-contain transition-transform duration-200"
                    style={{
                      transform: current === index ? `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)` : 'none',
                    }}
                    draggable={false}
                  />
                )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-background/80 border-border hover:bg-background" />
        <CarouselNext className="right-2 bg-background/80 border-border hover:bg-background" />
      </Carousel>

      {/* Zoom controls - only show for images */}
      {isCurrentImage && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= MIN_ZOOM}
            className="p-2 rounded-lg glass hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-sm text-muted-foreground min-w-[60px] text-center">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= MAX_ZOOM}
            className="p-2 rounded-lg glass hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          {zoomLevel > 1 && (
            <button
              onClick={handleResetZoom}
              className="p-2 rounded-lg glass hover:bg-secondary transition-all duration-200 ml-2"
              aria-label="Reset zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Image counter with active indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {gallery.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-primary w-4"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pinnedIds = [1, 2, 3, 10]; // Hoop Shorts, Motivation Timepiece, Automated Accounting, AI Content Repurposing
  const shuffledProjects = useMemo(() => {
    const pinned = pinnedIds.map(id => projects.find(p => p.id === id)!);
    const rest = projects.filter(p => !pinnedIds.includes(p.id)).sort(() => Math.random() - 0.5);
    return [...pinned, ...rest];
  }, []);
  const filteredProjects = activeCategory === "All" ? shuffledProjects : shuffledProjects.filter((p) => p.categories.includes(activeCategory));

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
                className="glass rounded-2xl overflow-hidden hover:glow-primary transition-all duration-300"
              >
                {/* Background Image - Now Clickable with its own group */}
                <div 
                  className="group/image relative h-56 sm:h-64 overflow-hidden bg-[#1a1a1a] cursor-pointer"
                  onClick={() => handleImageClick(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain opacity-70 group-hover/image:opacity-90 group-hover/image:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  {/* Click hint - always visible on touch devices, hover on desktop */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
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
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.categories.join(" • ")}</span>

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
                  {selectedProject.categories.join(" • ")}
                </span>
              </div>

              {/* Carousel */}
              <div className="p-4 sm:p-6">
                <GalleryCarousel gallery={selectedProject.gallery} title={selectedProject.title} />
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
