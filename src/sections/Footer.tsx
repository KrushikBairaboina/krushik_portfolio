"use client";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid } from "@mui/material";

export default function Footer({
  linkedin,
  github,
  instagram,
  youtube,
}: {
  linkedin: string;
  github: string;
  instagram: string;
  youtube: string;
}) {
  // ✅ Define handleScroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6} lg={4}>
            <div className="footer-info flex flex-col items-start">
              <div className="v-foot-logo mb-6">
                <a
                  href="#home"
                  onClick={(e) => handleScroll(e, "#home")}
                  className="flex items-center"
                >
                  <h1 className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-300 uppercase shadow-lg hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                    Krushik Bairaboina
                  </h1>
                </a>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className="flex justify-end space-x-6">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <LinkedInIcon fontSize="large" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors"
              >
                <InstagramIcon fontSize="large" />
              </a>
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
              >
                <YouTubeIcon fontSize="large" />
              </a>
            </div>
          </Grid>
        </Grid>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Krushik Bairaboina. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}