import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { SocketContext } from '../SocketContext';

const Room: React.FC = () => {
  const {roomId} = useParams();
  const { socket, user } = useContext(SocketContext);

  useEffect(() => {
    console.log(user)
    if(user) socket.emit("joined-room", { roomId, peerId: user._id })
  }, [roomId, user, socket]);
  console.log(roomId)
  return (
    <div>Room : {roomId}</div>
  )
}

export default Room;