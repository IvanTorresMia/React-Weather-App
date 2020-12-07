import React from 'react'

function Search({handleSearch}) {

    return (
        <div className="container rounded">
            <div className="row">
            <h1>Search a City!</h1>
            </div>
            <div className="row">
            <input type="text" className="bar text-center" placeholder="What are you looking for?" />
            <button className="btn" onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default Search;