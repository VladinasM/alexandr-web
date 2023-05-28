import React, {useContext, useEffect, useState} from 'react';
import ChooseLevel from "../components/ChooseLevel";
import {Button, Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getFreePlaces} from "../http/parkingPlaceApi";
import BuyPlaceForm from "../components/buyPlaceForm";
import ParkingPlace from "../components/ParkingPlace";


const Parking = observer (() => {
    const {parkingPlace} = useContext(Context)
    useEffect(()=>{
        getFreePlaces().then((data)=>parkingPlace.setParkingPlaces(data))
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
                        <ParkingPlace key={place.placeId} id={place.placeId} cost={place.placeCost} level={place.levelLevelId} state={place.state}/>
                    )
                }
            </Row>
        </Container>

        </div>
    );
});

export default Parking;