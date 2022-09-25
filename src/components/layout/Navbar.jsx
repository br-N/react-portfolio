import { Link } from "react-router-dom";

import Container from "./Container";

function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-slate-400">
      <Container>
        <ul className="flex items-center">
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-4">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="mr-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
