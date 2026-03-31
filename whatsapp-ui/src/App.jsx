import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ChatItem from "./components/ChatItem";
import "./App.css";

// All chat data in one place
const chatsData = [
  { id: 1, name: "Tashi", message: "Hey bro", time: "10:30" },
  { id: 2, name: "Karma", message: "Are you coming?", time: "9:15" },
  { id: 3, name: "Sonam", message: "Call me", time: "Yesterday" },
  { id: 4, name: "Pema", message: "Okay sounds good 👍", time: "Mon" },
  { id: 5, name: "Dorji", message: "Did you submit already?", time: "Sun" },
];

function App() {
  // State to track what user types in search
  const [searchQuery, setSearchQuery] = useState("");

  // Filter chats based on search input
  const filteredChats = chatsData.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <Navbar />
      {/* Pass search state down to SearchBar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* Render only filtered chats */}
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