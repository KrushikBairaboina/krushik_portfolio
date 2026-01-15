"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import StarIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip pointer-events-auto">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring border-gray-300/40 dark:border-emerald-300/5"></div>
        <div className="size-[820px] hero-ring border-gray-300/40 dark:border-emerald-300/5"></div>
        <div className="size-[1020px] hero-ring border-gray-300/40 dark:border-emerald-300/5"></div>
        <div className="size-[1220px] hero-ring border-gray-300/40 dark:border-emerald-300/5"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-500/20 dark:text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-500/20 dark:text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-500/20 dark:bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-500/20 dark:text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-500 dark:text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-500 dark:text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-500/20 dark:bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-500/20 dark:text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-500/20 dark:bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-500 dark:text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container  pointer-events-auto">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="person peeking from behind laptop"
          />
          {/*           
          <div className="size-25 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg flex items-center justify-center">
            <FaRobot size={100} className="text-gray-900 dark:text-white" />
          </div> */}
          <div className="bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-2">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Full-Stack Developer (MERN)
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide text-gray-900 dark:text-white">
            Krushik Bairaboina
          </h1>
          <p className="mt-4 text-center text-gray-600 dark:text-white/60 md:text-lg">
            Full-Stack Developer with expertise in the MERN stack, delivering
            user-centric web applications. Currently contributing to modern
            fullstack applications at Lego Verse Modules Pvt. Ltd. Skilled in
            building scalable systems with clean architecture and responsive
            UI/UX design.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
         <Link
            href="krushik_resume.pdf"
            download="krushik_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-400 dark:border-white/15 px-6 h-12 rounded-xl text-gray-900 dark:text-white"
          >
            <span className="font-semibold">My Resume</span>
            <ArrowDown className="size-4 text-gray-900 dark:text-white" />
          </Link>

          <Link
            href="#contact"
            scroll={true}
            className="inline-flex items-center gap-2 bg-emerald-500 text-white h-12 px-6 rounded-xl"
          >
            <span>👨‍💻</span>
            <span className="font-semibold">Contact Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
}; 