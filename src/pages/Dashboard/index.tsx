import InformationBox from "../../components/InformationBox";
import DashContextProvider from "../../context/DashboardContext";
import { DashBoardContainer } from "./styles";

export default function Dashboard() {
  return (
    <DashContextProvider>
      <DashBoardContainer>
        <InformationBox />
      </DashBoardContainer>
    </DashContextProvider>
  );
}
