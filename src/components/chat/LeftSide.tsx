import { BsFillChatDotsFill } from "react-icons/bs";
import HeaderLeft from "./HeaderLeft";
import NewConversationModal from "./NewConversationModal";

const LeftSide = () => {
  return (
    <div className="relative flex w-full flex-col border-r-[1px] border-slate-700 lg:w-1/3">
      <HeaderLeft />
      <div className="flex flex-col overflow-y-auto">
        {/* {data?.conversations.map((item) => (
          <ConversationCard
            key={item.conversation.id}
            active={false}
            conversation={item.conversation}
          />
        ))} */}
      </div>

      <label
        htmlFor="new-conversation-modal"
        className="tooltip tooltip-left absolute bottom-2 right-4 flex cursor-pointer items-center justify-center rounded-full bg-neutral p-4 lg:tooltip-top"
        data-tip="New Conversation"
      >
        <BsFillChatDotsFill color="white" size={25} />
      </label>
      <NewConversationModal id="new-conversation-modal" />
    </div>
  );
};

export default LeftSide;
