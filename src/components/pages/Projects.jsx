import styles from "./Projects.module.css";

import culturaeduca from "../../img/culturaeduca.png";
import robot_of_love from "../../img/robot-of-love.png";
import portfolio from "../../img/portfolio.png";

function Projects() {
  return (
    <section className="flex flex-col items-center w-screen gap-16">
      <div className={styles.main_div}>
        <div className={styles.left_div}>
          <img className={styles.img} alt="Portfolio" src={portfolio} />

          <h2 className={styles.title}>My Portfolio</h2>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            This portfolio was developed using React, a Javascript library, in
            addition to the Vite build tool. For styling, the option chosen was
            Tailwind, a CSS framework.
          </p>

          <div className={styles.tech_div}>
            <p className={styles.tech_text}>Main technologies:</p>
            <div className={styles.skills_div}>
              <img
                className={styles.skills_icon}
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className={styles.skills_icon}
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                alt="tailwindcss"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_div}>
        <div className={styles.left_div}>
          <img className={styles.img} alt="CulturaEduca" src={culturaeduca} />

          <h2 className={styles.title}>CulturaEduca</h2>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            Software development at CulturaEduca, a platform maintained by
            InterSCity (USP) built especially with Django Framework, which
            focuses mainly on geolocation and information sharing in the context
            of culture and education in cities.{" "}
            <a
              className="underline"
              href="https://culturaeduca.cc/"
              target="_blank"
            >
              Check here!
            </a>
          </p>

          <div className={styles.tech_div}>
            <p className={styles.tech_text}>Main technologies:</p>
            <div className={styles.skills_div}>
              <img
                className={styles.skills_icon}
                alt="django"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                alt="postgresql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className={styles.skills_icon}
                alt="foundation"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_div}>
        <div className={styles.left_div}>
          <img className={styles.img} alt="Robot of Love" src={robot_of_love} />

          <h2 className={styles.title}>Robot of Love</h2>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            Robot of Love is a bot built with Python and Selenium that likes
            every post and follows every post owner of a specific URL, which can
            be either a tag or a person. And user can choose if he want only to
            like, only to follow or both.{" "}
            <a
              className="underline"
              href="https://github.com/br-N/robot-of-love"
              target="_blank"
            >
              Check here!
            </a>
          </p>

          <div className={styles.tech_div}>
            <p className={styles.tech_text}>Main technologies:</p>
            <div className={styles.skills_div}>
              <img
                className={styles.skills_icon}
                alt="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
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

export default Projects;
