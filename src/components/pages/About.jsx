import styles from "./About.module.css";

import unifesp_logo from "../../img/unifesp_logo.png";

function About() {
  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-col mb-16">
        <h3 className="mb-8 text-[40px] text-center">1. UNIVERSITY</h3>

        <div className="flex flex-wrap">
          <div className="flex flex-col items-center mr-12 mb-8">
            <img
              className="bg-white w-80 rounded mb-3 p-3"
              alt="Unifesp Logo"
              src={unifesp_logo}
            />

            <ul>
              <li className="text-center text-[24px] font-bold mb-2">
                Federal University of São Paulo
              </li>
              <li className="text-[20px]">
                - Bachelor's Degree in Interdisciplinary Science and Technology
              </li>
              <li className="text-[20px]">
                - With emphasis in Computer Science
              </li>
              <li className="text-[20px]">
                - Scientific Initiation Scholarship (at USP)
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <p className="mb-4 text-bold text-[30px]">SOME SUBJECTS I TOOK: </p>
            <ul>
              <li className="text-[20px]">
                &bull; Data Structures and Algorithms I & II
              </li>
              <li className="text-[20px]">
                &bull; Object-oriented programming
              </li>
              <li className="text-[20px]">
                &bull; Design and Analysis of Algorithms
              </li>
              <li className="text-[20px]">&bull; Computer graphics</li>
              <li className="text-[20px]">&bull; Artificial Intelligence</li>
              <li className="text-[20px]">&bull; Computational Modeling</li>
              <li className="text-[20px]">&bull; Calculus I, II, III & IV</li>
              <li className="text-[20px]">&bull; Physics I, II & III</li>
              <li className="text-[20px]">&bull; Electric Circuits I & II</li>
              <li className="text-[20px]">&bull; Microeconomics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="mb-6 text-[40px] text-center">2. MY SKILLS</h3>

        <div className="flex flex-col ml-2">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Front-end:</p>
            <div className="flex flex-wrap">
              <img
                className={styles.icone}
                alt="html5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              <img
                className={styles.icone}
                alt="css3"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              />
              <img
                className={styles.icone}
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className={styles.icone}
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                className={styles.icone}
                alt="tailwindcss"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
              <img
                className={styles.icone}
                alt="foundation"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original-wordmark.svg"
              />
            </div>
          </div>

          <div className="flex flex-col my-12">
            <p className="text-xl font-bold">Back-end:</p>
            <div className="flex flex-wrap">
              <img
                className={styles.icone}
                alt="c-lang"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              />
              <img
                className={styles.icone}
                alt="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                className={styles.icone}
                alt="java"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              />
              <img
                className={styles.icone}
                alt="php"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              />
              <img
                className={styles.icone}
                alt="django"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              />
              <img
                className={styles.icone}
                alt="postgresql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
              <img
                className={styles.icone}
                alt="mysql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-xl font-bold">Tools:</p>
            <div className="flex flex-wrap">
              <img
                className={styles.icone}
                alt="vscode"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              />
              <img
                className={styles.icone}
                alt="gitlab"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg"
              />
              <img
                className={styles.icone}
                alt="git"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              />
              <img
                className={styles.icone}
                alt="docker"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
              />
              <img
                className={styles.icone}
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
