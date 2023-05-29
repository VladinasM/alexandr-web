import React, {useContext, useState} from 'react';
import style from '../styles/PersonalDataForm.css'
import {Button, Card, Form} from "react-bootstrap";
import InputMask from 'react-input-mask';
import {getUserAppointments, setUserData} from "../http/userApi";
import {LOGIN_ROUTE, PARKING_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";


const PersonalDataForm = observer (() => {
    const {user} = useContext(Context);
    const [phoneNumber, setPhoneNumber] = useState('')
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [carNumber, setCarNumber] = useState('')
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')

    const addData = async () => {
        const id = user.user.id;
        try{
            let data = await setUserData(phoneNumber, surname, name, id);
        }catch (e) {
            alert(e.response.data.message)
        }
    }
    const addCar = async () => {
        const id = user.user.id;
        try{
            // let car = await addCarToUser(id, carNumber, model, color)
        }catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <div className="position-absolute start-0">
        <Card style={{width:310, height:340, backgroundColor:"transparent"}} border={"white"} className="p-5">
            <Form>
                <h4>Добавить данные</h4>
                <Form.Group className="mb-3" controlId="formPhoneNumber">
                    <InputMask className="input-mask" mask="+7 999 999 99 99" maskChar=" " placeholder="Введите номер телефона"
                               value={phoneNumber}
                               onChange={e => setPhoneNumber(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSurname">
                    <InputMask className="input-mask" mask="" maskChar=" " placeholder="Фамилия"
                               value={surname}
                               onChange={e => setSurname(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <InputMask className="input-mask" mask="" maskChar=" " placeholder="Имя"
                               value={name}
                               onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <Button
                    onClick={addData}
                    variant="primary" type="submit">
                    Добавить
                </Button>
            </Form>
        </Card>
        <Card style={{width:310, height:340,  backgroundColor:"transparent"}} className="p-5">
            <Form>
                <h4>Добавить авто</h4>
                <Form.Group className="mb-3" controlId="formCarNumber">
                    <InputMask className="input-mask" mask="" maskChar=" " placeholder="Номер автомобиля"
                               value={carNumber}
                               onChange={e => setCarNumber(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCarModel">
                    <InputMask className="input-mask" mask="" maskChar=" " placeholder="Марка автомобиля"
                               value={model}
                               onChange={e => setModel(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formColor">
                    <InputMask className="input-mask" mask="" maskChar=" " placeholder="Цвет автомобиля"
                               value={color}
                               onChange={e => setColor(e.target.value)}
                    />
                </Form.Group>
                <Button
                    onClick={addCar}
                    variant="primary" type="submit">
                    Добавить
                </Button>
            </Form>
        </Card>
        </div>
    );
});

export default PersonalDataForm;