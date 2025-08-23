"use client";
import { useState } from "react";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = ({ email, phone }: { email?: string; phone?: string }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-200 to-sky-700 dark:from-emerald-800 dark:to-sky-900 text-gray-900 dark:text-white py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="flex-1 space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base">
               Ready to bring your next project to life? Let&apos;s connect and discuss how I
                can help you with full-stack development, UI design, or building scalable apps.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4 pt-4">
                <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg shadow text-center">
                  <div className="text-3xl">📧</div>
                  <h3 className="font-semibold mt-2">Email Us</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {email}
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg shadow text-center">
                  <div className="text-3xl">📞</div>
                  <h3 className="font-semibold mt-2">Call Us</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{phone}</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="text-white bg-gray-900 dark:bg-white dark:text-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 dark:border-white"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-xl w-full max-w-3xl p-6 relative">
            <button
              className="absolute top-2 right-4 text-gray-600 dark:text-gray-400 text-2xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <form
              action="https://formsubmit.co/krushikbairaboina14@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 p-2 rounded w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 p-2 rounded w-full"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 p-2 rounded w-full"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 p-2 rounded w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};