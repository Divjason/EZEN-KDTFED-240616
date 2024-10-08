import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000 ${({ img }) => `url(${img})`} center/cover no-repeat;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// const API_KEY = process.env.VITE_API_KEY;
// const API_WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
// const API_UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [background, setBackground] = useState(null);
  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getBackground = () => {
    const getImg = `https://api.unsplash.com/photos/random/?client_id=${API_UNSPLASH_KEY}`;

    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => {
        setBackground(full);
      });
  };
  useEffect(() => {
    getCurrentLocation();
    getBackground();
  }, []);
  return (
    <>
      <GlobalStyles />
      <Wrapper img={background}>
        <Contents>
          <WeatherBox />
          <WeatherButton />
        </Contents>
      </Wrapper>
    </>
  );
};

export default App;
