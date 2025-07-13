"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppLoaderStore } from "@/store/appLoaderStore";

type Star = {
  x: number;
  y: number;
  scale: number;
  delay: number;
  duration: number;
  opacity: number;
};

export function LoaderScreen() {
  const [show, setShow] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [starPositions, setStarPositions] = useState<Star[]>([]);
  const setAppLoaded = useAppLoaderStore((state) => state.setAppLoaded);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setShow(false);
      setAppLoaded(true);
    }, 2500);

    if (typeof window !== "undefined") {
      const stars: Star[] = Array.from({ length: 30 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 1.5 + 0.5,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
      }));
      setStarPositions(stars);
    }

    return () => clearTimeout(timer);
  }, []);

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#f3e4cf] overflow-hidden flex flex-col items-center justify-center"
        >
          {/* BINTANG */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {starPositions.map((star, i) => (
              <motion.span
                key={i}
                className="absolute w-[4px] h-[4px] bg-white rounded-full"
                style={{ top: star.y, left: star.x, opacity: star.opacity }}
                initial={{ scale: star.scale }}
                animate={{ y: star.y - 30 }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: star.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* WELCOME */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [1.2, 0.9, 1], opacity: 1 }}
            transition={{ duration: 1.4, repeat: Infinity, repeatType: "mirror" }}
            className="z-10 text-8xl font-bold font-[Magnolia] text-[#0F1C3F]"
          >
            Welcome
          </motion.div>

          {/* LOADING */}
          <motion.p
            className="z-10 text-md mt-4 text-[#0F1C3F]/80 font-[Huninn]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading your experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}