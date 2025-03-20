import React,{useState} from "react";
import image2 from "../assets/img/image2.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 text-gray-900 bg-[#FFF5E1] pb-20 overflow-auto">
      <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life
        </h1>
        <p className="text-lg max-w-2xl mx-auto lg:mx-0">
          FemHealth is more than just a health tracker—it's a dedicated space
          for women to take control of their well-being. From menstrual cycle
          tracking to mental wellness support, our platform provides
          personalized insights, evidence-based guidance, and a supportive
          community.
        </p>
      </div>


      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <img
          src={image2}
          alt="Women's Health"
          className="w-full max-w-md lg:max-w-lg object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
