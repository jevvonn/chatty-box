import pusherJs from "pusher-js";
import { env } from "~/env.mjs";

const pusher = new pusherJs(env.NEXT_PUBLIC_PUSHER_KEY, {
  cluster: env.NEXT_PUBLIC_PUSHER_CLUSTER,
});

export default pusher;
