import React from "react";

function AdditionalValues({ item, leftSideValue }) {
  const calculatedValue = Number(item.value / leftSideValue.value).toFixed(2);
  return (
    <>
      <li className="exchange_item">
        <p className="exchange_item_icon">1 {leftSideValue.key} &nbsp; =</p>
        <p className="exchange_item_text">&nbsp; {item.key}</p>
        <p className="exchange_item_value">{calculatedValue}</p>
      </li>
    </>
  );
}

export default AdditionalValues;
