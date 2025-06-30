import React, { useState, useEffect } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("dictionary");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  // Called on form submit
  function search(event) {
    if (event) event.preventDefault();

    let apiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    let apiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a word..."
            onChange={handleKeywordChange}
            className="search-bar"
            value={keyword}
          />
          {` `}
          <input type="submit" className="button" />
        </form>
      </section>
      <br />
      <Results results={results} />
    </div>
  );
}
