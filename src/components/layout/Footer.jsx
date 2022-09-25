import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-2 bg-slate-200">
      <p>
        Developed by <span className="font-bold">Breno Lambertini</span> &copy;
        2022
      </p>
      <ul className="flex mt-2">
        <li className="mr-4">
          <FaLinkedin size={20} />
        </li>
        <li>
          <FaGithub size={20} />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
