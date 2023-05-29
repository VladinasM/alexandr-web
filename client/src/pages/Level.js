import React, {useContext, useEffect} from 'react';
import {Card, Container, Row} from "react-bootstrap";
import {LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getAppointmentList, getPlacesOnLevel} from "../http/appointmentsApi";
import {useParams} from "react-router-dom";
import ChooseLevel from "../components/ChooseLevel";
import AppointmentItem from "../components/AppointmentItem";



const Level =observer( () => {
    const {parkingPlace} = useContext(Context)
    const {id} = useParams();
    useEffect(()=>{
        getPlacesOnLevel(id).then((data)=>parkingPlace.setParkingPlaces(data))
    },[])
    return (
        <div className="min-vh-100">
            <div>
                <ChooseLevel/>
            </div>
            <Container>
                <Row>
                    {
                        parkingPlace.places.map(place =>
                            <AppointmentItem key={place.placeId} id={place.placeId} cost={place.placeCost} level={place.levelLevelId} state={place.state}/>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
});

export default Level;