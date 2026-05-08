/* ============================================================
   COUNTDOWN TIMER — Romantic Classicism
   Live countdown to the wedding date
   ============================================================ */

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const diff = target - now;

      if (diff <= 0) {
        setIsPast(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (isPast) {
    return (
      <div className="text-center py-6">
        <p
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#C9A96E",
          }}
        >
          Today is the day!
        </p>
      </div>
    );
  }

  const units = [
    { label: "days", value: timeLeft.days },
    { label: "hours", value: pad(timeLeft.hours) },
    { label: "minutes", value: pad(timeLeft.minutes) },
    { label: "seconds", value: pad(timeLeft.seconds) },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 300,
          fontSize: "0.7rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#5C5850",
        }}
      >
        Time remaining
      </p>

      <div className="flex items-center gap-2 sm:gap-4">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex flex-col items-center">
              <div
                className="relative overflow-hidden"
                style={{
                  minWidth: "clamp(52px, 10vw, 72px)",
                  textAlign: "center",
                }}
              >
                <span
                  key={String(unit.value)}
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(2rem, 5vw, 3.2rem)",
                    fontWeight: 300,
                    color: "#2C2A27",
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  {unit.value}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C9A96E",
                  marginTop: "4px",
                }}
              >
                {unit.label}
              </span>
            </div>

            {i < units.length - 1 && (
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "#C9A96E",
                  opacity: 0.5,
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                ·
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
