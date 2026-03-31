import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ChatItem from "./components/ChatItem";
import "./App.css";

// Data source for all chat items displayed in the chat list
const chatsData = [
  { id: 1, name: "Tashi", message: "Hey bro", time: "10:30" },
  { id: 2, name: "Karma", message: "Are you coming?", time: "9:15" },
  { id: 3, name: "Sonam", message: "Call me", time: "Yesterday" },
  { id: 4, name: "Pema", message: "Okay sounds good 👍", time: "Mon" },
  { id: 5, name: "Dorji", message: "Did you submit already?", time: "Sun" },
];

// Root component - manages state and renders all child components
function App() {
  // State to store the current search input value
  const [searchQuery, setSearchQuery] = useState("");

  // Filters chatsData based on search input (case insensitive)
  const filteredChats = chatsData.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Top navigation bar */}
      <Navbar />
      {/* Search bar - passes state down as props */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* Render filtered chat list using reusable ChatItem component */}
      {filteredChats.map((chat) => (
        <ChatItem
          key={chat.id}
          name={chat.name}
          message={chat.message}
          time={chat.time}
        />
      ))}
    </div>
  );
}

export default App;