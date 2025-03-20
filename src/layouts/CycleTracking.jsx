import React from "react";
import { useNavigate } from "react-router-dom";

const CycleTracking = ({ icon, title }) => {
  const navigate = useNavigate();

  const handleTrackCycle = () => {
    navigate("/tracker"); // Redirects to the new tracker page
  };

  return (
    <div className="bg-[#f3ad67] group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-md rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <h1 className="font-semibold text-lg">{title}</h1>
      <p>
        Keeping track of periods can be challenging. Our Cycle Tracking feature provides accurate predictions, reminders, and insights, helping you stay informed and prepared at every stage of your cycle.
      </p>

      <button
        className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
        onClick={handleTrackCycle}
      >
        Track Cycle
      </button>
    </div>
  );
};

export default CycleTracking;
