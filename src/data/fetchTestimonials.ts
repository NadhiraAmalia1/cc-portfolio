import { Testimonial } from "@/types/testimonial";

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const res = await fetch(
    "https://api.backendless.com/58862122-0C6F-4423-BFFB-3FA09803FC82/DA41E2F4-8BB3-4BBA-BA55-4BCCBC81E91B/data/testimonials",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch testimonials from Backendless");
  }

  const rawData = await res.json();

  const data: Testimonial[] = (rawData as unknown[]).map((item) => {
    const obj = item as Partial<Testimonial>;
    return {
      name: obj.name || "Anonymous",
      avatar: obj.avatar || "https://i.pravatar.cc/150?img=31",
      quote: obj.quote || "No quote provided.",
      role: obj.role || "",
    };
  });

  return data;
}