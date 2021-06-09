import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Pokedex from "../Pages/Pokedex/Pokedex";
import Detalhes from "../Pages/Detalhes/Detalhes";

const Router = () => {
    
    return(
        <BrowserRouter>
            <Switch>
                
                <Route exact path={"/"}>
                    <Home/>
                </Route>
                <Route exact path={"/pokedex"}>
                    <Pokedex/>
                </Route>
                <Route exact path={"/detalhes/:pokeId"}>
                    <Detalhes/>
                </Route>
                <Route>
                    <div> Página não encontrada</div>
                </Route>

            </Switch>
        </BrowserRouter>

    )
}

export default Router;