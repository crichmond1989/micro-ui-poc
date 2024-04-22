import { useEffect, useState } from "react";

import messageApi from "../api/messageApi";
import MessageDto from "../dto/messageDto";
import MessageGridItem from "./MessageGridItem";

type InboxProps = {
  name?: string;
};

function Inbox(p: InboxProps) {
  const [messages, setMessages] = useState([] as MessageDto[]);

  useEffect(() => {
    (async function () {
      const result = await messageApi.getMessages(p.name);

      setMessages(result);
    })();
  }, [p.name]);

  const title = <h2>Inbox</h2>;

  if (messages.length === 0) {
    return (
      <>
        {title}
        <div>⚠️ Please login to see messages.</div>
      </>
    );
  }

  return (
    <>
      {title}
      <table className="table">
        <tbody>
          {messages.map(x => (
            <MessageGridItem key={x.id} data={x} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Inbox;
