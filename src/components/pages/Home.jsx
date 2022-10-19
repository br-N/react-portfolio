import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";

import my_photo from "../../img/my-photo.png";

function Home() {
  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-wrap mb-16">
        <img className="h-72 mb-8 mr-8" src={my_photo} alt="Breno Lambertini" />

        <div className="flex flex-col justify-center">
          <p className="text-[35px]">Hi!</p>
          <p className="text-[35px] my-4">I'm Breno Lambertini</p>
          <p className="font-bold text-[45px] mt-4">Full Stack Developer</p>
        </div>
      </div>

      <div className="flex flex-wrap">
        <p className="flex items-center mr-8 text-[32px]">CONTACT ME:</p>

        <ul className="flex items-center mt-2">
          <li>
            <a
              href="https://www.linkedin.com/in/brenolambertini/"
              target="_blank"
            >
              <SiLinkedin size={60} className="hover:text-blue" />
            </a>
          </li>
          <li className="mx-8">
            <a href="mailto:brenobl2000@gmail.com" target="_blank">
              <SiGmail size={60} className="hover:text-blue" />
            </a>
          </li>
          <li>
            <a href="https://github.com/br-N/" target="_blank">
              <SiGithub size={60} className="hover:text-blue" />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap mt-12">
        <a
          href="https://drive.google.com/uc?export=download&id=1x0GN5PB8RRwtqEZ39HzAnpS9_jh6HLr8"
          className="bg-bg border rounded w-[150px] p-1 mr-24 mb-4 font-bold text-center hover:scale-125 hover:duration-150"
        >
          CV Download (Português)
        </a>

        <a
          href="https://drive.google.com/uc?export=download&id=1hGhzYRp7Q-fhlO8kKYi7T3XnBsrsPj5e"
          className="bg-bg border rounded w-[150px] p-1 mb-4 font-bold text-center hover:scale-125 hover:duration-150"
        >
          CV Download (English)
        </a>
      </div>
    </section>
  );
}

export default Home;
