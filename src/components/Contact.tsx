"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || "";
    const business = (form.elements.namedItem("business") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    const text = `مرحباً محمد محمود 👋\nاسمي: ${name}\nرقمي: ${phone}\nنوع البيزنس: ${business}\nرسالتي: ${message}`;
    const whatsappUrl = `https://wa.me/201126978725?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-right"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8">
              هل أنت مستعد{" "}
              <span className="gradient-text">للانطلاق؟</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/60 mb-10 md:mb-12">
              تواصل معي الآن وسأقوم بدراسة حالتك والرد عليك في أقرب وقت ممكن.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-end">
                <div className="text-right">
                  <div className="text-[10px] md:text-sm text-foreground/40 font-bold uppercase tracking-wider">رقم الواتساب</div>
                  <div className="text-lg md:text-xl font-bold">01126978725</div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl glass-card flex items-center justify-center text-accent-2">
                  <Phone size={18} className="md:w-5 md:h-5" />
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-end">
                <div className="text-right">
                  <div className="text-[10px] md:text-sm text-foreground/40 font-bold uppercase tracking-wider">البريد الإلكتروني</div>
                  <div className="text-lg md:text-xl font-bold">mm5484300@gmail.com</div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl glass-card flex items-center justify-center text-accent-2">
                  <Mail size={18} className="md:w-5 md:h-5" />
                </div>
              </div>

              <a
                href="https://wa.me/201126978725"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 justify-center lg:justify-end group"
              >
                <div className="text-right">
                  <div className="text-[10px] md:text-sm text-foreground/40 font-bold uppercase tracking-wider">تواصل مباشر</div>
                  <div className="text-lg md:text-xl font-bold text-[#25D366] group-hover:underline transition-all">واتساب الآن</div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                  <MessageCircle size={18} className="md:w-5 md:h-5" />
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 rounded-3xl space-y-4 md:space-y-6 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 blur-3xl rounded-full" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[10px] md:text-sm font-bold text-foreground/60 block pr-2 text-right">الاسم بالكامل</label>
                  <input name="name" type="text" className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-accent/20 px-4 md:px-6 text-right focus:border-accent outline-none transition-all text-sm md:text-base" placeholder="محمد..." />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[10px] md:text-sm font-bold text-foreground/60 block pr-2 text-right">رقم الواتساب</label>
                  <input name="phone" type="tel" className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-accent/20 px-4 md:px-6 text-right focus:border-accent outline-none transition-all text-sm md:text-base" placeholder="010..." />
                </div>
              </div>
              
              <div className="space-y-1 md:space-y-2">
                <label className="text-[10px] md:text-sm font-bold text-foreground/60 block pr-2 text-right">نوع البيزنس</label>
                <input name="business" type="text" className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-accent/20 px-4 md:px-6 text-right focus:border-accent outline-none transition-all text-sm md:text-base" placeholder="مثل: متجر ملابس" />
              </div>

              <div className="space-y-1 md:space-y-2">
                <label className="text-[10px] md:text-sm font-bold text-foreground/60 block pr-2 text-right">رسالتك</label>
                <textarea name="message" className="w-full h-24 md:h-32 rounded-xl md:rounded-2xl bg-white/5 border border-accent/20 p-4 md:p-6 text-right focus:border-accent outline-none transition-all resize-none text-sm md:text-base" placeholder="اكتب تفاصيل مشروعك هنا..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl bg-gradient-to-l from-accent to-accent-2 text-white font-black text-base md:text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all glow-purple">
                <Send size={18} className="rotate-180 md:w-5 md:h-5" />
                إرسال عبر واتساب
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
