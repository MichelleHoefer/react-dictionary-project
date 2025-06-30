import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  const meaning = props.meaning;

  if (!meaning) return null;

  return (
    <div className="meanings">
      <h4>{meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition:</strong>
        {` `}
        {meaning.definition}
      </p>
      {meaning.example && (
        <em>
          <strong>Example:</strong> {meaning.example}
        </em>
      )}
      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <p>
          <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
        </p>
      )}
    </div>
  );
}
