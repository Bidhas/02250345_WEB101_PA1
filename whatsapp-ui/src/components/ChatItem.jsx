import "./ChatItem.css";

// ChatItem component - reusable card for each chat
// Props: name (string), message (string), time (string)
function ChatItem(props) {
  return (
    <div className="chat-item">
      {/* Avatar circle showing first letter of contact name */}
      <div className="avatar">{props.name[0]}</div>

      {/* Chat details section */}
      <div className="chat-info">
        {/* Top row - name and time */}
        <div className="chat-top">
          <span className="chat-name">{props.name}</span>
          <span className="chat-time">{props.time}</span>
        </div>
        {/* Last message preview */}
        <p className="chat-message">{props.message}</p>
      </div>
    </div>
  );
}

export default ChatItem;