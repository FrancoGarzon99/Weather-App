import React, { useState } from "react";

const SearchBar = ({ buscadorDeCiudades }) => {
  const [nombreCiudad, setNombreCiudad] = useState("");

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            buscadorDeCiudades(nombreCiudad);
            setNombreCiudad("");
          }}
        >
          <input
            type="text"
            value={nombreCiudad}
            placeholder="Cuidad"
            onChange={(e) => {
              setNombreCiudad(e.target.value);
            }}
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
