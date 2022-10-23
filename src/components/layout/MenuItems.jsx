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
        active ? "md:hidden flex flex-col mb-2 gap-6 text-[20px]" : "hidden"
      }
    >
      <li>
        <Link to="/">
          <div className="flex items-center justify-center">
            <AiOutlineHome size={24} className="mr-4" />
            Home
          </div>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <div className="flex items-center justify-center">
            <AiOutlineInfoCircle size={24} className="mr-4" />
            About
          </div>
        </Link>
      </li>
      <li>
        <Link to="/projects">
          <div className="flex items-center justify-center">
            <AiOutlineTool size={24} className="mr-4" />
            Projects
          </div>
        </Link>
      </li>
      <li>
        <Link to="/humanoid">
          <div className="flex items-center justify-center">
            <AiOutlineHourglass size={24} className="mr-4" />
            Humanoid
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default MenuItems;
