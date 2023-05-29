import React, {useContext, useEffect, useState} from 'react';
import ChooseLevel from "../components/ChooseLevel";
import {Button, Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getAppointmentList} from "../http/appointmentsApi";
import BuyPlaceForm from "../components/buyPlaceForm";
import AppointmentItem from "../components/AppointmentItem";


const AppointmentPage = observer (() => {
    const {appointment} = useContext(Context)
    useEffect(()=>{
        getAppointmentList().then((data)=>appointment.setAppointments(data))
    },[])
    return (
        <div className="min-vh-100">
            <div>
            <ChooseLevel/>
            </div>
        <Container>
            <Row>
                {
                    appointment.appointment.map(place =>
                        <AppointmentItem key={place.placeId} id={place.placeId} cost={place.placeCost} level={place.levelLevelId} state={place.state}/>
                    )
                }
            </Row>
        </Container>

        </div>
    );
});

export default AppointmentPage;