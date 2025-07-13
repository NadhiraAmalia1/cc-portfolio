"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export function AnimatedCounter({
  end,
  duration = 2,
  delay = 0,
  label,
}: {
  end: number;
  duration?: number;
  delay?: number;
  label: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setStart(true), 500); // delay agar animasi muncul dulu
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out delay-${delay} ${
        inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
      }`}
    >
      <p className="text-3xl font-bold text-[#0F1C3F]">
        {start && <CountUp end={end} duration={duration} />}
      </p>
      <p className="text-xs mt-1 text-gray-700">{label}</p>
    </div>
  );
}
