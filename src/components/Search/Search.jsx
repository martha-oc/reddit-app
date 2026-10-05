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

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={handleChange}
        aria-label="Search posts"
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
