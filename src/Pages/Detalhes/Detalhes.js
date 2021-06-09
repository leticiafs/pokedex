import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import useBack from "../../components/hooks/useBack";
import useRequestData from "../../components/hooks/useRequestData";

const HeaderDiv = styled.div `
    background-color: #FFCB05;
    width: 100vw;
    height: 15vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
`
const Botao = styled.button`
   margin-left: 20px;
   margin-right: 20px;
`
const Conteudo = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-transform: capitalize;
`
const Img = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 20px;
    border-style: solid;
    border-color: black;
    margin: 20px;
    img {
        width: 200px;
        height: auto;
    }
`
const Stats = styled.div`
    width: 200px;
    height: 430px;
    border-radius: 20px;
    border-style: solid;
    border-color: black;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Type = styled.div`
    width: 400px;
    height: 100px;
    border-radius: 20px;
    border-style: solid;
    border-color: black;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Move = styled.div`
    width: 400px;
    height: 280px;
    border-radius: 20px;
    border-style: solid;
    border-color: black;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Moves = styled.div`
    margin-top: 20px;
    margin-right: 20px;
`
const Loading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`



const Detalhes = () => {
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams();

    console.log(params)

    // const pokemonsDetails = (useRequestData({}, `https://pokeapi.co/api/v2/pokemon/${params.pokeId}/`))

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.pokeId}/`)
        .then((response) => {
            setPokemonDetails(response.data);
            setIsLoading(true);
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false)
            alert("Erro! Por favor, tente novamente");
        });
      }, [ `https://pokeapi.co/api/v2/pokemon/${params.pokeId}/`]);

      console.log(pokemonDetails)
    
    return(
                
        <div>
            <HeaderDiv>
                <Botao onClick={useBack('/pokedex')}>Ver minha Pokedex</Botao>
                <h1>{params.pokeId}</h1>
                <Botao>Adicionar/Remover da Pokedex</Botao>
            </HeaderDiv>
             {isLoading ? 
                <Conteudo>
                    <div>
                        <Img><img src={pokemonDetails.sprites.front_default}></img></Img>
                        <Img><img src={pokemonDetails.sprites.back_default}></img></Img>
                    </div>
                    <Stats>
                        <h3>Stats</h3>
                    </Stats>
                    <Moves>
                        <Type>
                            <h3>Type</h3>
                            <div>
                                <p>{pokemonDetails.types.map(typeInfo => typeInfo.type.name).join( ' | ')}</p>
                                <p></p>
                            </div>
                        </Type>
                        <Move>
                            <h3>Moves</h3>
                            <p>{pokemonDetails.moves.map(moveInfo => moveInfo.move.name).join( '  |  ' )}</p>
                        </Move>
                    </Moves>
               </Conteudo> : <Loading><h2>Loading...</h2><img src="./img/pokeloading.gif"/></Loading>}

        </div>
    )
}

export default Detalhes;