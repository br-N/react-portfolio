import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-2">
      <p>
        Developed by <span className="font-bold">Breno Lambertini</span> &copy;
        2022
      </p>
      <ul className="flex mt-2">
        <li className="mr-4">
          <a
            href="https://www.linkedin.com/in/brenolambertini/"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </a>
        </li>
        <li>
          <a href="https://github.com/br-N/" target="_blank">
            <FaGithub size={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
