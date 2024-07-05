import { IPost } from "@/app/types";

export let cached = [
  {
    id: 1,
    name: "John Doe",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
  {
    id: 2,
    name: "Jane Smith",
    message:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 3,
    name: "Michael Johnson",
    message:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.",
    avatar: "https://i.pravatar.cc/150?img=50",
  },
] as IPost[];

export const getData = () => cached;
