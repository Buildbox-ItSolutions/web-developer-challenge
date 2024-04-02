import { toast } from "react-toastify";
interface NotificationProps {
  message: string;
  type: "success" | "error";
}
export const notification = ({ message, type }: NotificationProps) => {
  return toast(message, { type: type });
};
