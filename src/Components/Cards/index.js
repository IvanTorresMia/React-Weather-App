import React from "react";

function Cards({ temp, currentTime, humidity, iconImg }) {
  return (
    <div>
      <h3>Five Day Forcast</h3>
      <p>{currentTime}</p>
      <p>{temp}</p>
      <p>{humidity}</p>
      <img src={iconImg} alt="weather image" />
    </div>
  );
}

export default Cards;
