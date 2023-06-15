import React, {useContext, useRef} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {delUserAcc, getUsers} from "../http/userApi";
import {Context} from "../index";
import {ADMIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const DeleteUser = () => {
  const {user} = useContext(Context)
  const deleteEmail = useRef(null)
  const navigate = useNavigate();

  const deleteAccount = async () => {
    const a = await delUserAcc(deleteEmail.current.value)
    getUsers().then(data => {
      user.setUserList(data)
    })
    const nav = () => navigate(ADMIN_ROUTE)
    nav()
  }

  return (
    <div className='p-4 w-25 m-auto mt-5'>
      <Card className="d-flex justify-content-center align-items-center p-3" border={"dark"}>
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
  );
};

export default DeleteUser;