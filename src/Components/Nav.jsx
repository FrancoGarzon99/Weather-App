import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

//Componente Nav
const Nav = ({ buscadorDeCiudades }) => {
  return (
    <div>
      <nav>
        <Link to="/">
          <span>
            <h5>Logo</h5>
          </span>
        </Link>
      </nav>
      <SearchBar buscadorDeCiudades={buscadorDeCiudades} />
    </div>
  );
};

export default Nav;
