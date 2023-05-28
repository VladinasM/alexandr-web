import React, {useContext, useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";
import BuyPlaceForm from "./buyPlaceForm";
import {Context} from "../index";
import {getUserData} from "../http/userApi";
import ConnectToPlace from "./ConnectToPlace";

const ParkingPlace = observer( ({id, cost, level, state}) => {
    const [buyPlaceFormVisible, setBuyPlaceFormVisible] = useState(false)
    const [connectToPlaceVisible, setConnectToPlaceVisible] = useState(false)
    const {user} = useContext(Context);
    const [isParking, setIsParking] = useState(null);
    const getUser = async () => {
        const id = user.user.id
        let userData = await getUserData(id);
        setIsParking(userData.parkingPlacePlaceId)
        return isParking
    }
    useEffect(()=> {
        getUser().then(data => data)
    },[isParking])

    return (
        <Card className="m-4" style={{ width: '12rem', height:233 }}>
            <Card.Body>
                <Card.Title>Место №{id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Цена:{cost}</Card.Subtitle>
                <Card.Text>Этаж №{level}</Card.Text>
                {
                    state?
                        <div style={{border:"5px solid green"}}><Card.Text>Состояние: Свободно</Card.Text></div>
                        :
                        <div style={{border:"5px solid red"}}><Card.Text>Состояние: Занято</Card.Text></div>
                }
                {
                    state?
                        <Button
                            onClick={() => setBuyPlaceFormVisible(true)}
                            style={{margin:"5px"}}
                            variant="outline-primary">Купить место</Button>
                        :
                    isParking?
                            <div></div>
                            :
                            <Button
                                onClick={() => setConnectToPlaceVisible(true)}
                            style={{margin:"5px"}}
                            variant="outline-primary">Добавиться</Button>

                }

            </Card.Body>
            <BuyPlaceForm id={id} cost={cost} level={level} state={state} show={buyPlaceFormVisible} onHide={() => setBuyPlaceFormVisible(!buyPlaceFormVisible)}/>
            <ConnectToPlace id={id} show={connectToPlaceVisible} onHide={() => setConnectToPlaceVisible(!connectToPlaceVisible)}/>
        </Card>

    );
});

export default ParkingPlace;