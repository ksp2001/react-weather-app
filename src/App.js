import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {
  let weather_report = {
      day: 'Monday',
      weather: 'Cloudy',
      max_temp: 20,
      min_temp: 12
    }
  return (
    <div className="App">
      <Card weather_report={weather_report}/>
    </div>
  );
}

export default App;
