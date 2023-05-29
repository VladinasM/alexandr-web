import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { Link } from 'react-router-dom';
import services1 from '../assets/services-1.webp'
import services2 from '../assets/services-2.webp'
import services3 from '../assets/services-3.webp'

import about from '../assets/about.webp'
import '../styles/style.css'
import Team from "../components/Team";
import SetAppointment from "./SetAppointment";
import {SET_APPOINTMENT_ROUTE} from "../utils/consts";



const MainPage =observer( () => {
    const {user} = useContext(Context)
    return (
    <React.Fragment>

    <section className="home" id="home">

        <div className="content">
            <h3>Сделай улыбку белоснежной</h3>
            <p>Клиника создана коллективом стоматологов высокой квалификации, имеющих огромный опыт практической работы и прошедших стажировку в ведущих западных стоматологических клиниках, а также постоянно повышающих свою квалификацию, проходя различные обучающие курсы по применению современных технологий.</p>
            <Link to={SET_APPOINTMENT_ROUTE} class="btn">Записаться на приём</Link>
        </div>


    </section>

    <section className="about" id="about">

        <h1 className="heading"> о нас </h1>

        <div className="row">

            <div className="image">
                <img src={about} alt=""/>
            </div>

            <div className="content">
                <h3>Наша клиника создана для того, чтобы вы чаще улыбались</h3>
                <p>Современная стоматологическая клиника, специализирующаяся на передовой диагностике и лечении стоматологических заболеваний.</p>
                <p>Мы гарантируем комплексную диагностику и предлагаем различные формы стоматологической помощи, хирургические процедуры и косметические стоматологические услуги.</p>
                <Link to="#" class="btn">Читать полностью</Link>
            </div>

        </div>

    </section>

    <section className="services" id="services">

        <h1 className="heading"> Наши услуги</h1>

        <div className="box-container">

            <div className="box">
                <img src={services1} alt=""/>
                <h3>Онлайн расписание</h3>
            </div>

            <div className="box">
                <img src={services2} alt=""/>
                <h3>Косметические услуги</h3>
            </div>

            <div className="box">
                <img src={services3} alt=""/>
                <h3>Эксперты по гигиене полости рта</h3>
            </div>

        </div>

    </section>

    <Team/>

    <section className="pricing" id="pricing">

        <h1 className="heading">Цены</h1>

        <div className="box-container">

            <div className="box">
                <h3 className="title">базовый</h3>
                <div className="price">
                    <span className="currency">Р</span>
                    <span className="amount">3000</span>
                    <span className="duration"> /год</span>
                </div>
                <ul>
                    <li> <i className="fas fa-check"></i> ВЫРАВНИВАНИЕ</li>
                    <li> <i className="fas fa-check"></i> осмотр полости</li>
                    <li> <i className="fas fa-check"></i> КОСМЕТИЧЕСКИЙ УХОД</li>
                    <li> <i className="fas fa-check"></i> гигиена полости рта</li>
                </ul>
            </div>

            <div className="box active">
                <h3 className="title">стандарт</h3>
                <div className="price">
                    <span className="currency">Р</span>
                    <span className="amount">5000</span>
                    <span className="duration"> /год</span>
                </div>
                <ul>
                    <li> <i className="fas fa-check"></i> ВЫРАВНИВАНИЕ</li>
                    <li> <i className="fas fa-check"></i> осмотр полости</li>
                    <li> <i className="fas fa-check"></i> КОСМЕТИЧЕСКИЙ УХОД</li>
                    <li> <i className="fas fa-check"></i> гигиена полости рта</li>
                </ul>
            </div>

            <div className="box">
                <h3 className="title">премиум</h3>
                <div className="price">
                    <span className="currency">Р</span>
                    <span className="amount">9000</span>
                    <span className="duration"> /год</span>
                </div>
                <ul>
                    <li> <i className="fas fa-check"></i> ВЫРАВНИВАНИЕ</li>
                    <li> <i className="fas fa-check"></i> осмотр полости</li>
                    <li> <i className="fas fa-check"></i> КОСМЕТИЧЕСКИЙ УХОД</li>
                    <li> <i className="fas fa-check"></i> гигиена полости рта</li>
                </ul>
            </div>

        </div>

    </section>

    <section className="footer">

        <div className="box-container">

            <div className="box">
                <h3>Наш адрес</h3>
                <p>Казань, ул. Большая Красная</p>
                <div className="share">
                    <Link href="#" class="fab fa-linkedin"></Link>
                    <Link href="#" class="fab fa-instagram"></Link>
                    <Link href="#" class="fab fa-telegram"></Link>
                </div>
            </div>

            <div className="box">
                <h3>e-mail</h3>
                <Link href="#" class="link">sanya_tarasov4@gmail.com</Link>
            </div>

            <div className="box">
                <h3>Телефон</h3>
                <p>+7 (999) 333 55 44</p>
            </div>

            <div className="box">
                <h3>Часы работы</h3>
                <p>понедельник - суббота : 8:00 - 22:00   
                </p>
            </div>

        </div>

    </section>
    </React.Fragment>
    );
});

export default MainPage;