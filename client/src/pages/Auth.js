import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, PARKING_ROUTE, MAIN_PAGE_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
  const {user} = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [position, setPosition] = useState('пациент');

  const handlePosition = (e) => {
    setPosition(e.target.value)
  }

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password, fullName, position)
      }
      const nav = () => navigate(MAIN_PAGE_ROUTE)
      nav()
      console.log(data)
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
          <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
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
            {
              !isLogin &&
              <Form.Control className="mt-3 fs-1" placeholder="Введите фамилию и имя"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
              />
            }
            {
              !isLogin &&
              <label htmlFor="пациент">
                <input className="mt-3 fs-1"
                       onChange={handlePosition}
                       value='пациент'
                       id='пациент'
                       name='position'
                       type='radio'
                />
                Зарегистрироваться как пациент
              </label>
            }
            {
              !isLogin &&
              <label htmlFor="врач">
                <input className="mt-3 fs-1"
                       onChange={handlePosition}
                       value='врач'
                       id='врач'
                       name='position'
                       type='radio'
                />
                Зарегистрироваться как врач
              </label>
            }
            {
              !isLogin &&
              <label htmlFor="медсестра">
                <input className="mt-3 fs-1"
                       onChange={handlePosition}
                       value='медсестра'
                       id='медсестра'
                       name='position'
                       type='radio'
                />
                Зарегистрироваться как медсестра
              </label>
            }
            <Row className="d-flex justify-content-between mt-3 px-3">
              {isLogin ?
                <div className="mb-3">
                  Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
                </div>
                :
                <div className="mb-3">
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                </div>}
              <Button
                variant={"success"}
                onClick={click}
              >{isLogin ? "Войти" : "Регистрация"}</Button>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
});

export default Auth;