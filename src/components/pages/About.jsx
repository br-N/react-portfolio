import unifesp_logo from "../../img/unifesp.png";

function About() {
  return (
    <section className="flex flex-col p-4">
      <h2 className="my-4 text-center text-white font-bold text-[40px] underline">
        About me
      </h2>

      <div className="my-8 bg-blue">
        <h3 className="text-left text-white mb-6 text-[40px]">1. UNIVERSITY</h3>

        <div className="flex">
          <ul className="ml-1 w-[65%]">
            <li className="text-center mb-6 text-[32px] font-bold">
              Federal University of São Paulo
            </li>
            <li className="text-[26px] mb-3">
              - Bachelor's Degree in Interdisciplinary Science and Technology
            </li>
            <li className="text-[26px] mb-3">
              - With emphasis in Computer Science
            </li>
            <li className="text-[26px]">
              - Scientific Initiation Scholarship (at USP)
            </li>
          </ul>

          <div className="ml-2 p-3 bg-white rounded">
            <img className="h-48 rounded" alt="Unifesp" src={unifesp_logo} />
          </div>
        </div>
      </div>

      <div className="my-8">
        <h3 className="text-left text-white mb-6 text-[40px]">2. MY SKILLS</h3>

        <div className="flex bg-blue">
          <div className="flex flex-col p-1 w-[387px]">
            <p className="text-center text-xl font-bold">Front-end</p>
            <div className="flex flex-wrap">
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="html5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="css3"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="tailwindcss"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="foundation"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original-wordmark.svg"
              />
            </div>
          </div>

          <div className="flex flex-col p-1 w-[387px]">
            <p className="text-center text-xl font-bold">Back-end</p>
            <div className="flex flex-wrap">
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="c-lang"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="java"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="php"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="django"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="postgresql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="mysql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
            </div>
          </div>

          <div className="flex flex-col p-1 w-[387px]">
            <p className="text-center text-xl font-bold">Tools</p>
            <div className="flex flex-wrap">
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="git"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="docker"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
              />
              <img
                className="p-1 m-2 h-24 bg-salmon rounded"
                alt="figma"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
