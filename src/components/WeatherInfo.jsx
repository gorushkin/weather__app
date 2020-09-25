import React from 'react';

const WeatherInfo = (props) => {
  const { city, weather } = props;
  if (!city) return null;

  return (
    <h1>
      Wheater in {city} is {weather}
    </h1>
  );
};

export default WeatherInfo;
