import styles from "./css/Projects.module.css";

import portfolio from "../../img/portfolio.png";
import culturaeduca from "../../img/culturaeduca.png";
import angular_project from "../../img/angular-project.jpg";
import react_project from "../../img/react-project.png";
import robot_of_love from "../../img/robot-of-love.png";

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
            &emsp;This portfolio was designed and developed from scratch using
            React, a Javascript library, in addition to the Vite build tool. For
            styling, the option chosen was Tailwind, a CSS framework.{" "}
            <a
              className="underline"
              href="https://github.com/br-N/react-portfolio"
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

          <h2 className={styles.title}>Cultura Educa</h2>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            &emsp;Totally open-source platform maintained by InterSCity (USP),
            which focuses on geolocation and information sharing in the context
            of culture and education in cities. Main contributions: 1) Front-end
            and back-end development of Textual Search (with queries in more
            than 20 different databases, containing tens of thousands of data,
            in addition to the use of pagination, triggers, materialized views,
            among others. 2) Refactoring of the geolocation parts, which uses
            OpenStreetMap map, JavaScript library OpenLayers, in addition to the
            Correios API and Nominatim API.{" "}
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
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className={styles.skills_icon}
                alt="foundation"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original-wordmark.svg"
              />
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
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_div}>
        <div className={styles.left_div}>
          <img
            className={styles.img}
            alt="Angular Project"
            src={angular_project}
          />

          <h2 className={styles.title}>Angular Project</h2>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            &emsp;Full stack project developed in Angular that consists of a
            website similar to Instagram, in which it is possible to share
            moments having the name of the moment, a description and an image.
            Moments are stored in a relational database (SQLite), using an
            RESTful API built in AdonisJS (
            <a
              className="underline"
              href="https://github.com/br-N/api-rest-adonisjs"
              target="_blank"
            >
              Check here!
            </a>
            ). Furthermore, it is allowed to edit the data of each moment or
            delete it. The moments are shown on the Home page, and it is also
            possible to add comments to the moments, with the user name and the
            comment itself as fields, and they are added to the database as
            well.{" "}
            <a
              className="underline"
              href="https://github.com/br-N/curso-angular-projeto"
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
                alt="typescript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <img
                className={styles.skills_icon}
                alt="angular"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                alt="adonisjs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                alt="sqlite"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_div}>
        <div className={styles.left_div}>
          <img className={styles.img} alt="React Project" src={react_project} />

          <h2 className={styles.title}>React Project</h2>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            &emsp;Full stack project developed in React whose objective is to
            manage projects in general, having as fields a name, budget and
            category. Projects are stored in a non-relational database
            (MongoDB), using the JSON Server module that simulates a REST API.
            Furthermore, it is possible to edit the project, being able to add
            services with a pre-established cost, automatically updating the
            total value used of the project budget.{" "}
            <a
              className="underline"
              href="https://github.com/br-N/curso-react-projeto"
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
                alt="mongodb"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
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
            &emsp;Automation for Instagram developed in Python and Selenium that
            likes every post and follows every post owner of a specific URL,
            which can be either a tag or a person. And the user can choose if he
            want only to like, only to follow or both.{" "}
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
