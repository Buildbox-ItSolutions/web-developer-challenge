import Text from "@components/Text";
import { BtnRemove, Content, Wrapper } from "./styles";
import { CardProps } from "./types";
import Avatar from "@components/Avatar";

const Card: React.FC<CardProps> = (props) => {
  const { name, photo, message, posting, removing, onRemove } = props;

  return (
    <Wrapper className={posting ? "posting" : removing ? "removing" : "active"}>
      <Avatar size={88} radius={36} src={photo} />
      <Content>
        <Text color="placeholder">{message}</Text>
        <div>
          <Text size="xs" weight="medium" color="disabled">
            Enviado por
          </Text>
          <Text size="sm" color="warm_grey">
            {name}
          </Text>
        </div>
      </Content>
      <BtnRemove size={20} name="delete" onClick={onRemove} />
    </Wrapper>
  );
};

export * from "./types";

export default Card;
