import styled from "styled-components";
import useBack from "../../components/hooks/useBack";
import Card from "../../components/Card/Card";

const HeaderDiv = styled.div `
    background-color: #FFCB05;
    width: 100vw;
    height: 15vh;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap: 35%;
`
const Botao = styled.button`
   margin-left: 20px;
`
const Catalogo = styled.div`
    margin: 1em 0.5em;
    display: grid;
    grid-template: 1fr 1fr / repeat(3, 1fr);
    gap: 0.5em;
    justify-items: center;    
`

const Pokedex = () => {
    return(
        <div> 
            <HeaderDiv>
                <Botao onClick={useBack('/')} >Voltar para lista </Botao>
                <h1>Pokedex</h1>
            </HeaderDiv>
            <Catalogo>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                       
            </Catalogo>
            
        </div>
    )
}
export default Pokedex;