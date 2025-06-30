import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        {props.results.phonetic && (
          <div className="phonetic">
            <Phonetic
              phonetic={props.results.phonetic}
              word={props.results.word}
            />
          </div>
        )}
        <br />

        {props.results.meanings.map((meaning, index) => (
          <Meaning key={index} meaning={meaning} />
        ))}
      </div>
    );
  } else {
    return null;
  }
}
