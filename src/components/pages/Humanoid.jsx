import { useState } from "react";

import humanoid from "../../img/humanoid.gif";
import help from "../../img/help-me.gif";

function Humanoid() {
  const [showHumanoid, setShowHumanoid] = useState(false);

  function releaseHumanoid(e) {
    e.preventDefault();
    setShowHumanoid(true);
  }

  return (
    <div className="flex flex-col flex-wrap items-center w-screen mt-4">
      <p className="text-[30px]">Humanoid is in danger.</p>
      <p className="text-[25px] mt-4">
        Please, click the button below to release him.
      </p>

      <button
        className="bg-blue w-[120px] border rounded p-2 mt-8 mb-12 font-bold"
        onClick={releaseHumanoid}
      >
        FREEDOM
      </button>

      {showHumanoid ? (
        <img src={humanoid} alt="Humanoide" />
      ) : (
        <div className="flex flex-col">
          <div className="bg-[#000000] h-[400px] w-[400px] border-[36px] border-white">
            <img src={help} alt="Help me" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Humanoid;
