import { Feed } from "./Feed/Feed";
import Postbox from "./Postbox/Postbox";
import { GridColumn, GridContainer } from "./Styles/Grid.styled";

export const Home = () => {
  return (
    <>
      <GridContainer>
        <GridColumn></GridColumn>
        <GridColumn>
          <Postbox></Postbox>
          <Feed></Feed>
        </GridColumn>
        <GridColumn></GridColumn>
      </GridContainer>
    </>
  );
};
