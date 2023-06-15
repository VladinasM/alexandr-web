import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import UserDataUpdate from "./UserDataUpdate";

const UserInAdminPage = ({user}) => {
  const [showModal, setShowModal] = useState(false);

  const onClickhandler = () => {
    setShowModal(true)
  }

  return (
    <>
      <tr className='border border-2'>
        <td className='border border-2 p-5'>
          Email:
          <br/>
          {user.email || 'Отсутствует'}
        </td>
        <td className='border border-2 p-5'>
          Пароль:
          <br/>
          {user.password || 'Отсутствует'}
        </td>
        <td className='border border-2 p-5'>
          Роль:
          <br/>
          {user.role || 'Отсутствует'}
        </td>
        <td className='border border-2 p-5'>
          Должность:
          <br/>
          {user.position || 'Отсутствует'}
        </td>
        <td className='border border-2 p-5'>
          Фамилия и имя:
          <br/>
          {user.fullName || 'Отсутствует'}
        </td>
        <td className='border border-2 p-5'>
          <Button
            variant={"success"}
            onClick={onClickhandler}
          >Обновить данные</Button>
        </td>
      </tr>
      <UserDataUpdate
        show={showModal}
        currUser={user}
        onHide={() => setShowModal(false)}
      />
    </>
  );
};


export default UserInAdminPage;

