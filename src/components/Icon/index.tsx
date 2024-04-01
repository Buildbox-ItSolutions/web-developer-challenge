import { IconProps } from "./types";
import Image from "next/image";

const Icon: React.FC<IconProps> = (props) => {
  const { name, size = 24, ...rest } = props;

  return (
    <Image
      {...rest}
      width={size}
      height={size}
      alt={`icon-${name}`}
      src={`./icons/${name}.svg`}
    />
  );
};

export default Icon;
