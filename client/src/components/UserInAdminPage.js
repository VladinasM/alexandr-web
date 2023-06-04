import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import {Button, Form} from "react-bootstrap";
import {updateUserInfo} from "../http/userApi";

const UserInAdminPage = ({user}) => {
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
  const [fullName, setFullName] = useState(user.fullName)
  const [position, setPosition] = useState(user.position);
  const [role, setRole] = useState(user.role);

  const updateInfo = async () => {
    console.log(email, password, role, position, fullName)
    await updateUserInfo(user['_id'], email, password, role, position, fullName)
  }

  return (
    <Card style={{width: '100%', cursor: "pointer", backgroundColor: "lightgray"}}
          className=" d-flex flex-column border border-bottom-0 mb-3 align-items-center">
      <Card.Body style={{textAlign: "center"}} className="d-flex align-items-center">
        <div style={{backgroundColor: "transparent"}} className="p-1 rounded-4 mt-2 w-100">
          <div className="bg-transparent border border-3 p-4 m-3 d-flex justify-content-between"
               style={{borderRadius: 10}}>
            <div>
              Email:
              <Form.Control
                className="mt-3" placeholder="Email..."
                value={email}
                onChange={e => setEmail(e.target.value)
                }
              />
            </div>
            <div>
              Пароль
            <Form.Control
              className="mt-3" placeholder="Пароль..."
              value={password}
              onChange={e => setPassword(e.target.value)
              }
            />
            </div>
            <div>
              Роль
            <Form.Control
              className="mt-3" placeholder="Роль..."
              value={role}
              onChange={e => setRole(e.target.value)
              }
            />
            </div>
            <div>
              Должность
            <Form.Control
              className="mt-3" placeholder="Должность..."
              value={position}
              onChange={e => setPosition(e.target.value)
              }
            />
            </div>
            <div>
              Фамилия и имя
            <Form.Control
              className="mt-3" placeholder="Фамилия и имя..."
              value={fullName}
              onChange={e => setFullName(e.target.value)
              }
            />
            </div>
          </div>
        </div>
      </Card.Body>
      <Button
        style={{width: '30%', marginBottom: 10, marginTop: -10}}
        variant={"success"}
        onClick={updateInfo}
      >Обновить данные</Button>
    </Card>

  );
};

export default UserInAdminPage;