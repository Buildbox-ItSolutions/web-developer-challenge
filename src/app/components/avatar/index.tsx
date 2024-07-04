import { AvatarImage } from "./style";

type AvatarProps = {
  url: string;
};

export const Avatar = ({ url }: AvatarProps) => {
  return (
    <AvatarImage src={`url(${url})`} width={88} height={88} alt="avatar" />
  );
};
