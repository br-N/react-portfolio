import unifesp_logo from "../../img/unifesp.jpg";

function About() {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <div className="my-4">
        <span className="font-bold text-xl">About me</span>
        <p className="text-xl">
          I studied Bachelor's Degree in Interdisciplinary Science and
          Technology with emphasis in Computer Science at{" "}
          <span className="font-bold">UNIFESP</span>, Federal University of São
          Paulo.
          <br />
          Furthermore, I was Scientific Initiation Scholarship (InterSCity USP).
        </p>
        <img
          className="h-48 rounded"
          alt="Breno Lambertini"
          src={unifesp_logo}
        />
      </div>

      <div className="my-4">
        <p className="text-center mb-8 text-[40px]">MY SKILLS</p>
        <div className="flex flex-row">
          <div className="flex flex-col mr-4 p-2 w-[396px] bg-blue rounded">
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

          <div className="flex flex-col ml-4 p-2 w-[396px] bg-blue rounded">
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
        </div>

        <div className="flex flex-col mt-8 p-2 bg-blue rounded">
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
    </section>
  );
}

export default About;
