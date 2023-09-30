import React, { useContext ,useState} from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import download from "../img/download.png"
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { useNavigate ,Link} from "react-router-dom";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const navigate = useNavigate();

  const showAlert = () => {

    const roomId = prompt("Enter Room ID");
    navigate(`/room/${roomId}`) 
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} onClick={showAlert} alt=""/>
          <img src={Add} alt="" />
          <img src={More} alt="" />
          <Link to='/download'><img src={download} alt="" /></Link>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
