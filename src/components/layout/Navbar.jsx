import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "./Container";
import MenuItems from "./MenuItems";

import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineTool,
  AiOutlineHourglass,
} from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [active, setActive] = useState(false);

  function showMenu() {
    setActive(!active);
  }

  return (
    <nav className="mb-8 p-1 bg-blue">
      <Container>
        <p className="font-cinzel font-extrabold text-[24px]">
          <Link to="/">Breno Lambertini</Link>
        </p>

        <GiHamburgerMenu
          size={28}
          className="md:hidden cursor-pointer"
          onClick={showMenu}
        />

        <ul className="hidden md:flex flex-wrap gap-8 text-[18px]">
          <li>
            <Link to="/">
              <div className="flex items-center">
                <AiOutlineHome size={24} className="mr-1" />
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <div className="flex items-center">
                <AiOutlineInfoCircle size={24} className="mr-1" />
                About
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <div className="flex items-center">
                <AiOutlineTool size={24} className="mr-1" />
                Projects
              </div>
            </Link>
          </li>
          <li>
            <Link to="/humanoid">
              <div className="flex items-center">
                <AiOutlineHourglass size={24} className="mr-1" />
                Humanoid
              </div>
            </Link>
          </li>
        </ul>
      </Container>
      <MenuItems active={active} />
    </nav>
  );
}

export default Navbar;
