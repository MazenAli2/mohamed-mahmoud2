"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "متجر إلكتروني للأزياء",
    challenge: "تكلفة عالية للعميل (CPA)",
    result: "ROAS 8x بميزانية 30,000 ج",
    platform: "Facebook & Instagram",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "متجر الكتروني للساعات",
    challenge: "CPA 75 جنية",
    result: "ROAS 4",
    platform: "TikTok Ads",
    image: "/watch.jpeg",
    link: "https://m-st0re.myeasyorders.com/",
  },
  {
    title: "خدمات محلية وحرفية",
    challenge: "محدودية العملاء المحليين",
    result: "أكثر من 500 طلب استفسار شهرياً",
    platform: "Google Ads",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">
            نتائج{" "}
            <span className="gradient-text underline decoration-accent/30 md:decoration-8 underline-offset-8">
              حقيقية
            </span>
          </h2>
          <p className="text-sm md:text-lg text-foreground/60 max-w-2xl mx-auto">
            كل حملة هي قصة نجاح مبنية على بيانات وتحليل دقيق، لا على التخمين.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card hover:border-accent/40 transition-all duration-500"
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="h-48 sm:h-64 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 bg-accent/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-accent/30">
                    <span className="text-accent-2 font-bold text-xs md:text-sm">{project.platform}</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 text-right">
                  <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 flex items-center justify-between">
                    {project.title}
                    <ExternalLink size={18} className="text-accent-2 md:w-5 md:h-5" />
                  </h3>
                  
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2 md:gap-3 justify-end text-xs md:text-sm">
                      <span className="bg-red-500/10 text-red-400 px-2 py-0.5 md:px-3 md:py-1 rounded-lg border border-red-500/20">{project.challenge}</span>
                      <span className="text-foreground/40">:التحدي</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 justify-end text-xs md:text-sm">
                      <span className="bg-green-500/10 text-green-400 px-2 py-0.5 md:px-3 md:py-1 rounded-lg border border-green-500/20 font-bold">{project.result}</span>
                      <span className="text-foreground/40">:النتيجة</span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
