import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <input className="search-input" type="text" placeholder="🔍  Search or start new chat" />
    </div>
  );
}

export default SearchBar;