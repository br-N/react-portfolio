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
      <h2 className="text-3xl">Humanoid is in danger.</h2>

      <p className="text-2xl mt-4 text-yellow">
        Please, click the button below to release him.
      </p>

      <button
        className="bg-blue w-36 border rounded text-2xl p-3 mt-8 mb-12 font-bold transition duration-150 ease-in-out hover:scale-125"
        style={{
          backgroundColor: showHumanoid ? "#D42500" : "",
          pointerEvents: showHumanoid ? "none" : "auto"
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
