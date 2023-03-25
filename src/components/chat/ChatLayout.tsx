import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const ChatLayout = () => {
  const { data } = useSession();

  return (
    <div style={{ flex: "1 1 0" }} className="overflow-y-auto p-4">
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
        <div className="chat-footer">Jevon Mozart</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src={data?.user.image as string}
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          You underestimate my power!
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
