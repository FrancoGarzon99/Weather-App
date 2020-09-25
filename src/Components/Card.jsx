import React from "react";
import { Link } from "react-router-dom";

//Componente Card
const Card = ({ min, max, name, img, quitarCiudad, id }) => {
  return (
    <>
      <Link to={`/cuidad/${id}`}>
        <div>
          <button onClick={quitarCiudad}>x</button>
          <img
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            alt="Logo Clima"
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
