import { NavLink } from "react-router-dom";

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
        active ? "md:hidden flex flex-col mb-2 gap-6 text-lg" : "hidden"
      }
    >
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        >
          <div className="flex items-center justify-center">
            <AiOutlineHome size={24} className="mr-4" />
            Home
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        >
          <div className="flex items-center justify-center">
            <AiOutlineInfoCircle size={24} className="mr-4" />
            About
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        >
          <div className="flex items-center justify-center">
            <AiOutlineTool size={24} className="mr-4" />
            Projects
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/humanoid"
          className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        >
          <div className="flex items-center justify-center">
            <AiOutlineHourglass size={24} className="mr-4" />
            Humanoid
          </div>
        </NavLink>
      </li>
    </ul>
  );
}

export default MenuItems;
