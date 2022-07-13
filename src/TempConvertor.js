import React, { useState } from "react";

const TempConvertor = () => {
  const [resultTemp, setResultTemp] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [toCelsius, setToCelsius] = useState(true);

  const convertTemp = (e) => {
    const { value } = e.target;
    setInputVal(value);
    if (!value.length) return;
    const floatVal = parseFloat(value);
    if (toCelsius) {
      const result = ((floatVal - 32) * 5) / 9;
      setResultTemp(result.toString());
    } else {
      const result = (floatVal * 9) / 5 + 32;
      setResultTemp(result.toString());
    }
  };

  const toggleToCelsius = () => {
    setInputVal("");
    setResultTemp("");
    setToCelsius(!toCelsius);
  };

  return (
    <>
      <div className="temperature-container">
        <div>
          <label htmlFor="temp-1">{toCelsius ? "Fahrenheit" : "Celsius"}</label>
          <input
            type="number"
            id="temp-1"
            onChange={convertTemp}
            value={inputVal}
          />
        </div>
        <div className="repeat-arrow">
          <i className="fa-solid fa-repeat" onClick={toggleToCelsius}></i>
        </div>
        <div>
          <label htmlFor="temp-2">{toCelsius ? "Celsius" : "Fahrenheit"}</label>
          <input type="number" id="temp-2" value={resultTemp} readOnly />
        </div>
      </div>
    </>
  );
};

export default TempConvertor;
