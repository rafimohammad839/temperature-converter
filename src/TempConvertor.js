import React, { useEffect, useState } from "react";

const TempConvertor = () => {
  const [main, setMain] = useState({ temp: 32, scale: 'f' });

  const handleFahrenheit = (e) => {
    setMain({ temp: e.target.value, scale: 'f' });
  }

  const handleCelsius = (e) => {
    setMain({ temp: e.target.value, scale: 'c' });
  }

  const fahrenheit = main.scale === 'c' ? (main.temp.toString().length ? main.temp * 9 / 5 + 32 : ""): main.temp;
  const celsius = main.scale === 'f' ? (main.temp.toString().length ? (main.temp - 32) * 5 / 9: "") : main.temp;

  return (
    <>
      <div className="temperature-container">
        <div>
          <label htmlFor="fahrenheit">Fahrenheit</label>
          <input
            type="number"
            id="fahrenheit"
            onChange={handleFahrenheit}
            value={fahrenheit}
          />
        </div>
        <div className="repeat-arrow">
          <i className="fa-solid fa-repeat"></i>
        </div>
        <div>
          <label htmlFor="celsius">Celsius</label>
          <input
            type="number"
            id="celsius"
            value={celsius}
            onChange={handleCelsius}
          />
        </div>
      </div>
    </>
  );
};

export default TempConvertor;

/*
  Input field 1 - value1 --> result
        common - result && showOnSecondInput
  Input field 2 - value2 --> result
*/
