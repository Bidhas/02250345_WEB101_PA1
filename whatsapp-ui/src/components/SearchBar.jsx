import "./SearchBar.css";

// Receives searchQuery and setSearchQuery as props from App
function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="🔍  Search or start new chat"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;