"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const features = [
    {
      img: "/onboarding_screen3-portrait.png",
      text: "Healthy Eating Made Simple and Delicious Discover a wide range of recipes tailored to your health goals. This feature offers balanced meals designed to nourish your body and satisfy your taste buds, making healthy eating an enjoyable experience.",
    },
    {
      img: "/onboarding_screen2-portrait.png",
      text: "Personalized Nutrition Insights with Calorie Tracking Track your meals with precision and stay on top of your health goals. This feature helps you set personalized nutrition targets and provides real-time insights into your calorie intake and overall progress.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#eac38e] to-[#FF914D] text-white py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        About <span className="text-orange-500">Prato AI</span>
      </h2>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <Image
            src="/healthy-life.png"
            alt="Mobile App"
            height={200}
            width={200}
            className="w-64 h-auto md:w-64 lg:w-80"
          />
        </div>
        <div className="text-lg text-center md:text-left max-w-2xl mx-auto md:mr-8 mb-8 md:mb-0">
          <p className="text-white">
            At Prato, we harness the power of advanced technology to help you live a healthier, more balanced life.
            Our personalized diet plans, nutrition tracking tools, and expert guidance are designed to empower you to make informed choices and achieve your wellness goals.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/home_screen1-portrait.png"
            alt="Mobile App"
            className="w-48 h-auto md:w-64 lg:w-80"
          />
        </div>
      </div>

      {/* Learn More / Show Less Button */}
      <div className="mt-8 flex justify-center">
        {!isExpanded && (
          <button
            onClick={toggleExpand}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-all"
          >
            Learn More
          </button>
        )}
      </div>

      {/* Expanded Content */}
      <motion.div
        className="overflow-hidden mt-8 text-center text-lg text-white max-w-3xl mx-auto"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <p>
          Our platform is more than just a diet planner—it's your personal nutrition coach. With intuitive tracking,
          real-time insights, and a dynamic approach to wellness, you'll have the tools to achieve your goals with
          confidence.
        </p>

        {/* Image-Text Pairs with Alternating Layout */}
        <div className="mt-6 flex flex-col gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              <img
                src={feature.img}
                alt={`Feature ${index + 1}`}
                className="w-full h-auto md:w-1/2 lg:w-1/3"
              />
              <p className="mt-4 md:mt-0 md:mx-4 text-white text-center md:text-left">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Show Less Button */}
      {isExpanded && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={toggleExpand}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-all"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}
