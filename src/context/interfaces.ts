export interface PropsDashContext {
  messages: Message[];
  setMessages: (value: Message[]) => void;
}

export interface Message {
  name?: string;
  image?: string | null;
  description?: string;
  id?: string;
}
