import { useEffect, useState } from 'react';



export const useLoadData = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?&city=Ottawa&country=Canada&days=7&key=09ddb1ad8a9248ca88719c9f0b6b3ac6')
    .then(res => res.json())
    .then(data => {
      setLoading(false);
      for (let i=0;i<7;i++) {
        let smth = {};
        smth.day = (new Date(data.data[i].moonrise_ts*1000)).toLocaleString('en-us',{weekday:'long'});
        smth.weather = Math.floor(data.data[i].weather.code / 100) * 100;
        smth.min_temp = data.data[i].min_temp;
        smth.max_temp = data.data[i].max_temp;
        setWeather(weather => [...weather,smth]);
      }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      })
    }, []);
    return { weather, loading, error }
  }