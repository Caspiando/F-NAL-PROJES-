// SearchBar.jsx

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // onSearch prop'u doğru şekilde kullanıldı
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ara..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Ara</button>
    </form>
  );
};

export default SearchBar;
