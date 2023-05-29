import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import InputMask from "react-input-mask";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {connectUserAndPlace, getUserData} from "../http/userApi";
import {buyPlaceWithCard} from "../http/bankApi";
import {sellPlace} from "../http/appointmentsApi";

const ConnectToPlace = observer (({id, show, onHide}) => {
    const {user} = useContext(Context)
    const [secretKey, setSecretKey] = useState('')
    const connect = async () => {
        const userId = user.user.id
        try{
            const con = await connectUserAndPlace(userId, id)
            window.location.reload();
        }catch (e){
            alert(e.response.data.message)
        }
    }
    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Присоединиться к месту №{id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formCardNumber">
                            <InputMask className="input-mask" mask="" maskChar=" " placeholder="Введите секретный ключ"
                                       value={secretKey}
                                       onChange={e => setSecretKey(e.target.value)}
                            />

                        </Form.Group>
                        <Button
                            onClick={connect}
                            variant="primary" type="button">
                            Присоединиться
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

export default ConnectToPlace;