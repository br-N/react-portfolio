import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineTool,
  AiOutlineHourglass,
} from "react-icons/ai";

function MenuItems({ active }) {
  return (
    <ul
      className={
        active
          ? "md:hidden flex flex-col items-center mb-2 gap-6 text-[20px]"
          : "hidden"
      }
    >
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
  );
}

export default MenuItems;
