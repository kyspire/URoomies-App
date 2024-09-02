import React, { useState } from 'react'
import Chats from '../components/Chats';



const ChatRoom = (props) => {
  console.log(props.socket.id);
  const data = JSON.parse(localStorage.getItem(`${props.socket.id}`));
  console.log(data.username);

  const [room, setRoom] = useState(""); 

  const joinRoom = () => {
    if(room !== "") {
      props.socket.emit("join_room", room); 
    }
  }

  function handleChange(event) {
    setRoom(event.target.value);
  }


  return (
    <div>
      <h1>Chatroom</h1>
      <h2>Join a chat</h2>
      <input
        type="text"
        placeholder="Room ID..."
        value={room}
        onChange={handleChange}
         />
      <button onClick={joinRoom}>Join A room</button>

      <Chats socket={props.socket} username={JSON.parse(localStorage.getItem(`${props.socket.id}`)).username} room={room}/>
    </div>
  )
}

export default ChatRoom