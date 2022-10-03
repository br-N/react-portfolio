import my_photo from "../../img/me.jpg";
import humanoid from "../../img/humanoid.gif";

function Home() {
  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-wrap mt-8 mb-16">
        <img className="mr-16 mb-4" src={humanoid} alt="Humanoide" />

        <div className="flex flex-col justify-center">
          <p className="font-bold text-[40px]">Hi there!</p>
          <p className="text-[30px] my-4">My name is Breno Lambertini.</p>
          <p className="text-[25px]">
            I'm a Full Stack Developer looking for a job.
          </p>
        </div>
      </div>

      <div className="">
        <img className="rounded-full" src={my_photo} alt="Breno Lambertini" />
      </div>
    </section>
  );
}

export default Home;
