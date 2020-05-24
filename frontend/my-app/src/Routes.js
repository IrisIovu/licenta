import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./Components/Login/Login.js";
import NotFound from "./NotFound.js"

export default function Routes() {
    return (
        <Switch>
            
            <Route path = "/login" exact component = {Login}/>
        </Switch>
    )
}