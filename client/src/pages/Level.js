import React, {useContext, useEffect} from 'react';
import {Card, Container, Row} from "react-bootstrap";
import {LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import AppointmentItem from "../components/AppointmentItem";



const Level =observer( () => {
    const {parkingPlace} = useContext(Context)
    const {id} = useParams();
    return (
        <div className="min-vh-100">
            <div>
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