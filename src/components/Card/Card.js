import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import useBack from "../../components/hooks/useBack"
import GlobalStateContext from "../Contexts/GlobalStateContext";
import useRequestData from "../hooks/useRequestData";

const Box = styled.div`
    border-radius: 10px;
    width: 200px;
    height:200px;
    border-style: solid;
    border-color: black;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    align-items: center;
`


function Card(props) {
    const { pokedata, setPokedata } = useContext(GlobalStateContext)
    const [pokefoto, setPokeFoto] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams();

    // const pokemonsData = useRequestData({}, `${props.url}`)

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
        .then((response) => {
            setPokeFoto(response.data);
            setIsLoading(true);
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false)
            alert("Erro! Por favor, tente novamente");
        });
      }, [ `https://pokeapi.co/api/v2/pokemon/${props.name}/`]);



    return(
        <Box>
            <img>{props.imagem}</img>
            {isLoading ? <div><img src={pokefoto.sprites.front_default}></img></div> : <div>Loading...</div>}
            <p>Nome: {props.name}</p>
            <div>
                <button>Add a Pokedex</button>
                <button onClick={useBack(`/detalhes/${props.name}`)}>Detalhes</button>
            </div>
        </Box>
    )
}
export default Card;