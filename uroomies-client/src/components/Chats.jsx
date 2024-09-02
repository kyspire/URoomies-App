import React, {useState, useEffect} from 'react'

const Chats = (props) => {
  const [currentMessage, setCurrentMessage] = useState(""); 
  const [messageList, setMessageList] = useState([]);
  
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: props.room, 
        author: props.username, 
        message: currentMessage, 
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };

      await props.socket.emit("send_message", (messageData));
    }
  }

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    })
  }, [props.socket])

  return (
    <div>
      <div className="chat-header">
        <p>Live chat, user is {JSON.parse(localStorage.getItem("user")).username}</p>
      </div>
      <div className="chat-body">
        {messageList.map((messageContent) => {
          return <h1>{messageContent.message}, {messageContent.author} , {messageContent.time}</h1>
        })}
      </div>
      <div className="chat-footer">
        <input type="text" placeholder='Hey...' onChange={(event => {setCurrentMessage(event.target.value)})}/>
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chats