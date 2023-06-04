import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import {check} from "./http/userApi";

const App = observer( () => {

  return (
    <BrowserRouter>
        <NavBar/>

        <AppRouter />
    </BrowserRouter>
  );
})

export default App;
