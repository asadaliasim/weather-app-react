import axios from 'axios';

export const getWeather = async (cityName) => {
  try {
    // getting data through api call

    const APIKEY = '14fd7d86383cf8d0a52fc920e74da580';
    const unit = 'metric';

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=${unit}`;
    const weatherData = await axios.get(weatherUrl);
    return weatherData;
  } catch (error) {
    console.log(error.message);
  }
};
