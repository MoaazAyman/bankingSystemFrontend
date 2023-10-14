import { IoMdNotifications } from "react-icons/io";
import { BiSolidUserCircle } from "react-icons/bi";

export default function Navbar() {
  const navbarStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "83%",
    float: "right",
    backgroundColor: "transparent",
    color: "black",
  };

  const IoMdNotificationsStyle = {
    position: "relative",
    left: "24.5rem",
    fontSize: " 25px",
    color: "#102C57",
  };

  const BiSolidUserCircleStyle = {
    position: "relative",
    left: "11rem",
    fontSize: " 60px",
    color: "#102C57",
  };

  const spanStyle = {
    position: "relative",
    right: "3rem",
    fontSize: " 20px",
  };

  const h2Style = {
    position: "relative",
    fontSize: " 30px",
    left: "12rem",
    color: "#102C57",
  };
  return (
    <div style={navbarStyle}>
      <h2 style={h2Style}>Welcome To Your Dashboard</h2>
      <IoMdNotifications style={IoMdNotificationsStyle} />
      <BiSolidUserCircle style={BiSolidUserCircleStyle} />
      <span style={spanStyle}>user name</span>
    </div>
  );
}
