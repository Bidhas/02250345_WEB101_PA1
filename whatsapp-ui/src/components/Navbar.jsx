import "./Navbar.css";

// Navbar component - displays the top bar with app title and icons
function Navbar() {
  return (
    <div className="navbar">
      {/* App title */}
      <h2>WhatsApp</h2>
      {/* Action icons on the right */}
      <div className="navbar-icons">
        <span>🔍</span>
        <span>⋮</span>
      </div>
    </div>
  );
}

export default Navbar;