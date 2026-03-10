"use client";

import { motion } from "framer-motion";
import { Facebook, Search, Smartphone, BarChart3, ShoppingBag, FileText, TrendingUp, Calendar } from "lucide-react";

const services = [
  {
    title: "إعلانات فيسبوك",
    desc: "تصميم حملات فيسبوك عالية التحويل باستهداف دقيق وإدارة احترافية لتحقيق أعلى ROAS.",
    icon: <Facebook size={32} />,
    color: "from-blue-600/20 to-indigo-400/20",
  },
  {
    title: "إعلانات إنستجرام",
    desc: "إنشاء محتوى بصري جذاب واستهداف الجمهور المناسب عبر إنستجرام لزيادة المبيعات والوعي بالعلامة.",
    icon: <Smartphone size={32} />,
    color: "from-pink-500/20 to-purple-600/20",
  },
  {
    title: "إعلانات تيك توك",
    desc: "الاستفادة من الزخم الهائل لتيك توك لإطلاق حملات فيروسية تصل لملايين المستخدمين.",
    icon: <TrendingUp size={32} />,
    color: "from-cyan-500/20 to-teal-400/20",
  },
  {
    title: "إعلانات جوجل",
    desc: "تصدر نتائج البحث والوصول للعملاء في اللحظة التي يبحثون فيها عن منتجاتك أو خدماتك.",
    icon: <Search size={32} />,
    color: "from-red-500/20 to-yellow-500/20",
  },
  {
    title: "التوسع والـ Scaling",
    desc: "توسيع ميزانياتك الإعلانية بشكل مدروس دون الإضرار بالـ ROAS للحصول على نمو مستدام.",
    icon: <BarChart3 size={32} />,
    color: "from-green-500/20 to-emerald-400/20",
  },
  {
    title: "خطة المحتوى (Content Plan)",
    desc: "وضع خطة محتوى متكاملة تخدم استراتيجيتك الإعلانية وتبني حضوراً قوياً للعلامة التجارية.",
    icon: <Calendar size={32} />,
    color: "from-orange-500/20 to-amber-400/20",
  },
  {
    title: "تطوير Shopify",
    desc: "بناء وتطوير متاجر Shopify احترافية وربطها بمنظومة الإعلانات لتحقيق أعلى معدل تحويل.",
    icon: <ShoppingBag size={32} />,
    color: "from-purple-600/20 to-violet-400/20",
  },
  {
    title: "تطوير Easy Order",
    desc: "إعداد وتخصيص منصة Easy Order لتسهيل عمليات البيع واستقبال الطلبات بكفاءة عالية.",
    icon: <FileText size={32} />,
    color: "from-indigo-500/20 to-blue-400/20",
  },
  {
    title: "التقارير الأسبوعية (Weekly Report)",
    desc: "تقديم تقارير مفصلة كل أسبوع عن أداء الحملات والـ ROAS والمبيعات المحققة مع خطة العمل القادمة.",
    icon: <BarChart3 size={32} />,
    color: "from-slate-500/20 to-gray-400/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4 md:mb-6"
          >
            ما الذي{" "}
            <span className="gradient-text">أقدمه لك</span>
          </motion.h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-l from-accent to-accent-2 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -10 }}
              className="group p-6 md:p-8 rounded-3xl glass-card transition-all duration-300 relative overflow-hidden hover:border-accent/40"
            >
              <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${service.color} blur-2xl group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-accent/20 flex items-center justify-center text-accent-2 mb-6 group-hover:scale-110 transition-transform group-hover:glow-purple">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
