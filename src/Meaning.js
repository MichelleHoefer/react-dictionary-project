import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      {props.meaning.example && <em>Example: {props.meaning.example}</em>}
    </div>
  );
}
