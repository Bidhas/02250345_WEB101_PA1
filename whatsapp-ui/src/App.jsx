import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ChatItem from "./components/ChatItem";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <SearchBar />
      <ChatItem name="Tashi" message="Hey bro" time="10:30" />
      <ChatItem name="Karma" message="Are you coming?" time="9:15" />
      <ChatItem name="Sonam" message="Call me" time="Yesterday" />
    </div>
  );
}

export default App;