import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import { MAIN_PAGE_ROUTE} from "../utils/consts";
import {login} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
  const {user} = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      data = await login(email, password)
      const nav = () => navigate(MAIN_PAGE_ROUTE)
      nav()
      user.setUser(data)
      user.setIsAuth(true)

    } catch (e) {
      alert('Введены неверные данные')
    }
  }
  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center"
                 style={{height: window.innerHeight - 54}}>
        <Card style={{width: 600}} className="p-5 bg-light border fs-3">
          <h2 className="m-auto">Авторизация</h2>
          <Form className="d-flex flex-column">
            <Form.Control
              className="mt-3 fs-1" placeholder="Введите ваш email..."
              value={email}
              onChange={e => setEmail(e.target.value)
              }
            />
            <Form.Control className="mt-3 fs-1" placeholder="Введите ваш пароль..."
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          type="password"
            />
              <Button
                variant={"success"}
                onClick={click}
              >Войти</Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
});

export default Auth;