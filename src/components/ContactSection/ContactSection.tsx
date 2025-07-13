"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { SectionHeading } from "../SectionHeading";


const formSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("https://formspree.io/f/mjkobkgb", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      reset();
    }
  };

  return (
    <section
      className="py-20 relative min-h-screen"
      style={{
        backgroundImage: `url('/assets/bggg.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 pl-[72px]">
        <SectionHeading background="Contact" title="Get In Touch" />

        <div className="flex justify-center">
          <div className="w-full max-w-5xl mx-auto px-4">
            <motion.div
              className="bg-[#e9fdfc] rounded-md shadow-2xl p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Contact Info */}
                <div className="lg:col-span-5">
                  <div
                    className="bg-slate-900 rounded-md"
                    style={{
                      backgroundColor: "rgb(4, 4, 32)",
                      marginLeft: "-100px",
                      padding: "25px 24px",
                    }}
                  >
                    <h1 className="text-white text-2xl font-bold mb-8 relative">
                      Contact Me
                      <span
                        className="absolute bottom-0 left-0 h-0.5 w-12"
                        style={{
                          backgroundColor: "#81c2c0",
                          bottom: "-10px",
                          height: "3px",
                          width: "50px",
                        }}
                      />
                    </h1>

                    {/* Address */}
                    <div className="flex items-center mb-5">
                      <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full mr-3">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <a
                        href="https://www.google.com/maps/place/Bandung,+Indonesia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-base font-medium no-underline hover:text-[#81c2c0] transition-colors"
                      >
                        Bandung, Indonesia
                      </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center mb-5">
                      <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full mr-3">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <a
                        href="https://wa.me/6289602769408"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-base font-medium no-underline hover:text-[#81c2c0] transition-colors"
                      >
                        +62 89602769408
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center mb-5">
                      <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full mr-3">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <a
                        href="mailto:amalianadhira@gmail.com"
                        className="text-white text-base font-medium no-underline hover:text-[#81c2c0] transition-colors"
                      >
                        amalianadhira@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-7">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        {...register("name")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-[#a4e3e1] placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0F1C3F]"
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-[#a4e3e1] placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0F1C3F]"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-[#a4e3e1] placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0F1C3F]"
                        placeholder="Let me know how I can help you..."
                      />
                      {errors.message && (
                        <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 text-white font-medium rounded-md transition-colors duration-200 text-sm disabled:opacity-50"
                      style={{ backgroundColor: "#0F1C3F" }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#81c2c0",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>

                    {isSubmitSuccessful && (
                      <p className="text-[#0F1C3F] mt-2 text-sm">Message sent successfully!</p>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;