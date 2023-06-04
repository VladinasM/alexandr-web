import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Card, Form, Row} from "react-bootstrap";
import {delUserAcc, getUsers, registration} from "../http/userApi";
import UserInAdminPage from "../components/UserInAdminPage";

const AdminPage = observer(() => {
  const deleteEmail = useRef(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [position, setPosition] = useState('пациент');
  const [role, setRole] = useState('врач');
  const [isDisabled, setIsDisabled] = useState(true);
  const [userList, setUserList] = useState([]);

  console.log(userList)
  const register = async () => {
    try {
      await registration(email, password, role, position, fullName)
      getUsers().then(data => {
        setUserList(data)
      })

    } catch (e) {
      alert('Введены неверные данные')
    }
  }
  useEffect(() => {
    getUsers().then(data => {
      setUserList(data)
    })
  },[])
  const deleteAccount = async () => {
    const a = await delUserAcc(deleteEmail.current.value)
    getUsers().then(data => {
      setUserList(data)
    })
    alert("Пользователь удалён")
  }

  const handlePosition = (e) => {
    setPosition(e.target.value)
  }
  const handleRole = (e) => {
    setRole(e.target.value)
    if(e.target.value === 'доктор'){
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
      setPosition('')
    }
  }
  return (
    <>

    <div className='d-flex gap-3 justify-content-center'>
      <Card className='p-4'>
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
      <div className="d-flex justify-content-center gap-5">
        <Card className="d-flex justify-content-center align-items-center p-3" style={{width: 300}} border={"dark"}>
          <Form style={{width: 250}} className="d-block">
            <div className="text-lg-center">Удалить аккаунт пользователя</div>
            <Form.Control
              className="mt-3 mb-2" placeholder="Введите email пользователя"
              ref={deleteEmail}
            />
            <Button
              variant={"success"}
              onClick={deleteAccount}
            >Удалить пользователя</Button>
          </Form>
        </Card>
      </div>
    </div>
      <div>
        {
          userList.map(user => <UserInAdminPage key={user['_id']} user={user}/>)
        }
      </div>
    </>
  );
});

export default AdminPage;