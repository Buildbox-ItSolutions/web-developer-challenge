import InformationBox from "../../components/InformationBox";
import DashContextProvider from "../../context/DashboardContext";
import { DashBoardContainer } from "./styles";
import FeedComponent from "../../components/Feed/index";

export default function Dashboard() {
  return (
    <DashContextProvider>
      <DashBoardContainer>
        <InformationBox />
        <FeedComponent />
      </DashBoardContainer>
    </DashContextProvider>
  );
}
