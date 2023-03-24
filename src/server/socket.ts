import { connect } from "socket.io-client";
import { env } from "../env.mjs";

const socket = connect(env.NEXT_PUBLIC_BASE_URL, {
  path: "/api/socketio",
});

export default socket;
