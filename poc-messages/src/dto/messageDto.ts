type MessageDto = {
  id: string;
  timestamp: string;
  bookmark: boolean;
  sender: string;
  subject: string;
  body: string;
  actionUrl?: string;
};

export default MessageDto;
