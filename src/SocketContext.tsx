import SocketIoClient, { Socket } from "socket.io-client";
import React, { createContext } from "react";

const WS_Server = "http://localhost:5001";

const SocketContext = createContext<Socket | null>(null);

const socket = SocketIoClient(WS_Server);

interface SocketContextProps {
  children: React.ReactNode
}

export default function SocketProvider({children}: SocketContextProps): React.ReactElement {
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}