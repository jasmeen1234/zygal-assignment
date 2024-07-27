import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const avatars = Array(7).fill(0); // Example data

const LastPage = () => {
  return (
    <div className="overflow-x-scroll scrollbar-hide flex space-x-4 p-2">
      {avatars.map((_, index) => (
        <div key={index} className="flex-none">
          <FaUserCircle size={50} />
        </div>
      ))}
    </div>
  );
};

export default LastPage;
