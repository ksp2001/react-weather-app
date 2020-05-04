import React from "react";
import './BottomInfo.css'

const BottomInfo = (props) => {
  let message = '';
  if (props.weather_report.weather === 200) {
    message = "It's a thunderstorm today, stay indoors! 🏡📺";
  }
  else if (props.weather_report.weather === 300) {
    message = "It's drizzling today, don't forget your umbrella! 🌂☂️";
  }
  else if (props.weather_report.weather === 500) {
    message = "Soft rainshowers today, maybe it's time for a little splash? 🚿🤪";
  }
  else if (props.weather_report.weather === 600) {
    message = "Brr, it's snowing! Don't forget your coat, and build a snowman! 🏂☃️"
  }
  else if (props.weather_report.weather === 800) {
    message = "What a day to be alive! Go out, take a walk, go biking with your buddies! 🚴🏻‍♀️🏃🏻‍♀️"
  }
  else {
    message = "This weather ... I don't know what to make of it. Maybe we should take a little nap! 🛌💤";
  }
  return (<section className="weather_extra"><div className="status"><i>{message}</i></div></section>);
};

export default BottomInfo;
