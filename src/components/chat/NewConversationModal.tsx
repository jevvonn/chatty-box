import { User } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { BsPerson, BsPlus } from "react-icons/bs";
import { ConversationExpect } from "~/types/api";
import FriendCard from "./FriendCard";
import FriendGroupCard from "./FriendGroupCard";

const getUsers = async () => {
  const { data } = await axios.get("/api/chat/users");
  return data;
};

const NewConversationModal = ({ id }: { id: string }) => {
  const session = useSession();
  const checkbox = useRef<HTMLInputElement>(null);
  const [newGroup, setNewGroup] = useState(false);
  const [userSelected, setUserSelected] = useState<User[]>([]);
  const [groupName, setGroupName] = useState("");
  const { data } = useQuery<User[]>({
    queryFn: getUsers,
    queryKey: ["users"],
  });

  const { mutate } = useMutation(
    async (data: ConversationExpect) =>
      axios.post("/api/chat/newConversation", data),
    {
      onError(error) {
        console.log(error);
      },
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  const choose = (id: string) => {
    checkbox.current?.click();
    mutate({
      is_group: false,
      users: [session.data?.user.id as string, id],
    });
  };

  const createGroup = () => {
    checkbox.current?.click();
    mutate({
      name: groupName,
      is_group: true,
      users: [
        session.data?.user.id as string,
        ...userSelected.map((user) => user.id),
      ],
    });

    setUserSelected([]);
    setNewGroup(false);
    setGroupName("");
  };

  const chooseAsGroup = (user: User) => {
    setUserSelected((prev) => {
      return prev.includes(user)
        ? prev.filter((prevUser) => prevUser.id !== user.id)
        : [user, ...prev];
    });
  };

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" ref={checkbox} />

      <div className="modal">
        <div className="modal-box rounded-lg">
          <h3 className="mb-2 text-lg font-bold">
            Search for Chatty Box Friend !!
          </h3>
          <div className="flex gap-2">
            <input
              type="search"
              placeholder="Search for friend..."
              className="input-bordered input w-full "
            />
            <div
              className="btn-neutral tooltip btn flex items-center justify-center"
              data-tip={newGroup ? "New Friend" : "New Group"}
              onClick={() => setNewGroup((prev) => !prev)}
            >
              {newGroup ? <BsPerson size={30} /> : <BsPlus size={30} />}
            </div>
          </div>
          {newGroup && (
            <div className="mt-3">
              <input
                type="text"
                placeholder="Group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="input-bordered input w-full"
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {userSelected.map((user) => (
                  <div
                    className="flex items-center justify-between gap-2 rounded-full bg-neutral py-1 pr-1 pl-3"
                    key={user.id}
                  >
                    <p>{user.name}</p>
                    <div
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-base-100"
                      onClick={() => chooseAsGroup(user)}
                    >
                      ✕
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mt-3 flex h-48 flex-col overflow-y-auto">
            {!newGroup
              ? data?.map((user) => (
                  <FriendCard key={user.id} onChoose={choose} user={user} />
                ))
              : data?.map((user) => (
                  <FriendGroupCard
                    key={user.id}
                    onChoose={chooseAsGroup}
                    user={user}
                    selected={userSelected.includes(user)}
                  />
                ))}
          </div>
          <div className="modal-action">
            {newGroup && (
              <button
                className="btn-primary btn"
                disabled={userSelected.length < 2 || !groupName.length}
                onClick={createGroup}
              >
                Create Group
              </button>
            )}
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
