import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";

import my_photo from "../../img/my-photo.png";

function Home() {
  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-wrap justify-center gap-12 mb-16">
        <img className="max-h-72" src={my_photo} alt="Breno Lambertini" />

        <div className="flex flex-col gap-4 justify-center">
          <p className="text-4xl">Hi!</p>
          <p className="text-4xl">I'm Breno Lambertini</p>
          <h2 className="font-bold text-5xl mt-4">Full Stack Developer</h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
        <h2 className="flex items-center text-3xl">CONTACT ME:</h2>

        <ul className="flex flex-wrap gap-12 mt-2">
          <li>
            <a
              href="https://www.linkedin.com/in/brenolambertini/"
              target="_blank"
            >
              <SiLinkedin
                size={60}
                className="transition duration-300 ease-in-out hover:text-blue"
              />
            </a>
          </li>
          <li>
            <a href="mailto:brenobl2000@gmail.com" target="_blank">
              <SiGmail
                size={60}
                className="transition duration-300 ease-in-out hover:text-blue"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/br-N/" target="_blank">
              <SiGithub
                size={60}
                className="transition duration-300 ease-in-out hover:text-blue"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-x-24 gap-y-12 mt-16 mb-4">
        <a
          href="https://drive.google.com/uc?export=download&id=1x0GN5PB8RRwtqEZ39HzAnpS9_jh6HLr8"
          className="bg-bg border rounded w-36 p-1 font-bold text-center transition duration-300 ease-in-out hover:scale-125"
        >
          CV Download (Português)
        </a>

        <a
          href="https://drive.google.com/uc?export=download&id=1hGhzYRp7Q-fhlO8kKYi7T3XnBsrsPj5e"
          className="bg-bg border rounded w-36 p-1 font-bold text-center transition duration-300 ease-in-out hover:scale-125"
        >
          CV Download (English)
        </a>
      </div>
    </section>
  );
}

export default Home;
