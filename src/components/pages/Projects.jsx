import culturaeduca from "../../img/culturaeduca.png";
import robot_of_love from "../../img/robot-of-love.png";

function Projects() {
  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex p-3 bg-blue rounded w-4/6">
        <div className="flex flex-col mr-6">
          <img className="rounded" alt="CulturaEduca" src={culturaeduca} />
          <p className="text-center p-1 font-bold text-[30px]">CulturaEduca</p>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-[22px]">
            Software development at CulturaEduca, a platform maintained by
            InterSCity (USP) built especially with Django Framework, which
            focuses mainly on geolocation and information sharing in the context
            of culture and education in cities.
          </p>

          <div className="flex flex-col mt-4">
            <p className="font-bold text-[24px] text-center">
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
    </section>
  );
}

export default Projects;
