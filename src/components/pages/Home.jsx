import my_photo from "../../img/me.jpg";

function Home() {
  return (
    <section className="flex items-center justify-center p-4">
      <div className="p-2">
        <img className="rounded-full" src={my_photo} alt="Breno Lambertini" />
      </div>
      <div className="p-2">
        <span className="font-bold text-xl">Hi there!</span>
        <p className="text-xl">I'm a programmer looking for a job.</p>
      </div>
    </section>
  );
}

export default Home;
