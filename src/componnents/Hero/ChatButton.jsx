import { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";

function ChatButton() {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="chat">
      {showBubble && (
        <div className="chat__bubble">Do you have questions?</div>
      )}
      <button
        className="chat__btn"
        aria-label="Chat"
        onClick={() => setShowBubble(false)}
      >
        <FiMessageSquare size={28} />
      </button>
    </div>
  );
}

export default ChatButton;