/* ============================================================
   ENVELOPE LANDING — Romantic Classicism
   Warm ivory envelope with gold wax seal, 3D flip animation
   ============================================================ */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeLandingProps {
  onOpen: () => void;
}

export default function EnvelopeLanding({ onOpen }: EnvelopeLandingProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleSealClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #FAF8F4 0%, #F0EBE1 50%, #FAF8F4 100%)" }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Envelope container */}
          <motion.div
            className="relative"
            style={{ perspective: "1000px" }}
            animate={isOpening ? { rotateX: [0, -8, 0], scale: [1, 1.02, 1.15], opacity: [1, 1, 0] } : {}}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            {/* Envelope image */}
            <motion.div
              onClick={handleSealClick}
              className="relative"
              style={{ width: "min(580px, 90vw)" }}
            >
              <img
                src="/envelope-be3DxPcsoMgXsYmazijeWr.webp"
                alt="Wedding invitation envelope"
                className="w-full h-auto drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 20px 60px rgba(44, 42, 39, 0.18))" }}
              />

              {/* Wax seal overlay — clickable */}
              <motion.button
                className="absolute rounded-full"
                style={{
                  left: "50%",
                  top: "52%",
                  transform: "translate(-50%, -50%)",
                  width: "min(100px, 17vw)",
                  height: "min(100px, 17vw)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                animate={isOpening ? { scale: [1, 0.9, 1.2], opacity: [1, 0.8, 0] } : {}}
                transition={isOpening ? { duration: 0.8 } : { type: "spring", stiffness: 300 }}
                aria-label="Open invitation"
              />
            </motion.div>
          </motion.div>

          {/* Text below envelope */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p
              className="text-base tracking-[0.2em] uppercase mb-1"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#5C5850" }}
            >
              Aceasta este invitația ta la nuntă
            </p>
            <motion.p
              className="text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#C9A96E" }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {"Apasă pe plic pentru a deschide"}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
