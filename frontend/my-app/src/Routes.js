import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "D:/licentagithub/licenta/frontend/my-app/src/Components/Login/Login.js";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            </Switch>
    )
}