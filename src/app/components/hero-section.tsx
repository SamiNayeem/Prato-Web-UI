"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

const carouselData = [
  {
    image: "/bg1.jpg",
    heading: "Your Perfect Lifestyle Guide",
    highlightedWord: "Lifestyle",
    color: "text-orange-500",
    subtext: "Experience seamless AI-powered tools to transform your business.",
  },
  {
    image: "/bg2.jpg",
    heading: "Revolutionize Your Workflow",
    highlightedWord: "Workflow",
    color: "text-orange-500",
    subtext: "Empower your team with innovative solutions.",
  },
  {
    image: "/bg3.jpg",
    heading: "Transform Your Health with Personalized Nutrition",
    highlightedWord: "Personalized",
    color: "text-orange-500",
    subtext: "Discover tailored diet plans, track your nutrition, and make healthier choices every day with our easy-to-use platform. Achieve your wellness goals and feel your best.",
  },
  {
    image: "/bg4.jpg",
    heading: "Elevate Your Life with a Balanced Diet",
    highlightedWord: "Life",
    color: "text-orange-500",
    subtext: "Unlock the power of proper nutrition. From meal plans to detailed nutrient tracking, we help you fuel your body and mind for optimal performance.",
  },
  {
    image: "/bg.jpg",
    heading: "Nourish Your Body. Transform Your Life.",
    highlightedWord: "Transform",
    color: "text-orange-500",
    subtext: "Create a sustainable, healthy lifestyle with expert-backed diet plans and real-time nutrition tracking. Start your journey toward better health today!",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSlide = carouselData[currentIndex];
  const splitHeading = currentSlide.heading.split(" ").map((word, index) => {
    const isHighlighted = word === currentSlide.highlightedWord;
    return (
      <span
        key={index}
        className={isHighlighted ? currentSlide.color : undefined}
      >
        {word}
      </span>
    );
  });

  return (
    <div
      className="relative"
      style={{ height: "calc(100vh - 4rem)" }} // Adjust navbar height
    >
      {/* Background Image with transition */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
        }}
        key={currentIndex} // Trigger re-animation on change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center flex flex-col justify-center items-center h-full text-white px-4">
        <motion.h1
          className="text-5xl font-bold space-x-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {splitHeading}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {currentSlide.subtext}
        </motion.p>
        <div className="mt-8 flex justify-center items-center space-x-4">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/apple-store.png"
              alt="Download on the App Store"
              height={70}
              width={200}
            />
          </a>
          <a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/play-store.png"
              alt="Get it on Google Play"
              height={70}
              width={200}
            />
          </a>
        </div>
      </div>

      {/* Carousel Dots with animation */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {carouselData.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400 }}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  );
}
