import { useRef } from "react";
import FriendCard from "./FriendCard";

const NewConversationModal = ({ id }: { id: string }) => {
  const checkbox = useRef<HTMLInputElement>(null);

  const choose = (id: string) => {
    checkbox.current?.click();
  };

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" ref={checkbox} />

      <div className="modal">
        <div className="modal-box rounded-lg">
          <h3 className="mb-2 text-lg font-bold">
            Search for Chatty Box Friend !!
          </h3>
          <input
            type="search"
            placeholder="Search for friend..."
            className="input-bordered input w-full "
          />
          <div className="mt-3 flex h-48 flex-col overflow-y-auto">
            {/* {data?.map((user) => (
              <FriendCard onChoose={choose} user={user} />
            ))} */}
          </div>
          <div className="modal-action">
            <label htmlFor={id} className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewConversationModal;
