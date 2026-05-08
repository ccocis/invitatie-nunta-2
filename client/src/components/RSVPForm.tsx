/* ============================================================
   RSVP FORM — Romantic Classicism
   Elegant form with gold accents and serif typography
   ============================================================ */

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    plusOne: "",
    children: "",
    menu: "",
    allergies: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.attending) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "1rem",
    fontWeight: 400,
    color: "#2C2A27",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #C9A96E",
    borderRadius: 0,
    padding: "8px 0",
    width: "100%",
    outline: "none",
    letterSpacing: "0.03em",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
    fontSize: "0.65rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#5C5850",
    display: "block",
    marginBottom: "6px",
  };

  if (submitted) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            border: "1.5px solid #C9A96E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M5 14l7 7 11-11" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#C9A96E",
            marginBottom: "0.75rem",
          }}
        >
          Thank you!
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.1rem",
            fontStyle: "italic",
            color: "#5C5850",
          }}
        >
          We look forward to celebrating with you.
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1rem",
            color: "#C9A96E",
            marginTop: "0.5rem",
          }}
        >
          — Alex &amp; Emma
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      {/* Name */}
      <div className="mb-8">
        <label style={labelStyle}>Your name</label>
        <input
          type="text"
          placeholder="First Last"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={inputStyle}
          required
        />
      </div>

      {/* Attending */}
      <div className="mb-8">
        <label style={labelStyle}>Will you attend?</label>
        <div className="flex gap-8 mt-2">
          {["Yes", "No"].map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 cursor-pointer"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1rem",
                color: formData.attending === opt.toLowerCase() ? "#C9A96E" : "#2C2A27",
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: `1.5px solid ${formData.attending === opt.toLowerCase() ? "#C9A96E" : "#9E7A3F"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
              >
                {formData.attending === opt.toLowerCase() && (
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C9A96E" }} />
                )}
              </div>
              <input
                type="radio"
                name="attending"
                value={opt.toLowerCase()}
                checked={formData.attending === opt.toLowerCase()}
                onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                className="sr-only"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {formData.attending === "yes" && (
        <>
          {/* Plus one */}
          <div className="mb-8">
            <label style={labelStyle}>Will you bring a plus one?</label>
            <div className="flex gap-8 mt-2">
              {["Yes", "No"].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 cursor-pointer"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1rem",
                    color: formData.plusOne === opt.toLowerCase() ? "#C9A96E" : "#2C2A27",
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: `1.5px solid ${formData.plusOne === opt.toLowerCase() ? "#C9A96E" : "#9E7A3F"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    {formData.plusOne === opt.toLowerCase() && (
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C9A96E" }} />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="plusOne"
                    value={opt.toLowerCase()}
                    checked={formData.plusOne === opt.toLowerCase()}
                    onChange={(e) => setFormData({ ...formData, plusOne: e.target.value })}
                    className="sr-only"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Children */}
          <div className="mb-8">
            <label style={labelStyle}>Will you bring children?</label>
            <div className="flex gap-8 mt-2">
              {["Yes", "No"].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 cursor-pointer"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1rem",
                    color: formData.children === opt.toLowerCase() ? "#C9A96E" : "#2C2A27",
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: `1.5px solid ${formData.children === opt.toLowerCase() ? "#C9A96E" : "#9E7A3F"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    {formData.children === opt.toLowerCase() && (
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C9A96E" }} />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="children"
                    value={opt.toLowerCase()}
                    checked={formData.children === opt.toLowerCase()}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    className="sr-only"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Menu preference */}
          <div className="mb-8">
            <label style={labelStyle}>Menu preference</label>
            <div className="flex gap-8 mt-2">
              {["Standard", "Vegetarian"].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 cursor-pointer"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1rem",
                    color: formData.menu === opt.toLowerCase() ? "#C9A96E" : "#2C2A27",
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: `1.5px solid ${formData.menu === opt.toLowerCase() ? "#C9A96E" : "#9E7A3F"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    {formData.menu === opt.toLowerCase() && (
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C9A96E" }} />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="menu"
                    value={opt.toLowerCase()}
                    checked={formData.menu === opt.toLowerCase()}
                    onChange={(e) => setFormData({ ...formData, menu: e.target.value })}
                    className="sr-only"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Allergies */}
          <div className="mb-8">
            <label style={labelStyle}>Allergies or dietary needs? (optional)</label>
            <input
              type="text"
              placeholder="e.g. lactose, gluten"
              value={formData.allergies}
              onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
              style={inputStyle}
            />
          </div>
        </>
      )}

      {/* Message */}
      <div className="mb-10">
        <label style={labelStyle}>Leave us a message? (optional)</label>
        <textarea
          placeholder="Your warm wishes..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={3}
          style={{
            ...inputStyle,
            borderBottom: "none",
            border: "1px solid #C9A96E",
            padding: "12px",
            resize: "none",
          }}
        />
      </div>

      {/* Submit */}
      <div className="text-center">
        <motion.button
          type="submit"
          disabled={loading || !formData.name || !formData.attending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#FAF8F4",
            background: loading ? "#9E7A3F" : "#C9A96E",
            border: "none",
            padding: "14px 48px",
            cursor: loading ? "wait" : "pointer",
            transition: "background 0.3s",
          }}
        >
          {loading ? "Sending..." : "See you there!"}
        </motion.button>
      </div>
    </form>
  );
}
