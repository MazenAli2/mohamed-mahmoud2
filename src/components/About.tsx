"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skills = [
  "Facebook Ads",
  "Instagram Ads",
  "TikTok Ads",
  "Google Ads",
  "Scaling",
  "Content Plan",
  "Shopify Developer",
  "Easy Order Developer",
  "Weekly Report",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative" style={{ background: "rgba(124,58,237,0.04)" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden glass-card p-3 md:p-4 border-accent/20 relative z-10">
               <div className="w-full h-full bg-gradient-to-br from-accent/20 to-indigo-900/50 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-black text-white overflow-hidden relative">
                  <span className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="relative z-10 text-center">
                    <div className="text-5xl md:text-7xl font-black gradient-text mb-2">MM</div>
                    <div className="text-sm md:text-base text-foreground/60 font-medium">Media Buyer</div>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 md:-bottom-10 right-0 w-32 h-32 md:w-48 md:h-48 bg-accent/20 blur-[60px] rounded-full -z-10" />
            <div className="absolute -top-6 md:-top-10 left-0 w-32 h-32 md:w-48 md:h-48 bg-indigo-500/20 blur-[60px] rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-right"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 leading-tight">
              أنا <span className="gradient-text underline">محمد محمود</span>، شريكك في النمو الرقمي.
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
              <p>
                خبير ميديا باينج متخصص في إدارة الحملات الإعلانية عبر منصات فيسبوك، إنستجرام، تيك توك وجوجل. أؤمن أن الإعلان الناجح يبدأ بفهم عميق للبيانات والجمهور المستهدف.
              </p>
              <p>
                لا أطلق إعلانات فقط — بل أبني منظومة تسويقية متكاملة تشمل خطة المحتوى والـ Scaling المدروس وتقارير أسبوعية دقيقة، مع خبرة في تطوير متاجر Shopify وEasy Order لضمان تجربة شراء سلسة.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 justify-end glass-card px-3 py-2 rounded-xl border border-accent/15"
                >
                  <span className="text-xs md:text-sm font-semibold text-foreground/80">{skill}</span>
                  <CheckCircle2 size={14} className="text-accent-2 flex-shrink-0" />
                </div>
              ))}
            </div>

            <div className="flex gap-6 md:gap-10 mt-10 md:mt-12 border-t border-accent/20 pt-8 justify-center lg:justify-end">
              <div>
                <div className="text-2xl md:text-3xl font-black gradient-text mb-1">+3 سنوات</div>
                <div className="text-[10px] md:text-sm text-foreground/40 uppercase">من الخبرة</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black gradient-text mb-1">+50 عميل</div>
                <div className="text-[10px] md:text-sm text-foreground/40 uppercase">سعيد بالنتائج</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black gradient-text mb-1">4 منصات</div>
                <div className="text-[10px] md:text-sm text-foreground/40 uppercase">إعلانية</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
