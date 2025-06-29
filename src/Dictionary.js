import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
