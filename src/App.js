import React, { useState } from "react";
import { Route } from "react-router-dom";
import CuidadInfo from "./Components/CuidadInfo";
import Nav from "./Components/Nav";
import RenderCards from "./Components/RenderCards";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
//Componente App
const App = () => {
  //Creamos un state donde iremos agregando las cuidades que luego se las pasaremos como props a renderCards
  const [ciudades, setCiudades] = useState([]);

  //Nuestro primer metodo BuscadorDeCiudades va a realizar la peticion a la api pasandole en nombre de la cuidad por parametro y luego esa cuidad llegara a url de la api
  const buscadorDeCiudades = (ciudad) => {
    const apiData = async (url) => {
      try {
        const urlApi = await fetch(url);
        const urlApiJson = await urlApi.json();

        if (urlApiJson.cod !== 200) {
          return alert(`Debes ingresar la cuidad ${urlApiJson.cod}`);
        }
        if (urlApiJson.main !== undefined) {
          const ciudadCard = {
            min: urlApiJson.main.temp_min,
            max: urlApiJson.main.temp_max,
            img: urlApiJson.weather[0].icon,
            id: urlApiJson.id,
            wind: urlApiJson.wind.speed,
            temp: urlApiJson.main.temp,
            name: urlApiJson.name,
            weather: urlApiJson.weather[0].main,
            clouds: urlApiJson.clouds.all,
            latitud: urlApiJson.coord.lat,
            longitud: urlApiJson.coord.lon,
          };
          if (!ciudades.some((ciu) => ciu.id === ciudadCard.id)) {
            setCiudades((ciudadesAnt) => [...ciudadesAnt, ciudadCard]);
          } else {
            alert(`Ciudad existente ${urlApiJson.cod}`);
          }
        } else {
          alert(`Ciudad no encontrada ${urlApiJson.cod}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    apiData(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    );
  };

  // //Nuestra segundo metodo quitarCuidad nos ayudara a filtrar esas cuidades que ya no queremos que se rendereen en pantalla
  const quitarCuidad = (id) => {
    setCiudades((ciudadesAnt) => ciudadesAnt.filter((ci) => ci.id !== id));
  };

  //Nuestra tercer metodo filtrarCuidad nos ayudara a filtar la ciudad a traves de su id para poder ver mas informacion sobre la misma
  const filtrarCuidad = (cuidadId) => {
    let newCuidad = ciudades.filter((c) => c.id === parseInt(cuidadId));
    if (newCuidad.length > 0) {
      return newCuidad[0];
    } else {
      return null;
    }
  };

  //Render App
  return (
    <>
      <Route
        exact
        path="/"
        render={() => <Nav buscadorDeCiudades={buscadorDeCiudades} />}
      />
      <Route
        exact
        path="/"
        render={() => (
          <RenderCards ciudades={ciudades} quitarCiudad={quitarCuidad} />
        )}
      />
      <Route
        exact
        path="/cuidad/:ciudadId"
        render={({ match }) => (
          <CuidadInfo ciudad={filtrarCuidad(match.params.ciudadId)} />
        )}
      />
    </>
  );
};

export default App;
