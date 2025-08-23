"use client";
import { Card as MuiCard, CardContent } from "@mui/material";
import {
  FaPlane, FaGamepad, FaPenNib, FaBook, FaMusic, FaFilm, FaHiking, FaBicycle, FaCamera, FaGlobe,
} from "react-icons/fa";
import { SectionHeader } from "@/components/SectionHeader";

const hobbies = [
  {
    icon: <FaPlane size={24} className="text-sky-500 dark:text-sky-300" />,
    title: "Paragliding & Travel",
    color: "text-sky-500 dark:text-sky-300",
  },
  {
    icon: <FaGamepad size={24} className="text-indigo-500 dark:text-indigo-300" />,
    title: "Gaming & Tech Exploration",
    color: "text-indigo-500 dark:text-indigo-300",
  },
  {
    icon: <FaPenNib size={24} className="text-pink-500 dark:text-pink-300" />,
    title: "Blogging & Writing",
    color: "text-pink-500 dark:text-pink-300",
  },
  {
    icon: <FaBook size={24} className="text-yellow-600 dark:text-yellow-400" />,
    title: "Reading",
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: <FaMusic size={24} className="text-purple-500 dark:text-purple-300" />,
    title: "Listening to Music",
    color: "text-purple-500 dark:text-purple-300",
  },
  {
    icon: <FaFilm size={24} className="text-red-500 dark:text-red-300" />,
    title: "Movies & Series",
    color: "text-red-500 dark:text-red-300",
  },
  {
    icon: <FaHiking size={24} className="text-green-500 dark:text-green-300" />,
    title: "Hiking",
    color: "text-green-500 dark:text-green-300",
  },
  {
    icon: <FaBicycle size={24} className="text-blue-500 dark:text-blue-300" />,
    title: "Cycling",
    color: "text-blue-500 dark:text-blue-300",
  },
  {
    icon: <FaCamera size={24} className="text-pink-600 dark:text-pink-400" />,
    title: "Photography",
    color: "text-pink-600 dark:text-pink-400",
  },
  {
    icon: <FaGlobe size={24} className="text-orange-500 dark:text-orange-300" />,
    title: "Exploring Cultures",
    color: "text-orange-500 dark:text-orange-300",
  },
];

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="What I Love"
          title="Hobbies"
          description="Some things I enjoy doing when I'm not coding."
        />

        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-6 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <div key={index} className="flex gap-6">
                {hobbies.map((item, i) => (
                  <MuiCard
                    key={i}
                    className="w-[220px] h-[100px] hover:-rotate-3 transition duration-300 relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg"
                  >
                    <CardContent className="flex flex-row items-center justify-center h-full space-y-4">
                      <div
                        className={`size-16 bg-gray-100 dark:bg-white/10 rounded-lg shadow-lg flex items-center justify-center mt-2 ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900 dark:text-white text-center ml-4">
                        {item.title}
                      </h3>
                    </CardContent>
                  </MuiCard>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
