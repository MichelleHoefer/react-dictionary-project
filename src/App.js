import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">React Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/michelle-hoefer-0b478229b/"
            target="_blank"
            rel="noreferrer"
          >
            Michelle Hoefer
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/MichelleHoefer"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          , and hosted on{" "}
          <a
            href="https://hoefer-react-dictionary-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
