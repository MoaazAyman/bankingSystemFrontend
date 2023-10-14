import "./App.css";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import MiddleContent from "./MiddleContent";
import LastTransactions from "./LastTransactions";
import AllCustomersProvider from "./AllCustomersContext";

export default function App() {
  return (
    <AllCustomersProvider>
      <div>
        <SideBar />
        <Navbar />
        <MiddleContent />
        <LastTransactions />
      </div>
    </AllCustomersProvider>
  );
}
