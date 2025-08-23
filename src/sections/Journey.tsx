import Image from "next/image";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

const technologies = [
  {
    img: image4,
    alt: "Lego Verse Module Pvt. Ltd. Logo",
    title: "Full-Stack Developer",
    tagline: "Lego Verse Module Pvt. Ltd.",
    dates: "Dec 2023 – Present",
    focusArea: "MERN Stack",
    results: [
      { title: "Developed features for AI Avatara chatbot" },
      { title: "Designed UI/UX components" },
      { title: "Optimized codebase for performance" },
    ],
  },
  {
    img: image2,
    alt: "Iolar Technologies Pvt. Ltd. Logo",
    title: "Frontend Developer",
    tagline: "Iolar Technologies Pvt. Ltd.",
    dates: "Dec 2022 – Nov 2023",
    focusArea: "Frontend",
    results: [
      { title: "Refined front-end features with senior devs" },
      { title: "Implemented UI/UX based on user research" },
      { title: "Built reusable React components" },
    ],
  },
  {
    img: image1,
    alt: "Flipkart Clone image",
    title: "Flipkart Clone",
    tagline: "E-Commerce Platform",
    dates: "2023",
    focusArea: "Full-Stack",
    results: [
      { title: "Role-based Buyer, Seller, Delivery portals" },
      { title: "MongoDB for centralized data & real-time sync" },
      { title: "Material UI for clean, responsive UI" },
    ],
  },
  {
    img: image3,
    alt: "Portfolio Website image",
    title: "Portfolio Website",
    tagline: "Showcasing Projects & Blogs",
    dates: "2025",
    focusArea: "Frontend",
    results: [
      { title: "Built with Next.js and Tailwind CSS" },
      { title: "Fully responsive with clean navigation" },
      { title: "Dynamic blog section and contact form" },
    ],
  },
];

export const JourneySection = () => {
  return (
    <section id="journey" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Journey"
          title="Experience & Projects"
          description="Explore my professional experience and key projects."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {technologies.map((tech, index) => (
            <Card
              key={tech.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{tech.title}</span>
                    <span>•</span>
                    <span>{tech.focusArea}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl text-gray-900 dark:text-white">
                    {tech.tagline}
                  </h3>
                  {tech.dates && (
                    <p className="mt-1 text-sm md:text-base text-gray-500 dark:text-white/40">
                      {tech.dates}
                    </p>
                  )}
                  <hr className="border-t-2 border-gray-300/20 dark:border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {tech.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-gray-600 dark:text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 text-emerald-500 dark:text-emerald-300" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src={tech.img}
                    alt={tech.alt}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};