import { useContext } from "react";
import { SocketContext } from "../SocketContext";
import { useNavigation } from "react-router-dom";

const CreateRoom: React.FC = () => {
  const { socket } = useContext(SocketContext);

  const initialiseRoom = () => {
    console.log("initialising to create a new room", socket)
    socket.emit("create-room");
  }
  return (
    <button className="btn btn-secondary" onClick={initialiseRoom}>
      Start a new meeting room
    </button>
  )
}

export default CreateRoom;