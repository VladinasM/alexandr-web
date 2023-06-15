import React, {useContext, useEffect, useRef, useState} from 'react';
import Card from "react-bootstrap/Card";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Form} from "react-bootstrap";
import {deleteAppointment, getAppointmentList, updateAppointment} from "../http/appointmentsApi";
import AppointmentDataUpdate from "./AppointmentDataUpdate";

const AppointmentItem = observer(({app}) => {
  const {user} = useContext(Context)
  const [showModal, setShowModal] = useState(false);

  const onClickhandler = () => {
    setShowModal(true)
  }

  return (
    <>
      <tr className='border border-2'>
        <td className='border border-2 p-2'>
          Номер телефона:<br/> {app.phoneNumber}
        </td>
        <td className='border border-2 p-2'>
          Причина обращения:<br/> {app.reason}
        </td>
        <td className='border border-2 p-2'>
          Email:<br/> {app.email}
        </td>
        <td className='border border-2 p-2'>
          Дата: {app.date.toLocaleString('en-US').slice(0, -8).replace('T', '; ')}
        </td>
        <td className='border border-2 p-5'>
          Состояние:<br/> {app.patientState}
        </td>
        <td className='border border-2 p-5'>
          Описание:<br/> {app.description}
        </td>
        {
          user.user.role === 'доктор' &&
          <td className='border border-2 p-2'>
            <Button onClick={onClickhandler}>Изменить</Button>
          </td>
        }
        </tr>
      <AppointmentDataUpdate app={app} show={showModal} onHide={() => setShowModal(false)} />
    </>

  );
});

export default AppointmentItem;