import React from 'react';
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import {Link} from "react-router-dom";
import team3 from "../assets/team-3.jpg";
import '../styles/style.css'

const Team = () => {

  return (
    <section className="team" id="team">

      <h1 className="heading"> наша команда</h1>

        <div className="slider-wrapper">
          <div className="swiper-slide slide">
            <div className="image">
              <img src={team1} alt="" width={200}/>
              <div className="share">
                <a href="#" className="fab fa-telegram"></a>
                <a href="#" Name="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>
            <div className="content">
              <h3> Айдар Шагвалиев</h3>
              <span>глав-врач</span>
            </div>
          </div>

          <div className="swiper-slide slide">
            <div className="image">
              <img src={team2} alt=""/>
              <div className="share">
                <Link to="#" class="fab fa-telegram"></Link>
                <Link to="#" class="fab fa-instagram"></Link>
                <Link to="#" class="fab fa-linkedin"></Link>
              </div>
            </div>
            <div className="content">
              <h3> Галина Миронова</h3>
              <span>врач-ортодонт</span>
            </div>
          </div>

          <div className="swiper-slide slide">
            <div className="image">
              <img src={team3} alt=""/>
              <div className="share">
                <Link to="#" class="fab fa-telegram"></Link>
                <Link to="#" class="fab fa-instagram"></Link>
                <Link to="#" class="fab fa-linkedin"></Link>
              </div>
            </div>
            <div className="content">
              <h3> Надежда Павлова</h3>
              <span>хирург-имплантолог</span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Team;