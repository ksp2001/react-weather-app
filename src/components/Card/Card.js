import React, {useState} from "react";
import './Card.css'

const Card = (props) => {
  let icon;
  if (props.weather_report.weather.toLowerCase() == 'sunny') {
    icon = '🌞';
  }
  else if (props.weather_report.weather.toLowerCase() == 'cloudy') {
    icon = '⛅️';
  }
  else {
    icon = '🌧';
  }
  return (
    <section className = 'day_card'>
     <section className = 'day'><i>{props.weather_report.day}</i></section>
     <section className = 'icon'>{icon}</section>
     <section className = 'temps'>{props.weather_report.max_temp}&deg; <span className="min_temp">{props.weather_report.min_temp}&deg;</span></section>
    </section>
    );
};

export default Card;
