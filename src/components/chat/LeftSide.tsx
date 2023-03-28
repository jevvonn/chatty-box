import { BsFillChatDotsFill } from "react-icons/bs";
import { useAppSelector } from "~/hooks/redux";
import HeaderLeft from "./HeaderLeft";
import NewConversationModal from "./NewConversationModal";
import { RootState } from "../../store/index";
import ConversationCard from "./ConversationCard";
import { BiLoaderAlt } from "react-icons/bi";

const LeftSide = () => {
  const conversations = useAppSelector(
    (state: RootState) => state.conversation.allConversations
  );
  const selectedConv = useAppSelector(
    (state: RootState) => state.conversation.selectedConversation
  );

  return (
    <div
      className={`${
        selectedConv && "hidden"
      } relative  w-full flex-col border-r-[1px] border-slate-700 lg:flex lg:w-1/3`}
    >
      <HeaderLeft />
      <div className="flex flex-col overflow-y-auto">
        {conversations.length ? (
          conversations.map((conversation) => (
            <ConversationCard
              key={conversation.id}
              conversation={conversation}
            />
          ))
        ) : (
          <div className="mt-4 flex w-full justify-center">
            <BiLoaderAlt className="animate-spin" />
          </div>
        )}
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
