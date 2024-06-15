import SocketIoClient, { Socket } from "socket.io-client";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import { v4 as UUIDv4 } from "uuid";

const WS_Server = "http://localhost:5001";

export const SocketContext = createContext<{socket: Socket}>(null);

const socket = SocketIoClient(WS_Server);

interface SocketContextProps {
  children: React.ReactNode
}
  
export default function SocketProvider({children}: SocketContextProps): React.ReactElement {
  const [user, setUser] = useState<Peer>(null);
  const navigate = useNavigate();
  
  const enterRoom = ({roomId}: {roomId: string}) => {
    navigate(`/room/${roomId}`)
  }

  const fetchCurrUsersInRoom = (
    { roomId, participants }: {roomId: string, participants: string[]}
  ) => {
    console.log("allusers", roomId, participants)
  }

  useEffect(() => {
    const userId = UUIDv4();
    const newPeer = new Peer(userId);
    console.log(userId, newPeer)
    setUser(newPeer)
    socket.on("room-created", enterRoom);

    socket.on("current-users", fetchCurrUsersInRoom)
  }, []);

  return (
    <SocketContext.Provider value={{ socket, user }}>
      {children}
    </SocketContext.Provider>
  )
}