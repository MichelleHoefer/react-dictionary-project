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
        <footer className="app-footer">Coded by..... etc</footer>
      </div>
    </div>
  );
}
