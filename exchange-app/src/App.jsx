import React, { useEffect, useState } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import AdditionalValues from "./AdditionalValues";
import { getData } from "./axios";

function App() {
  const [value, setValue] = useState([]);
  const [leftSelectValue, setLeftSelectValue] = useState("AZN");
  const [rightSelectValue, setRightSelectValue] = useState("USD");
  const [inputValue, setInputValue] = useState(1);
  const calculateCurrentExchange = () => {
    const leftSide = value.find((item) => item?.key === leftSelectValue);
    const rightSide = value.find((item) => item?.key === rightSelectValue);
    return ((rightSide?.value / leftSide?.value) * Number(inputValue)).toFixed(
      2
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      const values = Object.keys(data?.rates).reduce((initial, item) => {
        initial.push({ key: item, value: data?.rates[item] });
        return initial;
      }, []);
      setValue(values);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <main className="main">
        <div className="content">
          <form className="top">
            <select
              name="select_left"
              id="select_left"
              value={leftSelectValue}
              onChange={(e) => setLeftSelectValue(e.target.value)}
            >
              {value &&
                value.map((item, index) => (
                  <option key={item.key.toString()} value={item.key}>
                    {item.key}
                  </option>
                ))}
            </select>
            <div className="top_icon">
              <FaExchangeAlt />
            </div>
            <select
              name="select_right"
              id="select_right"
              value={rightSelectValue}
              onChange={(e) => setRightSelectValue(e.target.value)}
            >
              {value &&
                value.map((item, index) => (
                  <option key={item.key.toString()} value={item.key}>
                    {item.key}
                  </option>
                ))}
            </select>
          </form>
          <div className="center">
            <h3>Amount</h3>
            <div className="center_input_container">
              <input
                type={"number"}
                className="center_input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="center_icon">
                <BsArrowCounterclockwise />
              </div>
            </div>
            <p>
              {calculateCurrentExchange()} {rightSelectValue}
            </p>
          </div>
          <div className="bottom">
            <ul className="exchanges_list">
              {value.map((item) =>
                item.key === leftSelectValue ? (
                  ""
                ) : (
                  <AdditionalValues
                    key={item.key}
                    item={item}
                    leftSideValue={
                      value.find((item) => item?.key === leftSelectValue)?.value
                    }
                  />
                )
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
