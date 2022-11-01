import InformationBox from "../../components/InformationBox";
import DashContextProvider from "../../context/DashboardContext";

export default function Dashboard() {
  return (
    <DashContextProvider>
      <InformationBox />
    </DashContextProvider>
  );
}
