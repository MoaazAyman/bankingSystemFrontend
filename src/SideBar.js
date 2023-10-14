import SideBarUnit from "./SideBarUnit";
import { FaHome } from "react-icons/fa";
import { ImUndo2 } from "react-icons/im";
import { GrTransaction } from "react-icons/gr";
import { LiaCreditCardSolid } from "react-icons/lia";
import { GrLineChart } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function SideBar() {
  const sideBarStyle = {
    //border: "1px solid black",
    position: "fixed",
    top: "0",
    left: "0",
    height: "100%",
    width: "15%",
    marginTop: "0",
    backgroundColor: "#F1EFEF",
    transition: "0.5s",
    zIndex: "1000",
    display: "inline-block",
    flexWrap: "wrap",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
  };

  const linkStyle = {
    display: "block",
    padding: "0.5rem 1rem",
    color: "#000",
    textDecoration: "none",

    transition:
      " color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out",
  };

  /*const bottomUnitsStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
  };*/

  const bankingSystemStyle = {
    position: "relative",
    top: "30px",
    color: "#102C57",
    fontSize: " 25px",
  };

  return (
    <>
      <ul style={sideBarStyle}>
        <h1 style={bankingSystemStyle}>Banking System</h1>
        <SideBarUnit>
          <FaHome />
          <Link to="dashboard" style={linkStyle}>
            Dashboard
          </Link>
        </SideBarUnit>
        <SideBarUnit>
          <ImUndo2 />
          <a href="localhost://3000" style={linkStyle}>
            Transfers
          </a>
        </SideBarUnit>
        <SideBarUnit>
          <GrTransaction />
          <a href="localhost://3000" style={linkStyle}>
            Transactions
          </a>
        </SideBarUnit>
        <SideBarUnit>
          <LiaCreditCardSolid />
          <Link to="/customers" style={linkStyle}>
            All Accounts
          </Link>
        </SideBarUnit>
        <SideBarUnit>
          <GrLineChart />
          <a href="localhost://3000" style={linkStyle}>
            Investments
          </a>
        </SideBarUnit>
      </ul>
    </>
  );
}

/*<ul style={bottomUnitsStyle}>
        <SideBarUnit>
          <GrLineChart />
          <a href="#" style={linkStyle}>
            Settings
          </a>
        </SideBarUnit>

        <SideBarUnit>
          <GrLineChart />
          <a href="#" style={linkStyle}>
            Log out
          </a>
        </SideBarUnit>
      </ul> */
