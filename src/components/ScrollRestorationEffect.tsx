"use client";

import { useEffect } from "react";
import { useScrollStore } from "@/store/scrollStore";

export default function ScrollRestorationEffect() {
  const lastSection = useScrollStore((state) => state.lastSection);

  useEffect(() => {
    if (!lastSection) return;

    const sectionEl = document.getElementById(lastSection);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [lastSection]);

  return null;
}