import unifesp_logo from "../../img/unifesp_logo.png";
import unifesp_campus from "../../img/unifesp_campus.jpg";

function About() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <h3 className="text-[40px]">1. UNIVERSITY</h3>

        <div className="flex flex-wrap">
          <div className="bg-white rounded">
            <img
              className="h-36 rounded"
              alt="Unifesp Logo"
              src={unifesp_logo}
            />
          </div>

          <ul className="">
            <li className="text-center text-[30px] font-bold">
              Federal University of São Paulo
            </li>
            <li className="text-[20px]">
              - Bachelor's Degree in Interdisciplinary Science and Technology
            </li>
            <li className="text-[20px]">- With emphasis in Computer Science</li>
            <li className="text-[20px]">
              - Scientific Initiation Scholarship (at USP)
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap">
          <div>
            <img
              className="rounded"
              alt="Unifesp Campus"
              src={unifesp_campus}
            />
            <p className="text-center">Campus São José dos Campos</p>
          </div>
          <div className="">
            <p className="text-bold text-[30px]">SOME SUBJECTS I TOOK: </p>
            <ul className="">
              <li className="text-[20px]">
                - Data Structures and Algorithms I & II
              </li>
              <li className="text-[20px]">- Object-oriented programming</li>
              <li className="text-[20px]">
                - Design and Analysis of Algorithms
              </li>
              <li className="text-[20px]">- Computer graphics</li>
              <li className="text-[20px]">- Artificial Intelligence</li>
              <li className="text-[20px]">- Computational Modeling</li>
              <li className="text-[20px]">- Calculus I, II, III & IV</li>
              <li className="text-[20px]">- Physics I, II & III</li>
              <li className="text-[20px]">- Electric Circuits I & II</li>
              <li className="text-[20px]">- Microeconomics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="">
        <h3 className="text-[40px]">2. MY SKILLS</h3>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Front-end</p>
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

          <div className="flex flex-col">
            <p className="text-xl font-bold">Back-end</p>
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

          <div className="flex flex-col p-1">
            <p className="text-xl font-bold">Tools</p>
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
