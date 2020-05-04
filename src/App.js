import React from 'react';
import './App.css';
import CardHolder from './components/CardHolder';
import BottomInfo from './components/BottomInfo';
import Title from './components/Title';
import { useLoadData } from './hooks/useLoadData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const { weather, loading, error } = useLoadData();

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  if(weather.length < 7) {
    return(<div>Loading!</div>);
  }
  else {
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
