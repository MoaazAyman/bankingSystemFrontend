import { useEffect, useContext } from "react";
// import ListGroup from "react-bootstrap/ListGroup";
// import { BiSolidUserCircle } from "react-icons/bi";
import { axiosInstance } from "../AxiosInstance";
//import AllCustomersProvider from "../AllCustomersContext";
import {
  CustomersListContext,
  UpdateCustomersContext,
} from "../AllCustomersContext";
import AllCustomers from "../pages/AllCustomers";

function ReceiverCustomer() {
  // const listGroupItemStyle = {
  //   display: "flex",
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  //   gap: "5rem",
  //   fontSize: " 20px",
  //   width: "100%",
  // };

  // const biSolidUserCircleStyle = {
  //   position: "relative",
  //   left: "2rem",
  //   fontSize: " 40px",
  //   color: "#102C57",
  //   zIndex: " 1000000",
  // };

  const { allCustomers } = useContext(CustomersListContext);
  const { setAllCustomers } = useContext(UpdateCustomersContext);

  // useEffect(() => {
  //   axiosInstance.get("/customers").then((response) => {
  //     const data = response.data;
  //     setAllCustomers(data);
  //   });
  // }, [setAllCustomers]);

  useEffect(() => {
    axiosInstance
      .get("/customers")
      .then((response) => {
        const data = response.data;
        setAllCustomers(data);
      })
      .catch((error) => {
        if (axiosInstance.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.log("Error:", error.message);
        }
      });
  }, [setAllCustomers]);

  if (Array.isArray(allCustomers) && allCustomers.length > 0) {
    return <AllCustomers />;
  } else {
    return null;
  }
}

export default ReceiverCustomer;
