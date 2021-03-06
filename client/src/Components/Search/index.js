import React from "react";
import "./style.css";

function Search({ handleSearch, handleChange }) {

  const clearInput = (event) => {
event.preventDefault();
event.target.value = ""
  }
  return (
    <div className="rounded m-4 p-4 search">
      <h1 className="search-title">Search a City!</h1>

      <input
        type="text"
        className="bar text-center p-2"
        placeholder="City Name"
        onChange={handleChange}
      />
      <button className="btn ml-2 searchBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
