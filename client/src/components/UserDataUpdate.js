import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getUsers, updateUserInfo} from "../http/userApi";



const UserDataUpdate = observer(({ show, onHide, currUser}) => {
  const {user} = useContext(Context)
  const [email, setEmail] = useState(currUser.email);
  const [password, setPassword] = useState(currUser.password);
  const [role, setRole] = useState(currUser.role);
  const [position, setPosition] = useState(currUser.position);
  const [fullName, setFullName] = useState(currUser.fullName);

  const dataUpdate = async () => {
    await updateUserInfo(currUser['_id'], email, password, role, position, fullName)
    getUsers().then(data => user.setUserList(data))
  }

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <div className='border border-2'>
          <div className='border border-2 p-4'>
            Email:
            <Form.Control
              className="mt-3" placeholder="Email..."
              value={email}
              onChange={e => setEmail(e.target.value)
              }
            />
          </div>
          <div className='border border-2 p-4'>
            Пароль
            <Form.Control
              className="mt-3" placeholder="Пароль..."
              value={password}
              onChange={e => setPassword(e.target.value)
              }
            />
          </div>
          <div className='border border-2 p-4'>
            Роль
            <Form.Control
              className="mt-3" placeholder="Роль..."
              value={role}
              onChange={e => setRole(e.target.value)
              }
            />
          </div>
          <div className='border border-2 p-4'>
            Должность
            <Form.Control
              className="mt-3" placeholder="Должность..."
              value={position}
              onChange={e => setPosition(e.target.value)
              }
            />
          </div>
          <div className='border border-2 p-4'>
            Фамилия и имя
            <Form.Control
              className="mt-3" placeholder="Фамилия и имя..."
              value={fullName}
              onChange={e => setFullName(e.target.value)
              }
            />
          </div>
          <div className='border border-2 p-4'>
            <Button
              variant={"success"}
              onClick={dataUpdate}
            >Обновить данные</Button>
          </div>
        </div>
      </Modal>
    </>
  );
});

export default UserDataUpdate;