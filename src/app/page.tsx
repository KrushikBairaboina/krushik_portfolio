"use client";

import BlogSection from "@/sections/Blog";
import { ContactSection } from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import HobbiesSection from "@/sections/Hobbies";
import { JourneySection } from "@/sections/Journey";
import SkillsSection from "@/sections/Skills";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="journey">
        <JourneySection/>
      </section>
      <section id="skills">
        <SkillsSection/>
      </section>
    
      <section id="blogs">
        <BlogSection/>
      </section>
      <HobbiesSection />
<section id="contact">
  <ContactSection 
    email={process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? ""} 
    phone={process.env.NEXT_PUBLIC_CONTACT_PHONE ?? ""}
  />
</section>
<Footer 
  linkedin={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ""} 
  github={process.env.NEXT_PUBLIC_GITHUB_URL ?? ""}
  instagram={process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? ""}
  youtube={process.env.NEXT_PUBLIC_YOUTUBE_URL ?? ""}
/>

    </div>
  );
}