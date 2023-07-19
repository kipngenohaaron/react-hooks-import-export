
// This file imports the howManyParks function from howManyParks.js.
// It also renders the ColoradoStateParks component and uses the imported function.
import React from "react";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
    <div>
      <h1>Colorado State Parks!</h1>
    </div>
  );
}

export default ColoradoStateParks;
