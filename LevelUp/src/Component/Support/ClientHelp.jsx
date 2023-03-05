import React from "react";
import io from "socket.io-client";
// import socket from "./io";
import { useEffect } from "react";
function ClientHelp() {
	let socket;
	const CONNECTION_PORT = "localhost:8000/";
	useEffect(() => {
		socket = io(CONNECTION_PORT);
	}, []);
	return <div className="mt-40">ClientHelp</div>;
}

export default ClientHelp;
