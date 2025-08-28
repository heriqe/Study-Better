// src/components/SectionWave.jsx
import React from "react";

const SectionWave = ({ flip = false, color = "#ffffff" }) => (
  <div
    className={`w-full ${flip ? "rotate-180" : ""}`}
    data-aos="fade-up"
  >
    <svg
      viewBox="0 0 1440 80"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-20"
    >
      <path
        d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  </div>
);

export default SectionWave;
