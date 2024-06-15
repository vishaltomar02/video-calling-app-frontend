import SocketIoClient, { Socket } from "socket.io-client";
import React, { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WS_Server = "http://localhost:5001";

export const SocketContext = createContext<{socket: Socket} | null>(null);

const socket = SocketIoClient(WS_Server);

interface SocketContextProps {
  children: React.ReactNode
  }
  
  export default function SocketProvider({children}: SocketContextProps): React.ReactElement {
    const navigate = useNavigate();
    
    const enterRoom = ({roomId}: {roomId: string}) => {
      navigate(`/room/${roomId}`)
    }
    useEffect(() => {
      socket.on("room-created", enterRoom)
    }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}