import React from "react";
import { Link } from "react-router-dom";
const CuidadInfo = ({ ciudad }) => {
  return (
    <>
      <Link to="/">
        <button>volver</button>
      </Link>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${ciudad.img}@2x.png`}
          alt="Logo Clima"
        />
        <p>{ciudad.name}</p>
        <p>{ciudad.min}</p>
        <p>{ciudad.max}</p>
        <p>{ciudad.temp}</p>
        <p>{ciudad.weather}</p>
        <p>{ciudad.wind}</p>
        <p>{ciudad.latitud}</p>
        <p>{ciudad.longitud}</p>
      </div>
    </>
  );
};

export default CuidadInfo;
