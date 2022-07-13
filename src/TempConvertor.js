import React, { useEffect, useState } from "react";

const TempConvertor = () => {
  const [resultTemp, setResultTemp] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [toCelsius, setToCelsius] = useState(true);
  const [showOnSecond, setShowOnSecond] = useState(true);

  const convertTemp = (e) => {
    const { value } = e.target;
    if (!value.length) {
      setResultTemp("");
    }
    setInputVal(value);
    

    if (e.target.className === "input-2" && showOnSecond === true) {
      setShowOnSecond(false);
    } else if (e.target.className === "input-1" && showOnSecond === false) {
      setShowOnSecond(true);
    }

    
  };

  useEffect(() => {
    if (!inputVal.length) return;
    const floatVal = parseFloat(inputVal);
    if (showOnSecond) {
      // Converting into celsius
      const result = ((floatVal - 32) * 5) / 9;
      setResultTemp(result.toString());
    } else {
      // Converting into fahrenheit
      const result = (floatVal * 9 / 5) + 32;
      setResultTemp(result.toString());
    }
  }, [showOnSecond, inputVal])

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
            className="input-1"
            onChange={convertTemp}
            value={`${showOnSecond ? inputVal : resultTemp}`}
          />
        </div>
        <div className="repeat-arrow">
          <i className="fa-solid fa-repeat"></i>
        </div>
        <div>
          <label htmlFor="temp-2">{toCelsius ? "Celsius" : "Fahrenheit"}</label>
          <input
            type="number"
            id="temp-2"
            className="input-2"
            value={`${showOnSecond ? resultTemp : inputVal}`}
            onChange={convertTemp}
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
