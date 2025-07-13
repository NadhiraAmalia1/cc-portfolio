import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import PortofolioSection from "@/components/PortofolioSection/portfolioSection";
import SkillSection from "@/components/SkillSection/SkillSection";
import ExperienceSection from "@/components/ExperienceSection/experience-section";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import ContactSection from "@/components/ContactSection/ContactSection";


export const metadata = {
  title: "Nadhira | Fullstack Developer Portfolio",
  description: "Hi, I'm Nadhira – a Fullstack Developer crafting impactful, user-focused web experiences through clean code and creative vision.",
  keywords: [
    "Nadhira",
    "Fullstack Developer",
    "Frontend Developer",
    "Web Developer Portfolio",
    "UI UX Developer",
    "React Developer",
    "Next.js Portfolio"
  ],
  authors: [{ name: "Nadhira" }],
  creator: "Nadhira",
  robots: "index, follow",
  openGraph: {
    title: "Nadhira | Fullstack Developer Portfolio",
    description: "Crafting beautiful and responsive websites with a focus on performance, UX, and clean code.",
    url: "http://localhost:3000/",
    siteName: "Nadhira Portfolio",
    images: [
      {
        url: "/assets/PersonalWeb.png",
        width: 1200,
        height: 630,
        alt: "Nadhira Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};




export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <AboutMeSection />
      <SkillSection />
      <PortofolioSection />
      <ExperienceSection />
      <TestimonialSection/>
      <ContactSection />
    </>
  );
}
