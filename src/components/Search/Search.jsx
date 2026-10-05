import { useState } from "react";
import "./Search.css";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;

    setSearchTerm(value);
    onSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label className="search__label" htmlFor="reddit-search">
        Search Reddit
      </label>

      <div className="search__controls">
        <input
          id="reddit-search"
          type="search"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleChange}
          aria-label="Search posts"
        />

        {searchTerm && (
          <button type="button" className="search__clear" onClick={handleClear}>
            Clear
          </button>
        )}

        <button type="submit" className="search__submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
