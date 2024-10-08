import React, { useState } from "react";
import Chats from "../components/Chats";
import Header from "../components/HeaderBar";
import Footer from "../components/BottomBar";
import "../styles/ChatRoom.css";

const ChatRoom = (props) => {
  console.log(props.socket.id);
  const data = JSON.parse(localStorage.getItem(`${props.socket.id}`));
  console.log(data.username);

  props.socket.emit("join_room", data.userid);

  const [room, setRoom] = useState(data.userid);

  const joinRoom = () => {
    if (room !== "") {
      props.socket.emit("join_room", room);
    }
  };

  function handleChange(event) {
    const val = event.target.value; 
    if(Number.isInteger(parseInt(val))) {
      setRoom(parseInt(val))
    } else {
      setRoom(event.target.value);
    }
  }

  return (
    <div className="chatroom-page">
      <Header />
      <div className="chatroom-title-area">
        <h1 className="chat-page-title">Welcome to the Chatroom!</h1>
        <h2 className="chat-page-description">Join a chat</h2>
        <div className="select-chat-area">
          <input
            type="text"
            placeholder="Room ID..."
            value={room}
            onChange={handleChange}
          />
          <button className="join-chatroom-button" onClick={joinRoom}>
            Join Room
          </button>
        </div>
      </div>

      <Chats
        socket={props.socket}
        username={
          JSON.parse(localStorage.getItem(`${props.socket.id}`)).username
        }
        room={room}
      />
      <Footer />
    </div>
  );
};

export default ChatRoom;
