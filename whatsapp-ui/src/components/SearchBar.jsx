import "./SearchBar.css";

// SearchBar component - receives search state from App via props
// searchQuery: current input value
// setSearchQuery: function to update the search state in App
function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-container">
      {/* Controlled input - value tied to searchQuery state */}
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