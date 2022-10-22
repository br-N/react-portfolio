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
        <p className="ml-8 font-cinzel font-extrabold text-[24px]">
          <Link to="/">Breno Lambertini</Link>
        </p>

        <ul className="flex flex-wrap gap-8 mr-8 text-[18px]">
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
