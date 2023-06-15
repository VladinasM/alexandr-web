import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Button, Card, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {getUserData} from "../http/userApi";
import {getUserAppointments} from "../http/appointmentsApi";


const PersonalData = observer(() => {
  const {user} = useContext(Context);
  const [appointments, setAppointments] = useState([])

  const getData = async () => {
    const email = user.user.email
    return await getUserData(email);

  }
  const getUserApps = async () => {
    const id = user.user['_id']
    return await getUserAppointments(id)
  }

  useEffect(() => {
    getUserApps().then(data => setAppointments(data))
  }, [])
  return (
    <div className='mt-5'>
      <div style={{ position:'absolute', width: 450, height: 488, cursor: "pointer"}}>
        <div style={{textAlign: "center"}} className="d-flex flex-column align-items-center border border-2">
          <h1>Карточка пациента</h1>
          <Image
            style={{borderRadius: 100, margin: 0, padding: 0}}
            width={200} height={200}
            src={"https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"}/>
          <div className="bg-transparent w-75 m-4 p-3 rounded-4 border border-white">
            <div className="me-10">EMAIL: {user.user.email}</div>
            <div className="me-10">ИМЯ: {user.user.fullName}</div>
            <div className="me-10">Роль: {user.user.role}</div>
            <div className="me-10">Должность: {user.user.position || '-'}</div>
          </div>
        </div>
      </div>
      <table style={{marginLeft:'600px'}}>
        <tbody>
        <h5>История посещений</h5>
        {
          appointments.map((app, i) => {
              return <tr className='border border-2'>
                <td className='border border-2 p-2'>Номер телефона:<br/> {app.phoneNumber}</td>
                <td className='border border-2 p-2'>Причина обращения:<br/> {app.reason}</td>
                <td className='border border-2 p-2'>Дата:<br/> {app.date.toLocaleString('en-US').slice(0, -8).replace('T', '; ')}
                </td>
                <td className='border border-2 p-2'>Состояние:<br/> {app.patientState}</td>
                <td className='border border-2 p-2'>Описание:<br/> {app.description}</td>
              </tr>
            }
          )
        }

        </tbody>
      </table>
    </div>
  );
});

export default PersonalData;