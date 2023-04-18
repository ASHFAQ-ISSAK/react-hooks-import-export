import React from "react";
import ReactDOM from "react-dom";
import ColoradoStateParks from "./ColoradoStateParks";
import MesaVerde from "./parks/MesaVerde";

ReactDOM.render(
  <div>
    <ColoradoStateParks />
    <MesaVerde />
  </div>,
  document.getElementById("root")
);
