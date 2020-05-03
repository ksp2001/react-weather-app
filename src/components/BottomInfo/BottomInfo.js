import React from "react";
import './BottomInfo.css'

const BottomInfo = (props) => {
  return (<section className="weather_extra"><div className="status"><i>Today will be {props.weather_report.weather}!</i></div></section>);
};

export default BottomInfo;
