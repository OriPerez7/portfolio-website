import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

const NavItems = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link-underline" : "hover-underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "active-link-underline" : "hover-underline"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <Link to="/contact">
          <button className="btn-primary">Contact</button>
        </Link>
      </li>
    </ul>
  )
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between ">
      <Link to="/" className="w-32 ">
        <img src={logo} alt="Logo" />
      </Link>

      <NavItems className="hidden md:flex items-center space-x-8" />

      {/* Mobile */}
      <div className="block md:hidden z-10" onClick={toggleMenuOpen}>
        {isOpen ? <IoCloseSharp size={30} /> : <IoMenu size={30} />}
      </div>

      <div
        className={
          isOpen
            ? "fixed h-full right-0 top-0 w-full bg-black px-2 py-5 duration-500 flex flex-col gap-10 justify-center items-center"
            : "fixed right-[-100%]"
        }
      >
        <NavItems className="flex flex-col items-center justify-between gap-12 text-4xl p-2" />
      </div>
    </nav>
  );
};

export default Navbar;
