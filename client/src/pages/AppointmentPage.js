import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getAppointmentList} from "../http/appointmentsApi";
import AppointmentItem from "../components/AppointmentItem";

const AppointmentPage = observer(() => {
  const {appointment} = useContext(Context)

    useEffect(()=>{
        getAppointmentList().then((data)=>{
          appointment.setAppointments(data)
        })
    },[])
    return (
        <div className="min-vh-100">
            <div>
            </div>
        <Container>
            <div className="d-flex flex-column gap-2">
                {
                    appointment.appointments.map(app =>
                        <AppointmentItem key={app['_id']} app={app}/>
                    )
                }
            </div>
        </Container>

        </div>
    );
});

export default AppointmentPage;