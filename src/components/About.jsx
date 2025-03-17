import React from "react";
import about1 from "../assets/img/about1.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        At FemHealth, we believe that every woman deserves access to personalized, reliable, and science-backed health insights. Our platform is designed to support women at every stage of their wellness journey—whether it's tracking menstrual cycles, monitoring mental well-being, or accessing expert-backed health resources. We strive to create a safe, inclusive, and supportive space where women can take charge of their health with confidence.
        </p>
        <p className="text-justify lg:text-start">
        Our mission is to bridge the gap between technology and women's healthcare, offering intuitive tools, expert advice, and a community-driven approach to holistic well-being. By prioritizing education, empowerment, and accessibility, we aim to make healthcare smarter, easier, and more personalized for every woman.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={about1} alt="img" />
      </div>
    </div>
  );
};

export default About;