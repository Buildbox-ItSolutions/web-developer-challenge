import { Feed } from "./Feed/Feed";
import Postbox from "./Postbox/Postbox";
import { GridContainer } from "./Styles/Grid.styled";

export const Home = () => {
  return (
    <>
      <GridContainer>
        <div></div>
        <div>
          <Postbox></Postbox>
          <Feed></Feed>
        </div>
        <div></div>
      </GridContainer>
    </>
  );
};
