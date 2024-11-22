import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="input-group">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control rounded"
      />
      <button type="submit" className="btn btn-outline-primary">SEARCH</button>
    </form>
  );
};

export default SearchBar;

