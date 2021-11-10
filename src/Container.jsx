/* Import useContext */
import React, { useContext } from "react";
import { AppContext } from "./ContextProvider";

export default function Grua() {
  /* Data */
  const { data } = useContext(AppContext);

  return (
    <div className="cuadrado container">
      <div>Container</div>
      <div>La carga es: </div>
      <svg
        id="Capa_1"
        enableBackground="new 0 0 507.763 507.763"
        height="200"
        viewBox="0 0 507.763 507.763"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={data.imagen} />
      </svg>
      <div>{data.nombre}</div>
    </div>
  );
}
