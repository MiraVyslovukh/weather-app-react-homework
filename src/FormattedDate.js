import React from "react";
import "./FormattedDate.css";

export default function FormattedDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  let day = days[d.getDay()];
  let hours = d.getHours();
  let minutes = d.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <h5>
      {day}, {hours}:{minutes}
    </h5>
  );
}
