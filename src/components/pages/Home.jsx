import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";

import { useState } from "react";

import my_photo from "../../img/my-photo.png";
import humanoid from "../../img/humanoid.gif";
import help from "../../img/help-me.gif";

function Home() {
  const [showHumanoid, setShowHumanoid] = useState(false);

  function releaseHumanoid(e) {
    e.preventDefault();
    setShowHumanoid(true);
  }

  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-wrap mt-6 mb-12">
        <img className="h-72 mb-8 mr-8" src={my_photo} alt="Breno Lambertini" />

        <div className="flex flex-col justify-center">
          <p className="text-[35px]">Hi!</p>
          <p className="text-[35px] my-4">I'm Breno Lambertini</p>
          <p className="font-bold text-[45px] mt-4">Full Stack Developer</p>
        </div>
      </div>

      <div className="flex flex-wrap my-6">
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

      <div className="flex flex-wrap mt-8 mb-12">
        <a
          href="https://drive.google.com/uc?export=download&id=1x0GN5PB8RRwtqEZ39HzAnpS9_jh6HLr8"
          className="bg-bg border rounded w-[150px] p-1 mr-24 mb-12 font-bold text-center"
        >
          CV Download (Português)
        </a>

        <a
          href="https://drive.google.com/uc?export=download&id=1hGhzYRp7Q-fhlO8kKYi7T3XnBsrsPj5e"
          className="bg-bg border rounded w-[150px] p-1 mb-12 font-bold text-center"
        >
          CV Download (English)
        </a>
      </div>

      <div className="flex flex-wrap my-12">
        <div className="flex flex-col justify-center items-center mr-8">
          <p className="text-[30px]">Humanoid is in danger.</p>
          <p className="text-[25px] mt-4">
            Please, click the button below to release him.
          </p>
          <button
            className="bg-blue border rounded p-2 mt-8 mb-12 font-bold"
            onClick={releaseHumanoid}
          >
            FREEDOM
          </button>
        </div>
        {showHumanoid ? (
          <div>
            <img src={humanoid} alt="Humanoide" />
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="bg-[#000000] h-[400px] w-[400px] border-[36px] border-white">
              <img src={help} alt="Help me" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
