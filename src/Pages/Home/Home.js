import { useContext } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import GlobalStateContext from "../../components/Contexts/GlobalStateContext";
import useBack from "../../components/hooks/useBack";
import useRequestData from "../../components/hooks/useRequestData";

const HeaderDiv = styled.div `
    background-color: #FFCB05;
    width: 100vw;
    height: 15vh;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30%;
`
const Catalogo = styled.div`
  /* margin: 1em 0.5em; */
  display: grid;
  grid-template: 1fr 1fr / repeat(4, 1fr);
  gap: 0.5em;
  justify-content: center;
  align-items: center;
  margin-right: 10rem;
  margin-left: 10rem;
  margin-top: 5rem;
`
const Botao = styled.button`
   margin-left: 20px;
`

const Home = () => {
    const { pokedata, setPokedata } = useContext(GlobalStateContext)
    // const pokemonsData = useRequestData({},"https://pokeapi.co/api/v2/pokemon/")
    // console.log(pokemonsData)

    console.log(pokedata.results)

    const pokelist = pokedata.results && pokedata.results.map((item, index) => {
     return( 
     <Card
     key={index} 
     name={item.name}
     url={item.url}
     id={item.id}
     />
     );
    });

    return(
        <div>
            <HeaderDiv>
                <Botao onClick={useBack('/pokedex')}>Ver minha Pokedex</Botao>
                <h1>Lista de Pokemons</h1>
            </HeaderDiv>
            <Catalogo>
                {pokelist}           
            </Catalogo>
        </div>
    )
}

export default Home;