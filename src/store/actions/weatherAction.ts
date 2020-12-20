import { get } from "../../utils/apiUtil";
import { GET_WEATHER } from "../types";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const getWeather = () => {
  return get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=27.7172&lon=85.3240&appid=${API_KEY}`,
    GET_WEATHER
  );
};
