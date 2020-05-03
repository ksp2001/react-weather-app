import React from "react";
import './CardHolder.css'
import Card from '../Card'
import {
  NavLink
} from "react-router-dom";

const createTable = (props) => {
      let days = []
      //Inner loop to create children

      for (let i = 0; i<props.weather_report.length; i++) {
        let link = "/"+i;
        days.push(<NavLink to={link} key={i} activeClassName='selected_day' className='day_card'><Card weather_report={props.weather_report[i]} id = {i}/></NavLink>);
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
