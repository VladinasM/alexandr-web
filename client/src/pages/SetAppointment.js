import React, {useContext, useRef, useState} from 'react';
import '../styles/style.css'
import {Context} from "../index";
import {setAppointment} from "../http/appointmentsApi";
import {MAIN_PAGE_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const SetAppointment = () => {
  const {user} = useContext(Context)
  const [phoneNumber, setPhoneNumber] = useState('');
  const today = new Date()
  const date = useRef(today);
  const navigate = useNavigate()

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value)
  }


  const formHandler = async (e) => {
    e.preventDefault()
    let data = await setAppointment(user.user.email, phoneNumber, date.current.value)
    const nav = () => navigate(MAIN_PAGE_ROUTE)
    nav()
  }

  return (
    <section className="contact" id="contact">

      <h1 className="heading">Записаться на приём</h1>

      <form onSubmit={formHandler}>

        <span>Ваш номер :</span>
        <input
          value={phoneNumber}
          onChange={phoneNumberHandler}
          type="number"
          placeholder="Введите номер"
          className="box"
          required
        />

        <span>Желаемая дата :</span>
        <input
          ref={date}
          type="datetime-local"
          className="box"
        />

        <input type="submit" value="записаться" className="btn"/>

      </form>
    </section>

  );
};

export default SetAppointment;