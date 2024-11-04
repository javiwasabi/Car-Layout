// src/components/BackgroundBubbles.jsx
import React from 'react';

const BackgroundBubbles = () => {
  return (
    <>
      {/* Círculos superiores */}
      <div class="absolute top-0 -left-4 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 "></div>
      <div class="absolute top-0 -right-4 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
      <div className="absolute top-[20%] left-[20%] w-20 h-20 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-76 lg:h-76 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[10%] right-[30%] w-20 h-20 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-76 lg:h-66 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-2000"></div>
      {/* Círculos inferiores */}
      <div className="absolute bottom-[10%] left-6 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
      <div className="absolute bottom-[1%] left-0 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
      <div className="absolute bottom-[12%] left-[0%] w-20 h-20 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-76 lg:h-66 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[9%] left-[45%] w-20 h-20 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-76 lg:h-66 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[1%] right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
      <div className="absolute bottom-[10%] right-0 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
    
    </>
  );
};

export default BackgroundBubbles;
