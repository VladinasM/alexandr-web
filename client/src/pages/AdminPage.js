import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {getPlaceOwner, setPlaceToFree} from "../http/appointmentsApi";
import {delUserAcc} from "../http/userApi";

const AdminPage = observer (() => {
    const {user} = useContext(Context)
    const [parkingPlace1, setParkingPlace1] = useState('')
    const [parkingPlace2, setParkingPlace2] = useState('')
    const [owners, setOwners] = useState(null)
    const [showOwners, setShowOwners] = useState(false)
    const [idToDelete, setIdToDelete] = useState('')
    const getOwner = async () => {
        const owner = await getPlaceOwner(parkingPlace1)
        setOwners(owner)
        setShowOwners(true)
    }
    const setPlaceTofree = async () => {
        const a = await setPlaceToFree(parkingPlace2)
        alert("Парковочное место освобождено")
    }
    const deleteAccount = async () => {
        const a = await delUserAcc(idToDelete)
        alert("Пользователь удалён")
    }
    return (
        <div>
            <div className="d-flex justify-content-center gap-5">
                <Card className="d-flex justify-content-center align-items-center p-3" style={{width:300}} border={"dark"}>
                    <Form style={{width:250}} className="d-block">
                        <div className="text-lg-center">Вывести всех владельцев парковочного места</div>
                        <Form.Control
                            className="mt-3 mb-2" placeholder="Введите номер места"
                            value={parkingPlace1}
                            onChange={e => setParkingPlace1(e.target.value)}
                        />
                            <Button
                                onClick={getOwner}
                                variant="secondary">Вывести</Button>
                            <Button
                                className="ms-2"
                                onClick={()=>setShowOwners(!showOwners)}
                                variant="secondary">Скрыть</Button>
                    </Form>
                    <div>---------------</div>
                    <Form style={{width:250}} className="d-block">
                        <div className="text-lg-center">Освободить место и отвязать пользователей</div>
                        <Form.Control
                            className="mt-3 mb-2" placeholder="Введите номер для очищения"
                            value={parkingPlace2}
                            onChange={e => setParkingPlace2(e.target.value)}
                        />
                        <Button
                            onClick={setPlaceTofree}
                            variant="secondary">Освободить</Button>
                    </Form>
                    <div>---------------</div>
                    <Form style={{width:250}} className="d-block">
                        <div className="text-lg-center">Удалить аккаунт пользователя</div>
                        <Form.Control
                            className="mt-3 mb-2" placeholder="Введите id пользователя"
                            value={idToDelete}
                            onChange={e => setIdToDelete(e.target.value)}
                        />
                        <Button
                            onClick={deleteAccount}
                            variant="secondary">Удалить</Button>
                    </Form>
                </Card>
                <Card className="d-flex justify-content-center align-items-center" style={{width:400}} border={"dark"}>
                        {
                            !!owners && showOwners ?
                                  owners.length === 0 ? <div>Владельцев нет, место свободно</div>
                                    :
                                  owners.map((owner, i) =>
                                      <div key={owner.id} className="text-lg-center p-3 m-3 border border-dark">
                                          Владелец № {i+1}: <br/>id: {owner.id},<br/>
                                          Имя: {owner.surname ? owner.surname : "Не задано"} {owner.name}</div>
                                  )
                                :
                                <div></div>
                        }
                </Card>
            </div>
        </div>
    );
});

export default AdminPage;