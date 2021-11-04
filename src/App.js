import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import SearchCityComponent from "./modules/SearchCityComponent";
import WeatherInfoComponent from "./modules/WeatherInfoComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Ubuntu;
`;

const AppLabel = styled.div`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e12626169f0a788677d4ed7d735896e5`,
    );
    updateWeather(response.data);
  };
  return (
      <Container> 
        <AppLabel>Weather App</AppLabel>
        {weather ? (
          <WeatherInfoComponent weather={weather}/>
        ) : (
          <SearchCityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
        )}
      </Container>
  );
}

export default App;
