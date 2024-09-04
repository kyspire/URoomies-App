import React, { useState, useEffect } from "react";
import "../styles/Chats.css";
import SendMessage from "../assets/SendMessage.svg"

const Chats = (props) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: props.room,
        author: props.username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await props.socket.emit("send_message", messageData);

      setMessageList((list) => [...list, messageData]);

      setCurrentMessage("");
    }
  };

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });

    return () => props.socket.off("receive_message"); // stop double send
  }, []);

  return (
    <div className="chat-page">
      <div className="chat-area-container">
        <div className="chat-header">
          <p>Live chat, signed in as {props.username}</p>
        </div>
        <div className="chat-body">
          {messageList.map((messageContent, index) => {
            const isMyMessage = messageContent.author === props.username;
            return (
              <div
                key={index}
                className={`message ${
                  isMyMessage ? "my-message" : "other-message"
                }`}
              >
                <p className="message-content">{messageContent.message}</p>
                <span className="message-info">
                  {messageContent.author} • {messageContent.time}
                </span>
              </div>
            );
          })}
        </div>

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Hey..."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
          />
          <button className="send-message-button" onClick={sendMessage}>
            <img className="send-message-icon "src={SendMessage}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
