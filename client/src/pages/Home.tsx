/* ============================================================
   HOME PAGE — Wedding Invitation
   Design: Romantic Classicism
   - Warm ivory parchment background (#FAF8F4)
   - Antique gold accents (#C9A96E)
   - Great Vibes script for couple names
   - Cormorant Garamond serif for body
   - Montserrat 300 for small-caps labels
   - Envelope landing → invitation card reveal
   ============================================================ */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopeLanding from "@/components/EnvelopeLanding";
import Countdown from "@/components/Countdown";
import RSVPForm from "@/components/RSVPForm";

// Wedding date: June 14, 2026
const WEDDING_DATE = new Date("2026-10-17T15:00:00");

const FLORAL_TL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663640176366/jRyVch4PWwnb6ouH3Moick/floral-corner-tl-Yu7vKkGD2fgL7eM6xti9nQ.webp";
const FLORAL_BR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663640176366/jRyVch4PWwnb6ouH3Moick/floral-corner-br-cZCjTtZcNxvk8tnzrcurd5.webp";
const COUPLE_IMG = "/poza-nunta-decupata.jpeg";

/* ---- Shared style helpers ---- */
const scriptStyle = (size = "clamp(2.8rem, 7vw, 5rem)"): React.CSSProperties => ({
  fontFamily: "'Great Vibes', cursive",
  fontSize: size,
  color: "#C9A96E",
  lineHeight: 1.1,
});

const serifStyle = (size = "1rem", weight = 400): React.CSSProperties => ({
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: size,
  fontWeight: weight,
  color: "#2C2A27",
});

const labelStyle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 300,
  fontSize: "0.65rem",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "#5C5850",
};

const GoldDivider = ({ text }: { text?: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2rem 0" }}>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C9A96E, transparent)" }} />
    {text && (
      <span style={{ ...labelStyle, color: "#C9A96E", fontSize: "0.7rem" }}>{text}</span>
    )}
    {!text && (
      <span style={{ color: "#C9A96E", fontSize: "1.2rem", lineHeight: 1 }}>✦</span>
    )}
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C9A96E, transparent)" }} />
  </div>
);

const MapButton = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: "0.6rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#C9A96E",
      border: "1px solid #C9A96E",
      padding: "8px 20px",
      textDecoration: "none",
      transition: "all 0.2s",
      marginTop: "1rem",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.background = "#C9A96E";
      (e.currentTarget as HTMLElement).style.color = "#FAF8F4";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.background = "transparent";
      (e.currentTarget as HTMLElement).style.color = "#C9A96E";
    }}
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
    {label}
  </a>
);

