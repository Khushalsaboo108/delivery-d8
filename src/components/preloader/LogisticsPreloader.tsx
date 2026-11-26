"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import TruckIllustration from "./TruckIllustration";
import LocationPin from "./LocationPin";

const SESSION_KEY = "sbe-intro-shown";
const DRIVE_DURATION = 2.2;

type Phase = "idle" | "driving" | "paused" | "revealing" | "done";

function LoadingStatus({ isDriving }: { isDriving: boolean }) {
  const count = useMotionValue(1);
  const label = useTransform(count, (value) => `${Math.round(value)}%`);
  const width = useTransform(count, (value) => `${value}%`);

  useEffect(() => {
    if (!isDriving) return;
    const controls = animate(count, 100, {
      duration: DRIVE_DURATION,
      ease: "easeOut",
    });
    return controls.stop;
  }, [isDriving, count]);

  return (
    <div className="preloader-status">
      <div className="preloader-counter">
        <motion.span>{label}</motion.span>
      </div>
      <div className="preloader-progress-track">
        <motion.div className="preloader-progress-fill" style={{ width }} />
      </div>
    </div>
  );
}

export default function LogisticsPreloader() {
  const [phase, setPhase] = useState<Phase>("idle");
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const alreadyShown = window.sessionStorage.getItem(SESSION_KEY) === "1";

    if (prefersReducedMotion || alreadyShown) {
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";
    setPhase("driving");

    return () => {
      document.body.style.overflow = "";
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, []);

  if (phase === "idle" || phase === "done") return null;

  const isDriving = phase === "driving";
  const isRevealing = phase === "revealing";

  const handleTruckArrived = () => {
    pauseTimer.current = setTimeout(() => {
      setPhase("revealing");
    }, 200);
  };

  const handleRevealed = () => {
    window.sessionStorage.setItem(SESSION_KEY, "1");
    document.body.style.overflow = "";
    setPhase("done");
  };

  return (
    <div
      className="preloader-overlay"
      role="presentation"
      aria-hidden="true"
    >
      <div className="preloader-stage">
        <motion.div
          className="preloader-scene"
          animate={{ opacity: isRevealing ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="preloader-ambient-glow" aria-hidden="true" />

          <LocationPin className="preloader-pin-position" />

          <motion.div
            className="preloader-truck-track"
            initial={{ left: "-26%" }}
            animate={{ left: ["-26%", "62%", "69%"] }}
            transition={{
              duration: DRIVE_DURATION,
              times: [0, 0.82, 1],
              ease: ["circOut", "easeOut"],
            }}
            onAnimationComplete={handleTruckArrived}
          >
            <motion.div
              className="preloader-truck-body"
              animate={
                isDriving
                  ? { y: [0, -2.5, 0, -1.5, 0], rotate: [0, -0.5, 0, 0.4, 0] }
                  : { y: 0, rotate: 0 }
              }
              transition={
                isDriving
                  ? { duration: 0.55, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.25, ease: "easeOut" }
              }
            >
              <TruckIllustration isDriving={isDriving} className="preloader-truck-svg" />
            </motion.div>
          </motion.div>

          <LoadingStatus isDriving={isDriving} />
        </motion.div>

        <motion.div
          className="preloader-panel preloader-panel-top"
          initial={{ y: 0 }}
          animate={{ y: isRevealing ? "-100%" : 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          onAnimationComplete={() => {
            if (isRevealing) handleRevealed();
          }}
        />
        <motion.div
          className="preloader-panel preloader-panel-bottom"
          initial={{ y: 0 }}
          animate={{ y: isRevealing ? "100%" : 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        />
      </div>
    </div>
  );
}
