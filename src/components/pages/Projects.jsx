import culturaeduca from "../../img/culturaeduca.png";
import robot_of_love from "../../img/robot-of-love.png";
import portfolio from "../../img/portfolio.png";

function Projects() {
  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-wrap max-w-4xl mb-16 p-3 bg-blue rounded">
        <div className="flex flex-col mr-6">
          <img
            className="rounded w-[250px]"
            alt="CulturaEduca"
            src={culturaeduca}
          />
          <p className="text-center p-1 font-bold text-[30px]">CulturaEduca</p>
        </div>

        <div className="flex flex-col flex-1 mt-2 justify-between">
          <p className="text-[22px]">
            Software development at CulturaEduca, a platform maintained by
            InterSCity (USP) built especially with Django Framework, which
            focuses mainly on geolocation and information sharing in the context
            of culture and education in cities.
          </p>

          <div className="flex flex-col mt-6">
            <p className="font-bold text-[24px] text-right">
              Main technologies:
            </p>
            <div className="flex flex-wrap justify-end">
              <img
                className="p-1 m-1 h-20 bg-salmon rounded"
                alt="django"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded"
                alt="postgresql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded"
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded"
                alt="foundation"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap max-w-4xl mb-16 p-3 bg-blue rounded">
        <div className="flex flex-col mr-6">
          <img
            className="rounded w-[250px]"
            alt="Robot of Love"
            src={robot_of_love}
          />
          <p className="text-center p-1 font-bold text-[30px]">Robot of Love</p>
        </div>

        <div className="flex flex-col flex-1 mt-2 justify-between">
          <p className="text-[22px]">
            Robot of Love is a bot built with Python and Selenium that likes
            every post and follows every post owner of a specific URL, which can
            be either a tag or a person. And user can choose if he want only to
            like, only to follow or both.
          </p>

          <div className="flex flex-col mt-6">
            <p className="font-bold text-[24px] text-right">
              Main technologies:
            </p>
            <div className="flex flex-wrap justify-end">
              <img
                className="p-1 m-1 h-20 bg-salmon rounded"
                alt="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded"
                alt="selenium"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap max-w-4xl p-3 bg-blue rounded">
        <div className="flex flex-col mr-6">
          <img className="rounded w-[250px]" alt="Portfolio" src={portfolio} />
          <p className="text-center p-1 font-bold text-[30px]">My Portfolio</p>
        </div>

        <div className="flex flex-col flex-1 mt-2 justify-between">
          <p className="text-[22px]">
            This portfolio was developed using React, a Javascript library, in
            addition to the Vite build tool. For styling, the option chosen was
            Tailwind, a CSS framework.
          </p>

          <div className="flex flex-col mt-6">
            <p className="font-bold text-[24px] text-right">
              Main technologies:
            </p>
            <div className="flex flex-wrap justify-end">
              <img
                className="p-1 m-1 h-20 bg-salmon rounded"
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded"
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded"
                alt="tailwindcss"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
