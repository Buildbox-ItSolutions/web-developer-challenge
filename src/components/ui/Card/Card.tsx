import { FC } from 'react'
import { CardContainer } from "./styles";

const Card: FC<{children: React.ReactNode}> = ({ children }) => (
    <CardContainer>
      <div>
        {children}
      </div>
    </CardContainer>
  );

export default Card;
