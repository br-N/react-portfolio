import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Container from "./Container";
import MenuItems from "./MenuItems";

import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineTool,
  AiOutlineHourglass,
} from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";

import { MdClose } from "react-icons/md";

function Navbar() {
  const [active, setActive] = useState(false);

  function showMenu() {
    setActive(!active);
  }

  return (
    <nav className="mb-8 p-1">
      <Container>
        <h1 className="font-cinzel font-extrabold text-xl lg:ml-4">
          <Link to="/">Breno Lambertini</Link>
        </h1>

        {active ? (
          <MdClose
            size={28}
            className="md:hidden cursor-pointer"
            onClick={showMenu}
          />
        ) : (
          <GiHamburgerMenu
            size={28}
            className="md:hidden cursor-pointer"
            onClick={showMenu}
          />
        )}

        <ul className="hidden md:flex flex-wrap gap-8 text-base lg:mr-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              <div className="flex items-center transition duration-150 ease-in-out hover:scale-110">
                <AiOutlineHome size={24} className="mr-1" />
                Home
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              <div className="flex items-center transition duration-150 ease-in-out hover:scale-110">
                <AiOutlineInfoCircle size={24} className="mr-1" />
                About
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              <div className="flex items-center transition duration-150 ease-in-out hover:scale-110">
                <AiOutlineTool size={24} className="mr-1" />
                Projects
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/humanoid"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              <div className="flex items-center transition duration-150 ease-in-out hover:scale-110">
                <AiOutlineHourglass size={24} className="mr-1" />
                Humanoid
              </div>
            </NavLink>
          </li>
        </ul>
      </Container>
      <MenuItems active={active} />
    </nav>
  );
}

export default Navbar;
