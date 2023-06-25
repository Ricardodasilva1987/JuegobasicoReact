import React, { useState } from "react";

const Funcionamiento = ({ maximo }) => {
  const [numeroUsuario, setNumeroUsuario] = useState(0);

  const [numeroMaquina, setNumeroMaquina] = useState(
    Math.floor(Math.random() * maximo + 1)
  );

  function comprobarNumeroUsuario(event) {
    setNumeroUsuario(event.target.value);
  }

  function comprobarNumeroMaquina() {
    numeroUsuario == numeroMaquina
      ? alert("Haz ganado")
      : alert("No lo haz conseguido, el numero correcto es :" + numeroMaquina);
    setNumeroMaquina(Math.floor(Math.random() * maximo + 1));
  }

  return (
    <div>
      <p>Elige un numero del 1 al 10</p>
      <input
        style={{ width: "20%" }}
        type="number"
        placeholder="Ingresa tu numero"
        min={1}
        max={10}
        onChange={comprobarNumeroUsuario}
      />
      <br />
      <br />
      <button style={{ color: "greenyellow" }} onClick={comprobarNumeroMaquina}>
        Jugar
      </button>
    </div>
  );
};

export default Funcionamiento;
