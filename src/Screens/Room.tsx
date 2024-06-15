import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { SocketContext } from '../SocketContext';

const Room: React.FC = () => {
  const {roomId} = useParams();
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.emit("joined-room", { roomId })
  }, []);
  console.log(roomId)
  return (
    <div>Room : {roomId}</div>
  )
}

export default Room;