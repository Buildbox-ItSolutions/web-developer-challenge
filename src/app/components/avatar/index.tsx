import { AvatarImage } from "./style";

type AvatarProps = {
  url: string;
};

export const Avatar = ({ url }: AvatarProps) => {
  return (
    <AvatarImage
      loader={() => url}
      src={`${url}`}
      width={88}
      height={88}
      alt="avatar"
    />
  );
};
