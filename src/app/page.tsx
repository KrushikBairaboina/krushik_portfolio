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
        <JourneySection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>

      <section id="blogs">
        <BlogSection />
      </section>

      <HobbiesSection />

      <section id="contact">
        <ContactSection 
          email="krushikbairaboina14@gmail.com"
          phone="+916301299809"
        />
      </section>

      <Footer 
        linkedin="https://www.linkedin.com/in/krushik-bairaboina-43275225a/"
        github="https://github.com/KrushikBairaboina"
        instagram="https://www.instagram.com/krushi___14/"
        youtube="https://www.youtube.com/@krushikbairaboina7191"
      />
    </div>
  );
}