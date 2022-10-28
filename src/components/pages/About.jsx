import { BsPinAngleFill } from "react-icons/bs";

import styles from "./About.module.css";

import unifesp_logo from "../../img/unifesp_logo.png";

function About() {
  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-col mb-16">
        <h2 className="mb-8 text-4xl text-center">1. UNIVERSITY</h2>

        <div className="flex flex-wrap gap-12 justify-center">
          <div className="flex flex-col items-center mb-8">
            <img
              className="w-96 rounded"
              alt="Unifesp Logo"
              src={unifesp_logo}
            />

            <h3 className="text-center text-2xl font-bold mt-3 mb-6">
              Federal University of São Paulo
            </h3>

            <ul className="flex flex-col text-lg gap-2">
              <li>
                - Bachelor's Degree in Interdisciplinary Science and Technology
              </li>
              <li>- With emphasis in Computer Science</li>
              <li>- Scientific Initiation Scholarship (at USP)</li>
            </ul>
          </div>

          <div className="flex flex-col p-2 gap-4 md:rotate-3 text-bg bg-yellow">
            <span className="flex justify-center">
              <BsPinAngleFill size={50} color="#D42500" />
            </span>

            <h4 className="text-bold text-center text-2xl">
              SOME SUBJECTS I TOOK:
            </h4>

            <ul className="text-lg">
              <li>&bull; Data Structures and Algorithms I & II</li>
              <li>&bull; Object-oriented programming</li>
              <li>&bull; Design and Analysis of Algorithms</li>
              <li>&bull; Computer graphics</li>
              <li>&bull; Artificial Intelligence</li>
              <li>&bull; Computational Modeling</li>
              <li>&bull; Calculus I, II, III & IV</li>
              <li>&bull; Physics I, II & III</li>
              <li>&bull; Electric Circuits I & II</li>
              <li>&bull; Microeconomics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="mb-4 text-4xl text-center">2. MY SKILLS</h2>

        <div className="flex flex-col ml-2">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">Back-end:</h3>

            <div className="flex flex-wrap">
              <img
                className={styles.skill_icon}
                alt="c-lang"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              />
              <img
                className={styles.skill_icon}
                alt="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="java"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="php"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              />
              <img
                className={styles.skill_icon}
                alt="django"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="postgresql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="mysql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
            </div>
          </div>

          <div className="flex flex-col my-12">
            <h3 className="text-xl font-bold">Front-end:</h3>

            <div className="flex flex-wrap">
              <img
                className={styles.skill_icon}
                alt="html5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="css3"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className={styles.skill_icon}
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="tailwindcss"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="foundation"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original-wordmark.svg"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-bold">Tools:</h3>

            <div className="flex flex-wrap">
              <img
                className={styles.skill_icon}
                alt="vscode"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              />
              <img
                className={styles.skill_icon}
                alt="gitlab"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="git"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="docker"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="figma"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              />
              <img
                className={styles.skill_icon}
                alt="selenium"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
