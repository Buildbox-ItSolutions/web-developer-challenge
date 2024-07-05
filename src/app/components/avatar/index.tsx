import { AvatarImage, CustomNoImage } from "./style";
import { CiUser } from "react-icons/ci";

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

export const NoImage = () => (
  <CustomNoImage>
    <CiUser />
  </CustomNoImage>
);
