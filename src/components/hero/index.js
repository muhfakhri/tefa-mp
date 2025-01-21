// filepath: /c:/Users/nurfa/OneDrive/Documents/A_CODING/nextjs/tefa-mp/src/components/Hero.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "bg-hero-pattern-1",
  "bg-hero-pattern-2"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 ${images[currentImage]} bg-cover bg-center bg-no-repeat`}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-l text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-extrabold text-white sm:text-5xl"
          >
            Selamat Datang
            <strong className="block font-extrabold text-purple-600">Menejemen Perkantoran.</strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 max-w-lg text-white sm:text-xl/relaxed"
          >
            Laman resmi Menejemen Perkantoran SMK N 1 BANTUL. Kami menyediakan informasi & layanan terkait
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <a
              href="#layanan"
              className="block w-full rounded bg-purple-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-800 focus:outline-none focus:ring active:bg-purple-600 sm:w-auto"
            >
              Layanan Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;