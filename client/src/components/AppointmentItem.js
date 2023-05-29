import React, {useContext, useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getUserData} from "../http/userApi";
import {getUserAppointments} from "../http/appointmentsApi";

const AppointmentItem = observer(({app}) => {
  const {user} = useContext(Context);

  return (
    <Card style={{width:'100%', cursor: "pointer", backgroundColor: "lightgray"}} className=" d-block border border-bottom-0">
      <Card.Body style={{textAlign: "center"}} className="d-flex align-items-center">
        <div style={{backgroundColor: "transparent"}} className="p-3 rounded-4 mt-4 w-100">
          <div className="bg-transparent border border-3 p-4 m-3 d-flex justify-content-between" style={{borderRadius: 10}}>
            <Card.Text className="me-10">Номер телефона: {app.phoneNumber}</Card.Text>
            <Card.Text className="me-10">Причина обращения: {app.reason}</Card.Text>
            <Card.Text
              className="me-10">Дата: {app.date.toLocaleString('en-US').slice(0, -8).replace('T', '; ')}</Card.Text>
            <Card.Text className="me-10">Состояние: {app.patientState}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>

  );
});

export default AppointmentItem;