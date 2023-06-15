import React, {useContext, useRef, useState} from 'react';
import {Button, Card, Container, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {deleteAppointment, getAppointmentList, updateAppointment} from "../http/appointmentsApi";



const AppointmentDataUpdate = observer(({ show, onHide, app}) => {
  const {user, appointment} = useContext(Context)
  const patientState = useRef(null)
  const descr = useRef(null)
  const stateHandler = async () => {
    await updateAppointment(app['_id'], patientState.current.value, descr.current.value)
    appointment.setAppointments(await getAppointmentList())
  }
  const deleteApp = async () => {
    await deleteAppointment(app['_id'])
    appointment.setAppointments(await getAppointmentList())
  }

  return (
    <>
      <Modal show={show} onHide={onHide}>
        {
          user.user.role === 'доктор' &&
          <div className='border border-2'>
            <Form.Control
              className="mt-3" placeholder="Состояние заявки"
              ref={patientState}
            />
            <br/>
            <Form.Control className="mt-3"
                          ref={descr}
                          placeholder='Описание проблемы'/>
            <Button
              variant={"success"}
              onClick={stateHandler}
            >Обновить данные</Button>
            <Button
              style={{backgroundColor:'red'}}
              onClick={deleteApp}
            >Удалить заявку</Button>
          </div>
        }
      </Modal>
    </>
  );
});

export default AppointmentDataUpdate;