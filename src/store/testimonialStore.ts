import { create } from "zustand";
import { Testimonial } from "@/types/testimonial";
import { fetchTestimonials } from "@/data/fetchTestimonials";

interface TestimonialState {
  testimonials: Testimonial[];
  fetchAll: () => Promise<void>;
}

export const useTestimonialStore = create<TestimonialState>((set) => ({
  testimonials: [],
  fetchAll: async () => {
    const data = await fetchTestimonials();
    set({ testimonials: data });
  },
}));