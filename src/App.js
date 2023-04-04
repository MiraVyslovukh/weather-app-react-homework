import React from "react";
import "./App.css";
import Engine from "./Engine";

export default function App() {
  return (
    <div className="App">
      <Engine />
      <div className="row justify-content-center by">
        <footer id="by">
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
        </footer>
      </div>
    </div>
  );
}
