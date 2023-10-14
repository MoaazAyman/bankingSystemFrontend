import { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
/*import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";*/
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { axiosInstance } from "./AxiosInstance";

export default function QuickTransfers() {
  const QuickTransfersSectionStyle = {
    borderRadius: "20px",
    border: "1px solid black",
    /* background: "black",
    color: "#eee",*/
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //width: "400px",
    height: "200px",
    marginTop: "1rem",
    marginRight: "-3rem",
    padding: "0.5rem 2.5rem 0.5rem 0.5rem",
    transition: "0.5s ease-in-out",
    position: "absolute",
    right: "1.5rem",
    overflowY: "hidden",
    overflowX: "hidden",
    // Change to overflowX for horizontal scrolling
  };

  const UserToTransferToWrapperStyle = {
    position: "sticky",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    height: "150px",
    width: "350px", // Align UserToTransferTo components to the left
  };

  const AddNewStyle = {
    position: "sticky",
    top: "3.5rem",
    marginLeft: "-2rem",
    marginTop: " 3rem",
    zIndex: "200000", // Set the left position to 0 to keep it to the left
  };

  const h3Style = {
    position: "sticky",
    top: "0",
    marginTop: "0",
    marginBottom: "16rem",
    left: "20px",
    fontSize: "18px",
  };

  /* const grFormPreviousStyle = {
    color: "black",
    position: "relative",
    bottom: "72px",
    left: "23rem",
    cursor: "pointer",
    fontSize: "1.5rem",
  };

  const grFormNextStyle = {
    color: "black",
    position: "relative",
    bottom: "98.5px",
    left: "25.5rem",
    cursor: "pointer",
    fontSize: "1.5rem",
  };*/
  return (
    <section style={QuickTransfersSectionStyle}>
      <span></span>
      <h3 style={h3Style}>Quick Transfer</h3>
      <section style={AddNewStyle}>
        <AddNew />
      </section>

      <div style={UserToTransferToWrapperStyle}>
        <UserToTransferTo />
      </div>
    </section>
  );
}

function UserToTransferTo() {
  const BiSolidUserCircleStyle = {
    fontSize: "60px",
    color: "#FE7BE5",
  };

  const UserToTransferToStyle = {
    position: "relative",
    bottom: "19px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem 0rem 1rem 0rem",
    padding: "2rem 1rem 1rem 1rem",
    cursor: "pointer",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const [usersToTransferTo, setUsersToTransferTo] = useState([]);

  useEffect(() => {
    axiosInstance.get("/customers").then((response) => {
      const data = response.data;
      setUsersToTransferTo(data);
    });
  }, []);
  return (
    <>
      {usersToTransferTo.map((user) => (
        <Link
          to={{ pathname: `/customers/${user.id}` }}
          style={linkStyle}
          key={user.id}
        >
          <span style={UserToTransferToStyle}>
            <BiSolidUserCircle style={BiSolidUserCircleStyle} />
            <p>{user.customer_name}</p>
          </span>
        </Link>
      ))}
    </>
  );
}

function AddNew() {
  const IoIosAddStyle = {
    fontSize: "50px",
    fontWeight: "20",
    color: "black",
    zIndex: "1000",
    cursor: "pointer",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Link to="/customers" style={linkStyle}>
      <span>
        <IoIosAdd style={IoIosAddStyle} />
        <p>Add New</p>
      </span>
    </Link>
  );
}
