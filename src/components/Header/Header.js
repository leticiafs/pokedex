import styled from "styled-components";


const HeaderDiv = styled.div `
    background-color: #FFCB05;
    width: 100vw;
    height: 15vh;
    display:flex;
    justify-content: flex-start;
`


function Header() {
    return(
        <HeaderDiv>
            <button>Ver minha Pokedex</button>
            <h1>Pokedex</h1>

        </HeaderDiv>
    )
}
 export default Header;