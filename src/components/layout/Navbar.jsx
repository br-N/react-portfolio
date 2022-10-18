import { Link } from "react-router-dom";

import Container from "./Container";

import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineTool,
  AiOutlineHourglass,
} from "react-icons/ai";

function Navbar() {
  return (
    <nav className="mb-8 p-1 bg-blue">
      <Container>
        <p className="font-cinzel font-extrabold text-[24px] ml-8">
          <Link to="/">Breno Lambertini</Link>
        </p>

        <ul className="flex flex-wrap text-[18px]">
          <li className="mr-8">
            <Link to="/">
              <div className="flex items-center">
                <AiOutlineHome size={24} className="mr-1" />
                Home
              </div>
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/about">
              <div className="flex items-center">
                <AiOutlineInfoCircle size={24} className="mr-1" />
                About
              </div>
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/projects">
              <div className="flex items-center">
                <AiOutlineTool size={24} className="mr-1" />
                Projects
              </div>
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/humanoid">
              <div className="flex items-center">
                <AiOutlineHourglass size={24} className="mr-1" />
                Save The Humanoid
              </div>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
