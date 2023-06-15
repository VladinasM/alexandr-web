import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import { getUsers} from "./http/userApi";

const App = observer( () => {
  const {user} = useContext(Context);

  useEffect(() => {
    getUsers().then(data => {
      user.setUserList(data)
    })
  }, [])

  return (
    <BrowserRouter>
        <NavBar/>

        <AppRouter />
    </BrowserRouter>
  );
})

export default App;
