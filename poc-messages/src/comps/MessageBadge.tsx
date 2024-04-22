import { useEffect, useState } from "react";

import messageApi from "../api/messageApi";

type MessageBadgeProps = {
  name?: string;
};

function MessageBadge(p: MessageBadgeProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async function () {
      const result = await messageApi.getMessages(p.name);

      setCount(result.length);
    })();
  }, [p.name]);

  if (count === 0) {
    return null;
  }

  return <span className="badge rounded-pill text-bg-danger">{count}</span>;
}

export default MessageBadge;
