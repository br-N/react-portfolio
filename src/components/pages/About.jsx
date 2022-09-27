import unifesp_logo from "../../img/unifesp.jpg";

function About() {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <span className="font-bold text-xl">About me</span>

      <div className="p-2">
        <p className="text-xl">
          I studied Bachelor's Degree in Interdisciplinary Science and
          Technology with emphasis in Computer Science at{" "}
          <span className="font-bold">UNIFESP</span>, Federal University of São
          Paulo.
          <br />
          Furthermore, I was Scientific Initiation Scholarship (InterSCity USP).
        </p>
      </div>

      <div className="p-2">
        <img className="rounded" src={unifesp_logo} alt="Breno Lambertini" />
      </div>
    </section>
  );
}

export default About;
