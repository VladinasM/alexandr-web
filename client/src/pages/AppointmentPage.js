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
            <br/>
          <table className='border border-2 w-100  me-3'>
            <tbody>
                {
                    appointment.appointments.map(app =>
                        <AppointmentItem key={app['_id']} app={app}/>
                    )
                }
            </tbody>
          </table>
        </div>
    );
});

export default AppointmentPage;