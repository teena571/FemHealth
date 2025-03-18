import React from 'react';
import Button from '../layouts/Button';
import CycleTracking from '../layouts/CycleTracking';
import MentalHealth from '../layouts/MentalHealth';
import ServicesCard from '../layouts/ServicesCard';
import { FaSyncAlt } from "react-icons/fa";
import { MdLocalHospital, MdOutlineMonitorHeart } from "react-icons/md";
import SymptomChecker from '../layouts/SymptomChecker';

const Services = () => {

    const icon1 = <FaSyncAlt size={35} className="text-orange-400" />;
    const icon2 = <MdLocalHospital size={35} className="text-orange-400" />;
    const icon3 = <MdOutlineMonitorHeart size={35} className="text-orange-400" />;

    return (
        <div className="h-auto flex flex-col bg-[#FFF5E1] justify-center lg:px-32 px-5 pt-24 lg:pt-16">
            <div className="flex flex-col items-center lg:flex-row justify-between">
                <div>
                    <h1 className="text-4xl font-semibold text-center lg:text-start lg:items-center lg:justify-center mb-6">
                    Your Health, Our Priority – Explore Our Services
                    </h1>
                    <p className="text-center lg:text-start">
                        At FemHealth, we offer a comprehensive suite of services tailored to support women's health and wellness. 
                        Our platform provides intuitive menstrual cycle tracking, mental health monitoring, and personalized health 
                        insights to help women make informed decisions about their well-being. Whether you're looking for cycle 
                        predictions, stress management tools, or expert health advice, our services are designed to empower you.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
                <CycleTracking icon={icon1} title="Cycle Tracking" />
                <MentalHealth icon={icon2} title="Mental Health Support" />
                <SymptomChecker icon={icon3} title="Symptom Checker" />
            </div>
        </div>
    );
};

export default Services;
