"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WaitlistForm from "../components/waitlist";

export default function Home() {
  // const words = [
  //   "LONG",
  //   "MORE",
  //   "BETTER",
  //   "STRONGER",
  //   "FURTHER",
  //   "SMILING",
  //   "CRYING",
  //   "LAUGHING",
  //   "SOLO",
  //   "HARD",
  //   "EASY",
  // ];
  const words = [
    "HARD",
    "EASY",
    "LONG",
    "SHORT",
    "FAST",
    "SLOW",
    "TRAILS",
    "HILLS",
    "BEACH",
    "RAIN",
    "SNOW",
    "SUN",
    "WIND",
    "EARLY",
    "LATE",
    "UP",
    "DOWN",
    "YESTERDAY",
    "TODAY",
    "TOMORROW",
    "BUT WE DO",
  ];

  const [index, setIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <main className="h-screen bg-black overflow-hidden">
      {/* INTRO PAGE */}
      {showIntro && (
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-[12vw] font-extrabold text-gray-500 tracking-tight">
            THRYV.
          </h1>
        </motion.div>
      )}

      {/* MAIN PAGE */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="h-screen"
        >
          <section className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-[9vw] font-extrabold text-gray-500 opacity-20 tracking-tight flex items-center whitespace-nowrap">
              {words[index] === "BUT WE DO" ? (
                <span>BUT WE DO</span>
              ) : (
                <>
                  <span className="mr-6">WE DO</span>
                  <span className="inline-block min-w-[9ch] text-center">
                    {words[index]}
                  </span>
                </>
              )}
            </h1>

            <div className="mt-10">
              <WaitlistForm />
            </div>
          </section>
        </motion.div>
      )}
    </main>
  );
}
