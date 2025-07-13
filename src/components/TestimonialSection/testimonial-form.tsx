"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";


export default function TestimonialForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    quote: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.quote.trim()) return;

    setLoading(true);
    setStatus("idle");

    const payload = {
      name: formData.name || "Anonymous",
      avatar: formData.avatar || "https://i.pravatar.cc/150?img=12",
      quote: formData.quote.trim(),
      role: formData.role || "",
    };

    try {
      const res = await fetch(
        "https://api.backendless.com/58862122-0C6F-4423-BFFB-3FA09803FC82/DA41E2F4-8BB3-4BBA-BA55-4BCCBC81E91B/data/testimonials",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Gagal kirim testimonial");

      setStatus("success");
      setFormData({ name: "", avatar: "", quote: "", role: "" });
      setTimeout(onClose, 2000); // Tutup otomatis setelah submit sukses
    } catch (error) {
        console.log(error)
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl space-y-5 border border-gray-200 dark:border-white/10 max-w-2xl mx-auto mt-6"
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <Sparkles className="text-yellow-500" /> Leave a Testimonial
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name (optional)"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="role"
            placeholder="Your role (optional)"
            value={formData.role}
            onChange={handleChange}
            className="input"
          />
          <input
            type="url"
            name="avatar"
            placeholder="Avatar URL (optional)"
            value={formData.avatar}
            onChange={handleChange}
            className="input col-span-full"
          />
        </div>

        <textarea
          name="quote"
          required
          placeholder="Write your testimonial..."
          rows={4}
          value={formData.quote}
          onChange={handleChange}
          className="input w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {loading ? "Submitting..." : "Submit Testimonial"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-sm mt-2">
            🎉 Thank you! Your testimonial was submitted.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm mt-2">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}