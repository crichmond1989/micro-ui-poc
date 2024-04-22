import MessageDto from "../dto/messageDto";

type MessageGridItemProps = {
  data: MessageDto;
};

function MessageGridItem(p: MessageGridItemProps) {
  return (
    <tr>
      <td>{p.data.bookmark ? "🔖" : ""}</td>
      <th className="text-nowrap">{p.data.sender}</th>
      <td>
        <b>{p.data.subject}</b> - {p.data.body}
      </td>
      <th className="text-nowrap">{p.data.timestamp}</th>
    </tr>
  );
}

export default MessageGridItem;
