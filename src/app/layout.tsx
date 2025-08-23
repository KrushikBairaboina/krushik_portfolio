import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Krushik Bairaboina ",
  description: "Portfolio of Krushik Bairaboina — a passionate Full-Stack Developer skilled in building scalable web applications using the MERN stack, Next.js, and modern UI frameworks.",
  keywords: [
    "Krushik Bairaboina",
    "Full Stack Developer",
    "React Developer",
    "MERN Stack Developer",
    "Next.js Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer India",
    "JavaScript",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "TypeScript",
    "Software Engineer Portfolio"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}