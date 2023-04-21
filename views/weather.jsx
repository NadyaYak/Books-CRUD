const React = require('react');

function Weather(props) {
  return (
    <div>
      <h1>Weather in {props.data.name}</h1>
      <p>Temperature: {props.data.main.temp}</p>
      <p>Description: {props.data.weather[0].description}</p>
    </div>
  );
}

module.exports = Weather;
