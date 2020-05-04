import React, {useEffect, useState} from 'react';
import './App.css';
import CardHolder from './components/CardHolder';
import BottomInfo from './components/BottomInfo';
import Title from './components/Title';
import { useLoadData } from './hooks/useLoadData';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// let weather = [
//       {
//       day: 'Sunday',
//       weather: 'Sunny',
//       max_temp: 21,
//       min_temp: 11},
//       {
//       day: 'Monday',
//       weather: 'Cloudy',
//       max_temp: 20,
//       min_temp: 12},
//       {
//       day: 'Tuesday',
//       weather: 'Rainy',
//       max_temp: 19,
//       min_temp: 13},
//       {
//       day: 'Wednesday',
//       weather: 'Rainy',
//       max_temp: 22,
//       min_temp: 7},
//       {
//       day: 'Thursday',
//       weather: 'Cloudy',
//       max_temp: 25,
//       min_temp: 12},
//       {
//       day: 'Friday',
//       weather: 'Sunny',
//       max_temp: 22,
//       min_temp: 9},
//       {
//       day: 'Saturday',
//       weather: 'Sunny',
//       max_temp: 15,
//       min_temp: 4}
//     ];

function App() {

  const { weather, loading, error } = useLoadData();

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  if(weather.length < 7) {
    return(<div>Loading!</div>);
  }
  else {
    console.log(weather.length);
    return (
    <div>
      <Title/>
      <Router>
        <div className="App" id="App">
          <CardHolder weather_report={weather}/>
        </div>
        <Switch>
          <Route path="/0">
            <BottomInfo weather_report={weather[0]} id={0} />
          </Route>
          <Route path="/1">
            <BottomInfo weather_report={weather[1]} id={1} />
          </Route>
          <Route path="/2">
            <BottomInfo weather_report={weather[2]} id={2} />
          </Route>
          <Route path="/3">
            <BottomInfo weather_report={weather[3]} id={3} />
          </Route>
          <Route path="/4">
            <BottomInfo weather_report={weather[4]} id={4} />
          </Route>
          <Route path="/5">
            <BottomInfo weather_report={weather[5]} id={5} />
          </Route>
          <Route path="/6">
            <BottomInfo weather_report={weather[6]} id={6} />
          </Route>
        </Switch>
      </Router>
    </div>
    );
  }
}
export default App;
