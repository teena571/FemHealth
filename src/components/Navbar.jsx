import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm,setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  }

  const closeForm = () => {
    setShowForm(false);
  }

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-gradient-to-r from-pink-500 via-orange-400 to-pink-400 shadow-md">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
              <h1 className="text-2xl font-semibold">FemHealth</h1>
            </Link>
          </div>

          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="tracker" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>Tracker</Link>
            <Link to="symptoms" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>Symptoms</Link>
            <Link to="wellness" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>Wellness</Link>
            <Link to="reminders" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>Reminders</Link>
            <Link to="consultation" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>Consultation</Link>
            <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>About Us</Link>
          </nav>

          <div className="hidden lg:flex">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 duration-300" onClick={openForm}>
              Contact Us
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-gradient-to-b from-pink-500 to-orange-500 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link to="tracker" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>Tracker</Link>
          <Link to="symptoms" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>Symptoms</Link>
          <Link to="wellness" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>Wellness</Link>
          <Link to="reminders" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>Reminders</Link>
          <Link to="consultation" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>Consultation</Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-orange-200 cursor-pointer" onClick={closeMenu}>About Us</Link>

          <div className="lg:hidden">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300" onClick={openForm}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
