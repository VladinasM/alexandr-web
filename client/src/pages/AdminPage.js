import React, {useContext, useRef, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, Form, Row} from "react-bootstrap";
import {delUserAcc} from "../http/userApi";

const AdminPage = observer (() => {
    const email = useRef(null)

    const deleteAccount = async () => {
        const a = await delUserAcc(email.current.value)
        alert("Пользователь удалён")
    }
    return (
        <div>
            <div className="d-flex justify-content-center gap-5">
                <Card className="d-flex justify-content-center align-items-center p-3" style={{width:300}} border={"dark"}>
                    <Form style={{width:250}} className="d-block">
                        <div className="text-lg-center">Удалить аккаунт пользователя</div>
                        <Form.Control
                            className="mt-3 mb-2" placeholder="Введите email пользователя"
                            ref={email}
                        />
                        <Button
                          variant={"success"}
                          onClick={deleteAccount}
                        >Удалить пользователя</Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
});

export default AdminPage;