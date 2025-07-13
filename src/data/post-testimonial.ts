// src/lib/backendless/post-testimonial.ts
export async function postTestimonial(data: {
  name: string;
  avatar: string;
  quote: string;
  role: string;
}) {
  const res = await fetch(
    `https://eu-api.backendless.com/${process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID}/${process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY}/data/testimonials`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Backendless Error:", errorText);
    throw new Error("Failed to submit testimonial");
  }

  return await res.json();
}