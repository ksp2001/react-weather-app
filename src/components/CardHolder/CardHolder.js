import React from "react";
import './CardHolder.css'
import Card from '../Card'

const createTable = (props) => {
      let days = []
      //Inner loop to create children

      for (let i = 0; i<props.weather_report.length; i++) {
        days.push(<Card weather_report={props.weather_report[i]} key={i}/>);
      }
    return days;
  }

const CardHolder = (props) => {
  return (
    <section className='weather_inline'>
      {createTable(props)}
    </section>
  );
};

export default CardHolder;
