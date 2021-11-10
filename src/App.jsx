import React from "react";
import "./styles.css";
import Barco from "./Barco";
import { carga } from "./carga.js";

export default function App() {
  return (
    <div className="App">
      <Barco carga={carga} />
    </div>
  );
}
