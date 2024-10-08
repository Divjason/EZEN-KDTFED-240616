import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <ButtonGroup>
      <Button variant="warning" onClick={() => setCity("")}>
        Current Location
      </Button>
      {cities.map((it, index) => (
        <Button
          onClick={() => {
            handleCityChange(it);
          }}
          variant="warning"
          key={index}
        >
          {it}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
