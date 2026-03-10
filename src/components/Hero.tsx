"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 md:pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-accent opacity-25 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-purple-800 opacity-15 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 opacity-5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent/30 text-accent-2 mb-6 md:mb-8"
          >
            <Sparkles size={14} className="md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">خبير إعلانات رقمية ومضاعفة المبيعات</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.2] md:leading-tight mb-6 md:mb-8"
          >
            أحول إعلاناتك إلى{" "}
            <span className="gradient-text">
              نتائج حقيقية
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-xl text-foreground/70 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            مع محمد محمود، نبني استراتيجيات إعلانية متكاملة على فيسبوك، إنستجرام، تيك توك وجوجل — مصممة لمضاعفة مبيعاتك وتحقيق أعلى عائد على إنفاقك الإعلاني.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <a
              href="https://wa.me/201126978725"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-accent text-white font-bold text-base md:text-lg hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-3 glow-purple"
            >
              <Rocket size={20} />
              ابدأ معي الآن
            </a>
            <a
              href="#portfolio"
              className="flex items-center gap-2 group text-foreground/80 hover:text-white transition-colors text-base md:text-lg"
            >
              شاهد نتائجي
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform w-5 h-5" />
            </a>
          </motion.div>

          {/* Platform Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            {["Facebook Ads", "Instagram Ads", "TikTok Ads", "Google Ads", "Shopify", "Easy Order"].map((platform) => (
              <span
                key={platform}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card text-xs md:text-sm font-semibold text-foreground/60 border border-accent/20"
              >
                {platform}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hero Visual Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[400px] glass rounded-full opacity-10 blur-3xl -z-10"
      />
    </section>
  );
}