/* ---- Section reveal wrapper ---- */
function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = (el: HTMLDivElement | null) => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
  };

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function Home() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  useEffect(() => {
    if (envelopeOpened) {
      setTimeout(() => setShowInvitation(true), 200);
    }
  }, [envelopeOpened]);

  return (
    <div style={{ background: "#FAF8F4", minHeight: "100vh" }}>
      {/* ---- ENVELOPE LANDING ---- */}
      <AnimatePresence>
        {!envelopeOpened && (
          <EnvelopeLanding onOpen={() => setEnvelopeOpened(true)} />
        )}
      </AnimatePresence>

      {/* ---- INVITATION CONTENT ---- */}
      <AnimatePresence>
        {showInvitation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* ============================================================
                SECTION 1: HERO — Couple names, photo, parents, countdown
                ============================================================ */}
            <section
              style={{
                position: "relative",
                background: "#FAF8F4",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "4rem 1rem",
              }}
            >
              {/* Floral corners */}
              <img
                src={FLORAL_TL}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "clamp(200px, 35vw, 420px)",
                  pointerEvents: "none",
                  opacity: 0.85,
                }}
              />
              <img
                src={FLORAL_BR}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "clamp(200px, 35vw, 420px)",
                  pointerEvents: "none",
                  opacity: 0.85,
                }}
              />

              {/* Inner border frame */}
              <div
                style={{
                  position: "absolute",
                  inset: "clamp(16px, 3vw, 32px)",
                  border: "1px solid rgba(201, 169, 110, 0.3)",
                  pointerEvents: "none",
                }}
              />

              {/* Content */}
              <div style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: 680 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p style={{ ...labelStyle, marginBottom: "1rem", maxWidth: "500px", margin: "0 auto 1rem" }}>
                    Pentru că cele mai frumoase momente se petrec alături de oameni dragi,
                  </p>
                  <p style={{ ...serifStyle("1.1rem", 300), fontStyle: "italic", marginBottom: "0.5rem" }}>
                    Noi,
                  </p>
                </motion.div>

                <motion.h1
                  style={scriptStyle("clamp(3.5rem, 10vw, 6.5rem)")}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  Cătălin &amp; Dana
                </motion.h1>

                {/* Couple photo */}
                <motion.div
                  style={{
                    margin: "2rem auto",
                    width: "75%",
                    maxWidth: "250px",
                    aspectRatio: "0.75",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <img
                    src={COUPLE_IMG}
                    alt="Catalin and Dana"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #C9A96E",
                      boxShadow: "0 4px 24px rgba(201, 169, 110, 0.25)",
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <p style={{ ...labelStyle, marginBottom: "1.2rem" }}>
                    Cu binecuvântarea părinților,
                  </p>

                  <div style={{ display: "flex", justifyContent: "center", gap: "clamp(1.5rem, 5vw, 4rem)", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <p style={serifStyle("1rem", 400)}>GHEORGHE &amp; VIORELA COCIȘ</p>
                    </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <div style={{ padding: "4px 4px", border: "1px solid grey" }}>
                          <p style={serifStyle("1rem", 400)}>VASILE TOTHĂZAN</p>
                        </div>
                        <p style={serifStyle("1rem", 400)}>&amp; MARIA NEAGU</p>
                      </div>
                  </div>

                  <p style={{ ...labelStyle, marginBottom: "1rem" }}>Și a nașilor,</p>

                  <div style={{ display: "flex", justifyContent: "center", gap: "clamp(1.5rem, 5vw, 4rem)", flexWrap: "wrap", marginBottom: "2rem" }}>
                    <p style={serifStyle("1rem", 400)}>GELU &amp; IULIA BUGNARU</p>
                    <p style={serifStyle("1rem", 400)}>CĂLIN &amp; ALINA TURCU</p>
                  </div>

                  <p style={{ ...serifStyle("1.1rem", 300), fontStyle: "italic", maxWidth: 480, margin: "0 auto 1.5rem" }}>
                    Vă invităm să petrecem împreună, să dansăm, să râdem și să creăm amintiri de neuitat.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <p style={scriptStyle("clamp(2.5rem, 7vw, 4.5rem)")}>17 Octombrie 2026</p>

                  <GoldDivider />

                  <Countdown targetDate={WEDDING_DATE} />
                </motion.div>
              </div>
            </section>

            {/* ============================================================
                SECTION 2: EVENT DETAILS
                ============================================================ */}
            <section
              style={{
                background: "#F5F0E8",
                padding: "5rem 1.5rem",
              }}
            >
              <div style={{ maxWidth: 800, margin: "0 auto" }}>
                <RevealSection>
                  <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <p style={labelStyle}>Locația evenimentului</p>
                    <GoldDivider text="✦" />
                  </div>
                </RevealSection>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                  {/* Ceremony */}
                  <RevealSection delay={0.1}>
                    <div
                      style={{
                        background: "#FAF8F4",
                        border: "1px solid rgba(201, 169, 110, 0.3)",
                        padding: "2.5rem",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          right: 12,
                          bottom: 12,
                          border: "1px solid rgba(201, 169, 110, 0.15)",
                          pointerEvents: "none",
                        }}
                      />

                      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "0.5rem" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" style={{ marginTop: 3, flexShrink: 0 }}>
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                        <div>
                          <p style={serifStyle("1rem", 500)}>Radisson Blu Hotel</p>
                          <p style={{ ...serifStyle("0.9rem", 300), color: "#5C5850" }}>Cluj-Napoca</p>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        <p style={serifStyle("1rem", 500)}>15:00</p>
                      </div>

                      <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps?q=Radisson+Blu+Hotel+Cluj-Napoca&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                      />
                    </div>
                  </RevealSection>

                </div>
              </div>
            </section>

            {/* ============================================================
                SECTION 3: RSVP
                ============================================================ */}
            <section
              style={{
                background: "#F5F0E8",
                padding: "5rem 1.5rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle floral watermark */}
              <img
                src={FLORAL_TL}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "clamp(150px, 25vw, 300px)",
                  opacity: 0.12,
                  transform: "scaleX(-1)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <RevealSection>
                  <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <p style={{ ...labelStyle, marginBottom: "0.5rem" }}>
                      Vă rugăm să confirmați prezența până la 3 Octombrie 2026
                    </p>
                    <GoldDivider />
                  </div>
                </RevealSection>

                <RevealSection delay={0.2}>
                  <RSVPForm />
                </RevealSection>
              </div>
            </section>

            {/* ============================================================
                FOOTER
                ============================================================ */}
            <footer
              style={{
                background: "#FAF8F4",
                padding: "3rem 1.5rem",
                textAlign: "center",
                borderTop: "1px solid rgba(201, 169, 110, 0.2)",
              }}
            >
              <GoldDivider />
              <p style={{ ...labelStyle, marginBottom: "0.75rem" }}>VĂ MULȚUMIM!</p>
              <p style={scriptStyle("clamp(2rem, 5vw, 3rem)")}>Cătălin &amp; Dana</p>
              <p style={{ ...labelStyle, marginTop: "0.75rem" }}>17 Octombrie 2026</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
