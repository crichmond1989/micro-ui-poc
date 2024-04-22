import MessageDto from "../dto/messageDto";

const mockData: MessageDto[] = [
  {
    timestamp: "2024-04-22",
    subject: "Coronation",
    sender: "Aragorn",
    id: "10",
    bookmark: false,
    body: "My friends, you bow to no one.",
  },
  {
    timestamp: "2024-04-20",
    subject: "Prophesy fulfilled",
    sender: "Eowyn",
    id: "9",
    bookmark: false,
    body: "I am no man.",
  },
  {
    timestamp: "2024-04-18",
    subject: "Feast!",
    sender: "Ugluk",
    id: "8",
    bookmark: false,
    body: "Looks like meat's back on the menu, boys!",
  },
  {
    timestamp: "2024-04-17",
    subject: "Next stop",
    sender: "Treebeard",
    id: "7",
    bookmark: false,
    body: "I always liked going south. Somehow, it feels like going downhill.",
  },
  {
    timestamp: "2024-04-16",
    subject: "Elf Eyes",
    sender: "Legolas",
    id: "6",
    bookmark: true,
    body: "They're taking the hobbits to Isengard!",
  },
  {
    timestamp: "2024-04-15",
    subject: "RE: Need Help",
    sender: "Theoden",
    id: "5",
    bookmark: false,
    body: "Where was Gondor when the Westfold fell?",
  },
  {
    timestamp: "2024-04-10",
    subject: "Cave Troll",
    sender: "Boromir",
    id: "4",
    bookmark: false,
    body: "They have a cave troll.",
  },
  {
    timestamp: "2024-04-03",
    subject: "On To Bree",
    sender: "Gandalf",
    id: "3",
    bookmark: true,
    body: "Bad news has reached me here. I must go off at once. You had better leave Bag End soon, and get out of the Shire before the end of July at latest. I will return as soon as I can; and I will follow you, if I find that you are gone. Leave a message for me here, if you pass through Bree.",
  },
  {
    timestamp: "2024-04-02",
    subject: "Farewell",
    sender: "Bilbo",
    id: "2",
    bookmark: false,
    body: "I'm off to Rivendell. Remember to keep the ring safe!",
  },
  {
    timestamp: "2024-04-01",
    subject: "One Ring",
    sender: "Sauron",
    id: "1",
    bookmark: false,
    body: "One ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them.",
  },
];

class MessageApi {
  getMessages(name?: string): Promise<MessageDto[]> {
    if (!name) {
      return Promise.resolve([]);
    }

    return Promise.resolve(mockData);
  }
}

export default new MessageApi();
