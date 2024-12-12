import { Card, CardStyleProps } from "./styles";

interface PostCardProps extends CardStyleProps {
  children: JSX.Element | JSX.Element[];
}

export const PostCard = ({ children, ...props }: PostCardProps) => {
  return <Card {...props}>{children}</Card>;
};
