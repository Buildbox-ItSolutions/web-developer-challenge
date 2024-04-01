import Text from "@components/Text";
import { Wrapper } from "./styles";
import { ListProps } from "./types";

const List: React.FC<ListProps> = (props) => {
  const { label, empty, children } = props;

  return (
    <Wrapper className={empty ? "empty" : ""}>
      {empty && (
        <Text align="center" color="disabled">
          {label}
        </Text>
      )}
      {children}
    </Wrapper>
  );
};

export * from "./types";

export default List;
