import React from 'react';
import './App.css';
import CardHolder from './components/CardHolder';
import BottomInfo from './components/BottomInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Match
} from "react-router-dom";


let weather_report = [
      {
      day: 'Sunday',
      weather: 'Sunny',
      max_temp: 21,
      min_temp: 11},
      {
      day: 'Monday',
      weather: 'Cloudy',
      max_temp: 20,
      min_temp: 12},
      {
      day: 'Tuesday',
      weather: 'Rainy',
      max_temp: 19,
      min_temp: 13},
      {
      day: 'Wednesday',
      weather: 'Rainy',
      max_temp: 22,
      min_temp: 7},
      {
      day: 'Thursday',
      weather: 'Cloudy',
      max_temp: 25,
      min_temp: 12},
      {
      day: 'Friday',
      weather: 'Sunny',
      max_temp: 22,
      min_temp: 9},
      {
      day: 'Saturday',
      weather: 'Sunny',
      max_temp: 15,
      min_temp: 4}
    ];

function App() {
  return (
    <Router>
      <div className="App" id="App">
        <CardHolder weather_report={weather_report}/>
      </div>
      <Switch>
        <Route path="/0">
          <BottomInfo weather_report={weather_report[0]} id={0} />
        </Route>
        <Route path="/1">
          <BottomInfo weather_report={weather_report[1]} id={1} />
        </Route>
        <Route path="/2">
          <BottomInfo weather_report={weather_report[2]} id={2} />
        </Route>
        <Route path="/3">
          <BottomInfo weather_report={weather_report[3]} id={3} />
        </Route>
        <Route path="/4">
          <BottomInfo weather_report={weather_report[4]} id={4} />
        </Route>
        <Route path="/5">
          <BottomInfo weather_report={weather_report[5]} id={5} />
        </Route>
        <Route path="/6">
          <BottomInfo weather_report={weather_report[6]} id={6} />
        </Route>
      </Switch>
    </Router>
  );
}

function addClass(digit) {
  console.log(digit);
  for (let i =0;i<7;i++) {
    if (i === digit) {
      weather_report[i].selected = true;
    }
    else {
      weather_report[i].selected = false;
    }
  }
  for (let j = 0; j<7; j++) {
    if (weather_report[j].selected === true) {
      window.onload = function() {
        let element = document.getElementById("a"+j.toString());
        element.classList.add('selected_day');
      }
    }
  }

  console.log(weather_report);
}
export default App;
