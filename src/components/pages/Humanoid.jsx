import { useState } from "react";

import humanoid from "../../img/humanoid.gif";
import save_humanoid from "../../img/save-humanoid.gif";

function Humanoid() {
  const [showHumanoid, setShowHumanoid] = useState(false);

  function releaseHumanoid(e) {
    e.preventDefault();
    setShowHumanoid(true);
  }

  return (
    <div className="flex flex-col flex-wrap items-center w-screen mt-4">
      <h2 className="text-[30px]">Humanoid is in danger.</h2>

      <p className="text-[25px] mt-4">
        Please, click the button below to release him.
      </p>

      <button
        className="bg-yellow text-bg w-[150px] border rounded text-[22px] p-2 mt-8 mb-12 font-bold transition duration-300 ease-in-out hover:scale-125"
        style={{
          backgroundColor: showHumanoid ? "#D42500" : "",
          color: showHumanoid ? "yellow" : "",
        }}
        onClick={releaseHumanoid}
      >
        {showHumanoid ? "RUN !!!" : "FREEDOM"}
      </button>

      {showHumanoid ? (
        <img src={humanoid} alt="Humanoide" />
      ) : (
        <img src={save_humanoid} alt="Save The Humanoide" />
      )}
    </div>
  );
}

export default Humanoid;
