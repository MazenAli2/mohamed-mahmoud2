"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "ما هي المنصات الإعلانية التي تتخصص فيها؟",
    a: "أتخصص في إدارة الحملات على فيسبوك، إنستجرام، تيك توك وجوجل. أختار المنصة المناسبة بناءً على نوع منتجك وجمهورك المستهدف لضمان أعلى عائد ممكن.",
  },
  {
    q: "هل تقدم تقارير عن أداء الحملات؟",
    a: "نعم، أقدم تقارير أسبوعية شاملة (Weekly Report) توضح أداء الحملات بالأرقام: الـ ROAS، تكلفة الاكتساب، عدد المبيعات، وتوصيات التحسين للأسبوع القادم.",
  },
  {
    q: "هل تساعد في بناء متاجر Shopify و Easy Order؟",
    a: "بالتأكيد، أمتلك خبرة في تطوير وإعداد متاجر Shopify وEasy Order وربطها بمنظومة الإعلانات لضمان تجربة شراء سلسة وأعلى معدل تحويل.",
  },
  {
    q: "ما هو الحد الأدنى للميزانية الإعلانية؟",
    a: "يعتمد على النشاط ونوع المنصة، لكن بشكل عام يُنصح بالبدء بـ 5,000 ج على الأقل شهرياً لضمان نتائج قابلة للقياس والتحسين.",
  },
  {
    q: "ما الفرق بين الـ Scaling وإطلاق حملة جديدة؟",
    a: "الـ Scaling هو تكبير حملة ناجحة بشكل مدروس للحفاظ على نفس الـ ROAS أو تحسينه. أما الحملة الجديدة فهي مرحلة اختبار. أتخصص في كليهما لتحقيق نمو مستدام.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            الأسئلة{" "}
            <span className="gradient-text underline decoration-8 underline-offset-8">الشائعة</span>
          </h2>
          <p className="text-sm md:text-lg text-foreground/40">كل ما تريد معرفته عن خدماتي وطريقة عملي.</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl md:rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 md:px-8 md:py-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors gap-4"
              >
                <div className="text-base md:text-xl font-bold">{faq.q}</div>
                <div className={`p-1.5 md:p-2 rounded-full transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "bg-accent text-white rotate-180" : "bg-white/5 text-accent-2"}`}>
                  {openIndex === index ? <Minus size={16} className="md:w-5 md:h-5" /> : <Plus size={16} className="md:w-5 md:h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-foreground/70 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
