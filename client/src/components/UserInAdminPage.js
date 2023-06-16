import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import UserDataUpdate from "./UserDataUpdate";
import {delUserAcc, getUsers} from "../http/userApi";
import {Context} from "../index";

const UserInAdminPage = ({currUser}) => {
  const [showModal, setShowModal] = useState(false);
  const {user} = useContext(Context)

  const onClickhandler = () => {
    setShowModal(true)
  }

  const deleteAccount = async () => {
    const a = await delUserAcc(currUser['_id'])
    getUsers().then(data => {
      user.setUserList(data)
    })
  }

  return (
    <>
      <tr className='border border-2'>
        <td className='border border-2 p-5'>
          Email:
          <br/>
          {currUser.email || 'Отсутствует'}
        </td>
        <td className='border border-2 p-5'>
          Пароль:
          <br/>
          {currUser.password || 'Отсутствует'}
        </td>
        <td className='border border-2 p-5'>
          Роль:
          <br/>
          {currUser.role || 'Отсутствует'}
        </td>
        <td className='border border-2 p-5'>
          Должность:
          <br/>
          {currUser.position || 'Отсутствует'}
        </td>
        <td className='border border-2 p-5'>
          Фамилия и имя:
          <br/>
          {currUser.fullName || 'Отсутствует'}
        </td>
        <td className='border border-2 p-3'>
          <Button
            variant={"success"}
            onClick={onClickhandler}
          >Обновить данные</Button>
          <Button
            className='d-inline-block d-block'
            variant={"success"}
            onClick={deleteAccount}
          >Удалить пользователя</Button>
        </td>
      </tr>
      <UserDataUpdate
        show={showModal}
        currUser={currUser}
        onHide={() => setShowModal(false)}
      />
    </>
  );
};


export default UserInAdminPage;

