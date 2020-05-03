import React from "react";
import './BottomInfo.css'

const BottomInfo = (props) => {
  // let element;
  // window.onload = function() {
  //   element = document.getElementById("a"+props.id.toString());
  //   element.classList.add('selected_day');
  //   window.location.href = window.location;
  //   window.stop();
  // }
  return (<div>Today will be {props.weather_report.weather}!</div>);
};

export default BottomInfo;
