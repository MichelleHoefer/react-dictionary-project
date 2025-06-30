import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetic && (
            <div className="phonetic">
              <Phonetic
                phonetic={props.results.phonetic}
                word={props.results.word}
              />
            </div>
          )}
        </section>
        <br />

        {props.results.meanings.map((meaning, index) => (
          <section>
            {" "}
            <Meaning key={index} meaning={meaning} />{" "}
          </section>
        ))}
        
      </div>
    );
  } else {
    return null;
  }
}
