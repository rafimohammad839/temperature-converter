import React, { useState } from "react";

const TempConvertor = () => {
  const [main, setMain] = useState({ temp: 32, scale: 'f' });

  const handleChange = (e) => {
    const { scale } = e.target.dataset;
    setMain({ temp: e.target.value, scale: scale });
  }

  const fahrenheit = main.scale === 'c' ? (main.temp.toString().length ? main.temp * 9 / 5 + 32 : ""): main.temp;
  const celsius = main.scale === 'f' ? (main.temp.toString().length ? (main.temp - 32) * 5 / 9: "") : main.temp;

  return (
      <div className="temperature-container">
        <div>
          <label htmlFor="fahrenheit">Fahrenheit</label>
          <input
            type="number"
            id="fahrenheit"
            data-scale="f"
            onChange={handleChange}
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
            data-scale="c"
            value={celsius}
            onChange={handleChange}
          />
        </div>
      </div>
  );
};

export default TempConvertor;