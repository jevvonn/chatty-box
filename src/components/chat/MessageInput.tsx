import { MdOutlineEmojiEmotions } from "react-icons/md";
import autosize from "autosize";

const MessageInput = () => {
  return (
    <div className="flex w-full items-center gap-4 bg-neutral p-2">
      <div className="flex h-full items-center justify-center">
        <MdOutlineEmojiEmotions size={30} />
      </div>
      <textarea
        placeholder="Type your message..."
        rows={1}
        onChange={(e) => autosize(e.target)}
        className="input-chat textarea-bordered textarea box-border max-h-[100px] min-h-[38px] w-full resize-none overflow-x-hidden  text-lg"
      ></textarea>
    </div>
  );
};

export default MessageInput;
