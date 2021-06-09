import { useContext, useState, useEffect } from "react";
import Router from "./Route/Router";
import GlobalStateContext from "./components/Contexts/GlobalStateContext";
import axios from "axios";


function App() {
  const [pokedata, setPokedata] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const data = {
    pokedata,
    setPokedata,
    pokedex, 
    setPokedex
  }

  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
        setPokedata(response.data);
    })
    .catch((error) => {
        console.log(error);
        alert("Erro! Por favor, tente novamente");
    });
  }, ["https://pokeapi.co/api/v2/pokemon/"]);

  
  // const getPokemonDetails = () => {
  //   axios
  //   .get(pokedata.results.url)
  //   .then((response) => {
  //       setPokedata(response.data);
  //   })
  //   .catch((error) => {
  //       console.log(error);
  //       alert("Erro! Por favor, tente novamente");
  //   });
  // }, []);
  // }

  return (
      <GlobalStateContext.Provider value={data}>
        <Router />
      </GlobalStateContext.Provider>
  );
}

export default App;
