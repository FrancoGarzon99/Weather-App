import React from "react";
import { Link } from "react-router-dom";

//Componente Card
const Card = ({ min, max, name, img, quitarCiudad, id }) => {
  return (
    <>
      <button onClick={quitarCiudad}>x</button>
      <Link to={`/cuidad/${id}`}>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="Logo"
          />
          <p>{Math.round(min)} °</p>
          <p>{Math.round(max)} °</p>
          <p>{name}</p>
        </div>
      </Link>
    </>
  );
};

export default Card;
