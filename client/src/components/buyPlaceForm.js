import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Modal, Row} from "react-bootstrap";
import InputMask from 'react-input-mask';
import style from '../styles/PersonalDataForm.css'
import {Context} from "../index";
import {connectUserAndPlace, getUserData, setUserData} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {sellPlace} from "../http/appointmentsApi";
import {buyPlaceWithCard} from "../http/bankApi";


const BuyPlaceForm = observer(({id, cost, level, state, show, onHide}) => {
    const {user} = useContext(Context)
    const [cardNumber, setCardNumber] = useState('')
    const [validity, setValidity] = useState('')
    const [cvv, setCVV] = useState('')

    const sellParkingPlace = async () => {
        const userId = user.user.id
        try{
            const userData = await getUserData(userId);
            if(!!userData.parkingPlacePlaceId){
                alert("Вы не можете купить больше одного парковочного места")
                return
            }
            const buyPlace = await buyPlaceWithCard(cardNumber, validity, cvv, cost)
            const sell = await sellPlace(id);
            const connect = await connectUserAndPlace(userId, id)
            window.location.reload();
        }catch (e){
            alert(e.response.data.message)
        }
    }
    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Покупка места №{id}<br/> На {level} этаже<br/> Стоймостью {cost} рублей</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formCardNumber">
                            <InputMask className="input-mask" mask="9" maskChar=" " placeholder="Введите номер карты"
                                       value={cardNumber}
                                       onChange={e => setCardNumber(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Это безопасно. Система не хранит ваши данные.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCardDate">
                            <InputMask className="input-mask" mask="99/99" maskChar=" " placeholder="Срок действия"
                                       value={validity}
                                       onChange={e => setValidity(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCardCVV">
                            <InputMask className="input-mask" mask="999" maskChar=" " placeholder="CVV2/CVC2"
                                       value={cvv}
                                       onChange={e => setCVV(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            onClick={sellParkingPlace}
                            variant="primary" type="button">
                            Купить
                        </Button>
                        <Button
                            style={{marginLeft:"5px"}}
                            variant="secondary" onClick={onHide}>
                            Закрыть
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
});

export default BuyPlaceForm;