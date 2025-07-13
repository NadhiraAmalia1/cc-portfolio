"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchTestimonials } from "@/data/fetchTestimonials";
import { Testimonial } from "@/types/testimonial";
import { Pencil } from "lucide-react";
import TestimonialForm from "./testimonial-form";
import { SectionHeading } from "../SectionHeading";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showForm, setShowForm] = useState(false);

  // Ambil data
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTestimonials();
        if (Array.isArray(data)) setTestimonials(data);
      } catch (err) {
        console.error("Failed to load testimonials:", err);
      }
    };
    loadData();
  }, []);

  // Reset index kalau lebih dari panjang array
  useEffect(() => {
    if (index >= testimonials.length) {
      setIndex(0);
    }
  }, [testimonials, index]);

  // Slider + progress bar
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1.6667));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [testimonials]);

  if (testimonials.length === 0) return null; // Jangan render apapun kalau belum ada data

  const testimonial = testimonials[index];
  const previewList = testimonials.filter((_, i) => i !== index).slice(0, 4);

  return (
    <section
      className="relative py-32 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/bgg.jpg')" }}
    >
      <div className="bg-[#fedacf]/70 dark:bg-black/60 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-2xl max-w-6xl mx-auto">
        {/* Judul + Tombol */}
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pl-8">
              <SectionHeading background="Testimonials" title="What They Say About Me" />
            </div>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 text-sm bg-[#cfb358] text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
          >
            <Pencil size={16} />
            Write Testimonial
          </motion.button>
        </div>

        {/* Form */}
        {showForm && <TestimonialForm onClose={() => setShowForm(false)} />}

        {/* Testimonial Display */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Testimonial Utama */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              {testimonial && (
                <motion.div
                  key={testimonial.objectId || testimonial.name + testimonial.quote}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.97 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative rounded-2xl bg-gradient-to-br from-[#bcf3f1] via-[#b3f4f2] to-[#90d3d1] dark:bg-white/5 shadow-xl p-6 md:p-10 overflow-hidden"
                >
                  <div className="text-5xl text-[#cfb358] absolute top-4 left-5 select-none">“</div>

                  <motion.blockquote
                    className="text-gray-800 dark:text-white text-lg md:text-xl italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonial.quote}
                  </motion.blockquote>

                  <div className="mt-8 flex flex-col items-start">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full border-2 border-[#cfb358] shadow-md object-cover"
                    />
                    <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      className="h-full bg-[#cfb358] origin-left"
                      style={{ width: `${progress}%` }}
                      transition={{ ease: "linear" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dot */}
            <div className="mt-6 flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    setProgress(0);
                  }}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    i === index
                      ? "bg-[#cfb358] scale-110"
                      : "bg-gray-400 dark:bg-gray-600 opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Preview Antrian */}
          <div className="hidden md:flex flex-col gap-4">
            {previewList.map((t) => (
              <button
                key={t.objectId || t.name + t.quote}
                onClick={() => {
                  setIndex(testimonials.indexOf(t));
                  setProgress(0);
                }}
                className={`flex items-center gap-4 p-3 rounded-lg transition border hover:shadow-lg text-left ${
                  testimonials.indexOf(t) === index
                    ? "bg-[#b3edeb] border-[#7ec1bf]"
                    : "bg-white/50 dark:bg-white/10 border-gray-300 dark:border-gray-700"
                }`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm text-gray-800 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {t.role}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}