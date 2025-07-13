"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <section className="bg-[#fffaf5] py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center" ref={ref}>
        <div>
          <p className="text-4xl font-bold text-[#c59b60]">
            {startCount && <CountUp end={10} duration={2} />}+
          </p>
          <p className="mt-2 text-gray-700">Years Experience</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#050402]">
            {startCount && <CountUp end={500} duration={2.5} />}+
          </p>
          <p className="mt-2 text-gray-700">Cakes Sold</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#c59b60]">
            {startCount && <CountUp end={20} duration={2} />}+
          </p>
          <p className="mt-2 text-gray-700">Expert Bakers</p>
        </div>
      </div>
    </section>
  );
}
