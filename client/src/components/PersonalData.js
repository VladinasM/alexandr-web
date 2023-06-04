import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Button, Card, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { getUserData} from "../http/userApi";
import {getUserAppointments} from "../http/appointmentsApi";


const PersonalData =observer (() => {
    const {user} = useContext(Context);
    console.log(user.user)
    const [userData, setUserData] = useState({})
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
        // getData().then(data => setUserData(data))
        getUserApps().then(data => setAppointments(data))
    }, [])
    return (
        <div className="d-flex justify-content-between gap-5 me-5">
            <Card style={{width:450, height:488, cursor:"pointer", backgroundColor:"lightgray"}}>
                <Card.Body style={{textAlign:"center"}} className="d-flex flex-column align-items-center">
                    <h1>Карточка пациента</h1>
                    <Image
                        style={{borderRadius:100, margin:0, padding:0}}
                        width={200} height={200}
                        src={"https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"}/>
                    <div className="bg-transparent w-75 m-4 p-3 rounded-4 border border-white">
                        <Card.Text className="me-10">EMAIL: {user.user.email}</Card.Text>
                        {/*<Card.Text className="me-10">ИМЯ: {userData.fullName}</Card.Text>*/}
                    </div>
                </Card.Body>
            </Card>
            <Card style={{   cursor:"pointer", backgroundColor:"lightgray"}} className="border border-bottom-0">
                <Card.Body style={{textAlign:"center"}} className="d-flex flex-column align-items-center">
                    <h5>История посещений</h5>
                    <div style={{backgroundColor:"transparent"}} className="p-3 rounded-4 mt-4">
                        {
                            appointments.map((app, i) => {
                                  return  <div className="bg-transparent border border-3 p-4 m-3 d-flex gap-3" style={{ borderRadius:10}}>
                                        <Card.Text className="me-10">Номер телефона:<br/> {app.phoneNumber}</Card.Text>
                                        <Card.Text className="me-10">Причина обращения:<br/> {app.reason}</Card.Text>
                                        <Card.Text className="me-10">Дата:<br/> {app.date.toLocaleString('en-US').slice(0, -8).replace('T', '; ')}</Card.Text>
                                        <Card.Text className="me-10">Состояние:<br/> {app.patientState}</Card.Text>
                                    </div>
                                }
                            )
                        }

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
});

export default PersonalData;