import React from "react";
import './CardHolder.css'
import Card from '../Card'
import {
  NavLink
} from "react-router-dom";

const createTable = (props) => {
      let days = []
      for (let i = 0; i<7; i++) {
        let link = "/"+i;
        if (props.weather_report.length !== 0) {
        days.push(<NavLink to={link} key={i} activeClassName='selected_day' className='day_card'><Card weather_report={props.weather_report[i]} id = {i}/></NavLink>);}
      }
    return days;
}

function CardHolder(props) {
  return (
    <section className='weather_inline'>
      {createTable(props)}
    </section>
  );
};

export default CardHolder;
