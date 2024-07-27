// src/Carousel.js
import React, { useState } from 'react';
import { CiImageOn } from "react-icons/ci";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" w-full flex flex-col items-center  border-gray-200 rounded-lg">
      <div className="relative w-72 h-96 overflow-hidden border border-gray-200 rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <div className="w-full h-full flex justify-center items-center bg-gray-300">
            <div className="w-2/3 h-2/3 bg-white flex justify-center items-center rounded-md shadow-md">
            
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center bg-gray-300">
            <div className="w-2/3 h-2/3 bg-white flex justify-center items-center rounded-md shadow-md">
             
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center bg-gray-300">
            <div className="w-2/3 h-2/3 bg-white flex justify-center items-center rounded-md shadow-md">
             
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center bg-gray-300">
        <CiImageOn   className='w-1/2 h-1/2 bg-gray-300'/>
        </div>
      </div>
      <div className="flex mt-4">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1.5 rounded-full cursor-pointer ${
              activeIndex === index ? 'bg-black' : 'bg-gray-400'
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
      <button className="mt-5  w-100 px-4 py-2 bg-gray-300 text-white rounded">
        Static Button
      </button>
    </div>
  );
};

export default Carousel;
