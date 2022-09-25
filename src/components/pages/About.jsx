function About() {
  return (
    <section className="flex items-center justify-center p-4">
      <div className="p-2">
        <span className="font-bold text-xl">About me</span>
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
        <img
          className="rounded"
          src="https://www.unifesp.br/reitoria/dci/images/ICTPatec_1.jpg"
          alt="Breno Lambertini"
        />
      </div>
    </section>
  );
}

export default About;
