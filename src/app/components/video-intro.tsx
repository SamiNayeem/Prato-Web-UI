"use client";

import React from "react";

export function VideoIntro() {
  return (
    <div className="bg-white py-10 px-8 mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What is <span className="text-orange-500">PRATO AI</span>
        </h2>
      <div className="relative mx-auto mt-20 max-w-5xl overflow-hidden rounded-xl aspect-video">
        {/* Local Video */}
        
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          src="/Sample Video.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25 rounded-xl"></div>
      </div>
    </div>
  );
}

export default VideoIntro;
