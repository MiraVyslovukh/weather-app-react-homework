import React, { useState } from "react";
import "./App.css";
import Engine from "./Engine";
import axios from "axios";

export default function App() {
  return (
    <>
      <Engine />
      <div className="row justify-content-center by">
        <p id="by">
          This project was coded by Mira Vyslovukh and is open-sourced on{" "}
          <a
            href="https://github.com/MiraVyslovukh/weather-app-react-homework"
            target="_blank"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://zingy-chimera-4365ca.netlify.app" target="_blank">
            Netlify
          </a>
        </p>
      </div>
    </>
  );
}
