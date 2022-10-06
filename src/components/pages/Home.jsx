import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";

import my_photo from "../../img/me.jpg";
import humanoid from "../../img/humanoid.gif";
import help from "../../img/help-me.gif";

function Home() {
  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-wrap my-12">
        <img
          className="h-72 rounded-full mr-8"
          src={my_photo}
          alt="Breno Lambertini"
        />

        <div className="flex flex-col justify-center">
          <p className="text-[35px]">Hi!</p>
          <p className="text-[35px] my-4">My name is Breno Lambertini.</p>
          <p className="font-bold text-[45px] mt-4">
            I'm a Full Stack Developer.
          </p>
        </div>
      </div>

      <div className="flex my-12">
        <p className="flex items-center mr-8 text-[32px]">CONTACT ME:</p>

        <ul className="flex items-center mt-2">
          <li>
            <a
              href="https://www.linkedin.com/in/brenolambertini/"
              target="_blank"
            >
              <SiLinkedin size={60} />
            </a>
          </li>
          <li className="mx-8">
            <a href="mailto:brenobl2000@gmail.com" target="_blank">
              <SiGmail size={60} />
            </a>
          </li>
          <li>
            <a href="https://github.com/br-N/" target="_blank">
              <SiGithub size={60} />
            </a>
          </li>
        </ul>
      </div>

      <div className="my-8">
        <img className="" src={help} alt="Help me" />
        <img className="" src={humanoid} alt="Humanoide" />
      </div>
    </section>
  );
}

export default Home;
