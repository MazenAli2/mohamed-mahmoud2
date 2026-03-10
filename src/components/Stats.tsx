"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "ميزانيات مدارة",
    value: "2M+",
    unit: "جنيه",
    icon: <DollarSign className="text-accent-2" />,
  },
  {
    id: 2,
    label: "متوسط الـ ROAS",
    value: "6x",
    unit: "عائد",
    icon: <TrendingUp className="text-accent-2" />,
  },
  {
    id: 3,
    label: "عملاء سعداء",
    value: "50+",
    unit: "عميل",
    icon: <Users className="text-accent-2" />,
  },
  {
    id: 4,
    label: "منصات إعلانية",
    value: "4+",
    unit: "منصة",
    icon: <Target className="text-accent-2" />,
  },
];

export default function Stats() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-3xl relative group hover:border-accent/40 transition-all duration-500"
            >
              <div className="absolute top-4 left-4 opacity-30 md:opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-black gradient-text mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-sm font-medium text-foreground/60 uppercase tracking-widest mb-1">
                  {stat.unit}
                </div>
                <div className="text-base md:text-lg font-bold text-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
