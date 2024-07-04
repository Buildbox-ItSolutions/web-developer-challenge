import { IPost } from "@/app/types";

export let cached = [
  { id: 1, name: "John Doe", message: "Lorem ipsum dolor sit amet" },
  { id: 2, name: "Jane Smith", message: "Consectetur adipiscing elit" },
  {
    id: 3,
    name: "Michael Johnson",
    message: "Sed do eiusmod tempor incididunt",
  },
  { id: 4, name: "Emily Davis", message: "Ut labore et dolore magna aliqua" },
  { id: 5, name: "David Wilson", message: "Ut enim ad minim veniam" },
  {
    id: 6,
    name: "Sarah Anderson",
    message: "Quis nostrud exercitation ullamco",
  },
  {
    id: 7,
    name: "Christopher Martinez",
    message: "Laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 8,
    name: "Jessica Taylor",
    message: "Duis aute irure dolor in reprehenderit",
  },
  {
    id: 9,
    name: "Matthew Thomas",
    message: "Voluptate velit esse cillum dolore",
  },
  { id: 10, name: "Olivia Brown", message: "Eu fugiat nulla pariatur" },
] as IPost[];

export const getData = async (): Promise<IPost[]> => {
  // Somente para simular uma demora na conexao
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return cached;
};
