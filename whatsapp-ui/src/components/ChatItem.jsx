import "./ChatItem.css";

function ChatItem(props) {
  return (
    <div className="chat-item">
      <div className="avatar">{props.name[0]}</div>
      <div className="chat-info">
        <div className="chat-top">
          <span className="chat-name">{props.name}</span>
          <span className="chat-time">{props.time}</span>
        </div>
        <p className="chat-message">{props.message}</p>
      </div>
    </div>
  );
}

export default ChatItem;