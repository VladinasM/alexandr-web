import React, {useContext, useEffect, useRef, useState} from 'react';
import Card from "react-bootstrap/Card";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Form} from "react-bootstrap";
import {updateAppointment} from "../http/appointmentsApi";

const AppointmentItem = observer(({app}) => {
  const {user} = useContext(Context);
  console.log(user)
  const patientState = useRef(null)
  const descr = useRef(null)

  const stateHandler = async () => {
     await updateAppointment(app.email, patientState.current.value, descr.current.value)
    window.location.reload();
  }

  return (
    <Card style={{width:'100%', cursor: "pointer", backgroundColor: "lightgray"}} className=" d-block border border-bottom-0">
      <Card.Body style={{textAlign: "center"}} className="d-flex align-items-center">
        <div style={{backgroundColor: "transparent"}} className="p-3 rounded-4 mt-4 w-100">
          <div className="bg-transparent border border-3 p-4 m-3 d-flex justify-content-between" style={{borderRadius: 10}}>
            <Card.Text className="me-10">Номер телефона:<br/> {app.phoneNumber}</Card.Text>
            <Card.Text className="me-10">Причина обращения:<br/> {app.reason}</Card.Text>
            <Card.Text className="me-10">Email:<br/> {app.email}</Card.Text>
            <Card.Text
              className="me-10">Дата: {app.date.toLocaleString('en-US').slice(0, -8).replace('T', '; ')}</Card.Text>
            <Card.Text className="me-10">Состояние:<br/> {app.patientState}</Card.Text>
            <Card.Text className="me-10">Описание:<br/> {app.description}</Card.Text>
          </div>
        </div>
      </Card.Body>
      {
        user.user.role === 'DOCTOR' &&
        <div className='d-flex justify-content-center flex-column'>
          <Form.Control
            className="mt-3" placeholder="Состояние заявки"
            ref={patientState}
          />
          <br/>
          <textarea ref={descr}  placeholder='Описание проблемы'/>
          <Button
            variant={"success"}
            onClick={stateHandler}
          >Обновить данные</Button>
        </div>
      }
    </Card>

  );
});

export default AppointmentItem;