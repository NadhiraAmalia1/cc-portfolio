"use client";

import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { AnimatedFadeUpZoom } from "../AnimatedFadeOutZoom";
import { AnimatedCounter } from "./AnimatedCounter";

const counterItems = [
  { end: 3, label: "Years of Coding" },
  { end: 20, label: "Projects" },
  { end: 5, label: "Clients" },
];

export default function AboutMeSection() {
  return (
    <section id="about" className="relative w-full">
      <div className="relative bg-cover bg-center bg-[#90d3d1] pt-24 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedFadeUpZoom delay={100}>
            <SectionHeading background="About Me" title="Get To Know More" />
          </AnimatedFadeUpZoom>

          <div className="relative flex flex-col lg:flex-row items-start justify-center gap-0 lg:gap-20">
            {/* Image carousel - from right */}
            <motion.div
              className="w-full max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                showStatus={false}
                interval={4000}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <div><img src="/assets/meow.jpg" alt="Photo 1" /></div>
                <div><img src="/assets/genre2.jpg" alt="Photo 2" /></div>
                <div><img src="/assets/meow.jpg" alt="Photo 3" /></div>
              </Carousel>
            </motion.div>

            {/* White info box - from left */}
            <motion.div
              className="relative z-0 w-full max-w-2xl mt-10 lg:mt-20 lg:-ml-24"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white shadow-lg border-2 border-[#d6aa6d] rounded-tr-2xl rounded-bl-2xl p-6 md:p-8 w-full">
                {/* <div className="text-lg md:text-xl font-bold text-gray-800">About Me</div> */}
                <h2 className="mt-2 text-[#d6aa6d] text-2xl md:text-3xl font-[magnolia]">
                  Hello, my name is Nadhira Amalia!
                </h2>
                <div className="mt-4 md:mt-6 text-sm md:text-base leading-relaxed text-gray-700 space-y-4">
                  <p>
                    I am a Fullstack Developer who have a solid foundation in web development, with core skills 
                    in JavaScript, React, and Node.js.<br></br> 

                    Driven by a curiosity about how websites function, I found my passion in developing websites. 
                    Through several years of studying IT at University and completing short courses, I’ve developed skills 
                    to develop websites that are both functional and engaging. <br />

                    I pay attention to detail and manage to work through problems and learn from the challenges with 
                    patience and persistence. I’m also try to stay on schedule and communicate clearly to support effective 
                    teamwork.
                  </p>
                </div>
                <div className="mt-6 flex justify-center gap-6 text-3xl md:text-4xl text-[#0F1C3F]">
                  <SiReact title="React" className="hover:scale-110 transition-transform" />
                  <SiTailwindcss title="TailwindCSS" className="hover:scale-110 transition-transform" />
                  <SiTypescript title="TypeScript" className="hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Counter - fade up per item */}
              <div className="grid grid-cols-3 gap-4 text-center mt-6 overflow-hidden">
                {counterItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="min-h-[80px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.3 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter
                      end={item.end}
                      duration={2}
                      delay={0}
                      label={item.label}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
