import React from "react";
import Card from "./Card";

//Componente RenderCards
const RenderCards = ({ ciudades, quitarCiudad }) => {
  return (
    <>
      <div>
        {ciudades.map((c) => (
          <Card key={c.id} quitarCiudad={() => quitarCiudad(c.id)} {...c} />
        ))}
      </div>
    </>
  );
};

export default RenderCards;
