import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {getUsers, registration} from "../http/userApi";
import {Context} from "../index";
import {ADMIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const RegisterNewUser = () => {
  const {user} = useContext(Context);
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [position, setPosition] = useState('пациент');
  const [role, setRole] = useState('врач');
  const [isDisabled, setIsDisabled] = useState(true);

  const handlePosition = (e) => {
    setPosition(e.target.value)
  }
  const handleRole = (e) => {
    setRole(e.target.value)
    if (e.target.value === 'доктор') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
      setPosition('')
    }
  }

  const register = async () => {
    try {
      await registration(email, password, role, position, fullName)
      getUsers().then(data => {
        user.setUserList(data)
      })
      const nav = () => navigate(ADMIN_ROUTE)
      nav()

    } catch (e) {
      alert('Введены неверные данные')
    }
  }

  return (
    <div>
      <Card className='p-4 w-50 m-auto mt-5'>
        <h2 className="m-auto">Зарегистрировать</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3" placeholder="Email..."
            value={email}
            onChange={e => setEmail(e.target.value)
            }
          />
          <Form.Control className="mt-3" placeholder="Пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
          />
          <Form.Control className="mt-3" placeholder="Фамилия и имя"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
          />
          <div className='d-flex gap-3'>
            <label htmlFor="пациент">
              <input className="mt-3 fs-1"
                     onChange={handleRole}
                     value='пациент'
                     id='пациент'
                     name='role'
                     type='radio'
              />
              Роль пациент
            </label>
            <label htmlFor="доктор">
              <input className="mt-3 fs-1"
                     onChange={handleRole}
                     value='доктор'
                     id='доктор'
                     name='role'
                     type='radio'
              />
              Роль доктор
            </label>
          </div>
          <div className='d-flex gap-3'>
            <label htmlFor="врач">
              <input className="mt-3 fs-1"
                     onChange={handlePosition}
                     value='врач'
                     id='врач'
                     name='position'
                     type='radio'
                     disabled={isDisabled}
              />
              Врач
            </label>
            <label htmlFor="медсестра">
              <input className="mt-3 fs-1"
                     onChange={handlePosition}
                     value='медсестра'
                     id='медсестра'
                     name='position'
                     type='radio'
                     disabled={isDisabled}
              />
              Медсестра(для роли доктор)
            </label>
          </div>

          <Button
            variant={"success"}
            onClick={register}
          >Зарегистрировать</Button>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterNewUser;