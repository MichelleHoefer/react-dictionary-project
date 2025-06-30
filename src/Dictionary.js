import React, { useState, useEffect } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("dictionary");
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePictureResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setSearchInput(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    setKeyword(searchInput);
  }

  useEffect(() => {
    let apiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pictureApiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
    let pictureApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pictureApiKey}`;
    axios
      .get(pictureApiUrl)
      .then(handlePictureResponse)
      .catch((error) => {
        console.error(
          "Photo API error:",
          error.response?.data || error.message
        );
      });
  }, [keyword]);

  return (
    <div className="dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a word..."
            onChange={handleKeywordChange}
            className="search-bar"
            value={searchInput}
          />
          <input type="submit" className="button" />
        </form>
      </section>
      <br />
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
