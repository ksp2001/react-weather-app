import React from "react";
import './Card.css'

const Card = (props) => {
  let icon;
  if (props.weather_report.weather === 200) {
    icon = '⛈';
  }
  else if (props.weather_report.weather === 300) {
    icon = '🌧';
  }
  else if (props.weather_report.weather === 500) {
    icon = '🌦'
  }
  else if (props.weather_report.weather === 600) {
    icon = '🌨'
  }
  else if (props.weather_report.weather === 800) {
    icon = '🌞'
  }
  else {
    icon = '⛅️';
  }
  console.log(props);
  return (
    <section id={'a'+props.id.toString()}>
     <section className = 'day'><i>{props.weather_report.day}</i></section>
     <section className = 'icon'>{icon}</section>
     <section className = 'temps'>{props.weather_report.max_temp}&deg; <span className="min_temp">{props.weather_report.min_temp}&deg;</span></section>
    </section>
    );
};

export default Card;
