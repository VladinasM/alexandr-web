import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {PERSONAL_ROUTE, LOGIN_ROUTE, MAIN_PAGE_ROUTE, ADMIN_ROUTE} from "../utils/consts";
import {HashLink} from "react-router-hash-link";
import {observer} from "mobx-react-lite";
import '../styles/style.css'

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    const toLogin = () => {
      navigate(LOGIN_ROUTE)
    }
    toLogin()
  }
  return (
    <Navbar className="header">
      <Container>
        <Link to={MAIN_PAGE_ROUTE} className="logo"> <i className="fas fa-tooth"></i> dentist </Link>
        <nav className="navbar">
          <HashLink to={`${MAIN_PAGE_ROUTE}#home`}>Главная</HashLink>
          <HashLink to={`${MAIN_PAGE_ROUTE}#about`}>О нас</HashLink>
          <HashLink to={`${MAIN_PAGE_ROUTE}#services`}>Услуги</HashLink>
          <HashLink to={`${MAIN_PAGE_ROUTE}#team`}>Команда</HashLink>
          <HashLink to={`${MAIN_PAGE_ROUTE}#pricing`}>Цены</HashLink>
        </nav>
        {user.isAuth ?
          <Nav className="ml-auto">
            {
              user.user.role === "админ" ?
                <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button> : ''
            }
            {
              user.user.role === "пациент" &&
              <Button className="btn" onClick={() => navigate(PERSONAL_ROUTE)}>Личный кабинет</Button>
            }
            <Button className="btn" onClick={() => logOut()}>Выйти</Button>
            <div style={{fontSize:'20px'}}>Роль: {user.user.role}</div>
          </Nav>
          :
          <Nav className="ml-auto">
            <Button className="btn" onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
          </Nav>}
      </Container>
    </Navbar>
  );
});

export default NavBar;