"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/peplum";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.2, type: "spring", stiffness: 200, damping: 18 }}
      className="group fixed bottom-6 right-6 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-rosa text-perola shadow-[0_10px_35px_rgba(221,95,146,0.5)] transition-all duration-300 hover:bg-rosa-vivo hover:shadow-[0_10px_45px_rgba(221,95,146,0.65)] md:bottom-8 md:right-8"
    >
      <MessageCircle size={24} className="transition-transform duration-300 group-hover:scale-110" />
      <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap rounded-full bg-ameixa-3 px-4 py-2 text-xs font-light tracking-wide text-perola opacity-0 ring-1 ring-rosa/30 transition-all duration-300 group-hover:opacity-100 md:block">
        Agende pelo WhatsApp
      </span>
      {/* ping suave */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-rosa/30 [animation-duration:2.6s]" />
    </motion.a>
  );
}
