import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import Information from "./pages/Information";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ProfileSetup from "./pages/ProfileSetup";
import ProfileSearch from "./pages/ProfileSearch";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import io from "socket.io-client"
import ChatRoom from "./pages/ChatRoom";
import EditProfile from "./pages/EditProfile";

const socket = io.connect("http://localhost:7776/");
import SearchRoomatesPage from "./pages/SearchRoomates";


function App() {
  console.log(socket);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/information" element={<Information />} />
        <Route path="/login" element={<Login socket={socket} />} />
        <Route path="/profilesetup" element={<ProfileSetup />} />
        <Route path="/userprofile" element={<UserProfile socket={socket}/>} />
        <Route path="/profilesearch" element={<ProfileSearch />} />
        <Route path="/editprofile" element={<EditProfile socket={socket}/>} />
        <Route path="/chatroom" element={<ChatRoom socket={socket} />} />
        <Route path="/searchroommates" element={<SearchRoomatesPage socket={socket} />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={"/sniffer.png"} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={"/jinass.jpg"} className="logo-react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">Hello betas</p>
      <div className="landing-button">
        <button onClick={() => navigate("/chatroom")}>Landing page</button>
      </div>
    </>
  );
}

export default App;
