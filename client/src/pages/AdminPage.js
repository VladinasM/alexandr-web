import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Card, Form, Row} from "react-bootstrap";
import {delUserAcc, getUsers, registration} from "../http/userApi";
import UserInAdminPage from "../components/UserInAdminPage";
import {Link} from "react-router-dom";
import {ADMIN_DELETE_ROUTE, ADMIN_REGISTER_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AdminPage = observer(() => {
  const {user} = useContext(Context);

  return (
    <div className='d-flex flex-column'>

      <div className='d-flex gap-3 justify-content-center'>
        <Link to={ADMIN_REGISTER_ROUTE} className='fs-3'>Страница регистрации</Link>
        <Link to={ADMIN_DELETE_ROUTE} className='fs-3'>Страница удаления</Link>
      </div>
      <table className='border border-2'>
        <tbody>
        {
          user.userList.map(user => <UserInAdminPage key={user['_id']} currUser={user}/>)
        }
        </tbody>
      </table>
    </div>
  );
});

export default AdminPage;