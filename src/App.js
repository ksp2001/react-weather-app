import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import CardHolder from './components/CardHolder'

function App() {
  let weather_report = [
      {day: 'Sunday',
      weather: 'Cloudy',
      max_temp: 20,
      min_temp: 12},
      {day: 'Monday',
      weather: 'Cloudy',
      max_temp: 20,
      min_temp: 12},
      {day: 'Tuesday',
      weather: 'Cloudy',
      max_temp: 20,
      min_temp: 12},
      {day: 'Wednesday',
      weather: 'Cloudy',
      max_temp: 20,
      min_temp: 12},
      {day: 'Thursday',
      weather: 'Cloudy',
      max_temp: 20,
      min_temp: 12},
      {day: 'Friday',
      weather: 'Cloudy',
      max_temp: 20,
      min_temp: 12},
      {day: 'Saturday',
      weather: 'Cloudy',
      max_temp: 20,
      min_temp: 12}
    ];
  return (
    <div className="App">
      <CardHolder weather_report={weather_report}/>
    </div>
  );
}

export default App;
