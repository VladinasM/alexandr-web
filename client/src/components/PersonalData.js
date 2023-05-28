import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Button, Card, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {getCarData, getUserData} from "../http/userApi";


const PersonalData =observer (() => {
    const {user} = useContext(Context);
    console.log(user)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [parkingPlaceId, setParkingPlaceId] = useState('')
    const [carArray, setCarArray] = useState([])

    const getData = async () => {
        const id = user.user.id
        // let userData = await getUserData(id);
        // let carData = await getCarData(id);
        // setPhoneNumber(userData.phoneNumber)
        // setSurname(userData.surname)
        // setName(userData.name)
        // setParkingPlaceId(userData.parkingPlacePlaceId)
        // setCarArray(carData[0].cars)
        // return userData
    }

    useEffect(() => {
        // getData().then(data => data)
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
                        <Card.Text className="me-10">{user.user.email}</Card.Text>
                        <Card.Text className="me-10">{user.user.fullName}</Card.Text>
                        <Card.Text className="me-10">{surname} {name}</Card.Text>
                        <Card.Text className="me-10">{parkingPlaceId}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{width:400, cursor:"pointer", backgroundColor:"transparent"}} className="border border-bottom-0">
                <Card.Body style={{textAlign:"center"}} className="d-flex flex-column align-items-center">
                    <h5>Информация о парковочном месте</h5>
                    <div className="bg-transparent border border-white w-75 m-4 p-3 rounded-4">
                        <Card.Text className="me-10">Вы владеете парковочным местом под номером №{parkingPlaceId}</Card.Text>
                    </div>
                    <h5 className="mb-4">Информация об автомобиле:</h5>
                    <div className="bg-transparent w-75 p-3 rounded-4 border border-white">
                        <Card.Text className="me-10">Количество ваших автомобилей: {carArray.length}</Card.Text>
                    </div>
                    <div style={{backgroundColor:"transparent"}} className="p-3 rounded-4 mt-4">
                        {
                            carArray.map((car, i) => {
                                  return  <div className="bg-transparent border border-white p-4 m-3" style={{backgroundColor:"black", borderRadius:10}} key={car.number}>
                                        <Card.Text className="me-10"><span className="text-decoration-underline">Автомобиль {i+1}:</span></Card.Text>
                                        <Card.Text className="me-10">Номер автомобиля: {car.carNumber}</Card.Text>
                                        <Card.Text className="me-10">Модель автомобиля: {car.model}</Card.Text>
                                        <Card.Text className="me-10">Цвет: {car.color}</Card.Text>
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