import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BiSolidUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { axiosInstance } from "../AxiosInstance";
import AllCustomersProvider from "../AllCustomersContext";

export default function AllCustomers() {
  const [allCustomers, setAllCustomers] = useState([]);

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
  }, [allCustomers]);

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const biSolidUserCircleStyle = {
    position: "relative",
    left: "2rem",
    fontSize: " 40px",
    color: "#102C57",
    zIndex: " 1000000",
  };

  const listGroupItemStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "5rem",
    fontSize: " 20px",
    width: "100%",
  };

  return (
    <AllCustomersProvider>
      <ListGroup as="ul">
        {allCustomers.map((customer) => (
          <>
            <Link
              to={{
                pathname: `/customers/${customer.id}`,
                state: {
                  customerName: customer.customer_name,
                  customerEmail: customer.customer_email,
                  customerAccountNumber: customer.customer_account_number,
                },
              }}
              key={customer.id}
              style={linkStyle}
            >
              <ListGroup.Item style={listGroupItemStyle} as="li">
                <BiSolidUserCircle style={biSolidUserCircleStyle} />
                {customer.customer_name}
                <span>{customer.customer_email}</span>
                <span>{customer.customer_account_number}</span>
              </ListGroup.Item>
            </Link>
          </>
        ))}
      </ListGroup>
    </AllCustomersProvider>
  );
}

/*
export function TheOneSelectedCustomer({
  allCustomers,
  linkStyle,
  listGroupItemStyle,
  biSolidUserCircleStyle,
}) {
  return (
    <ListGroup as="ul">
      {allCustomers &&
        allCustomers.map((customer) => (
          <>
            <Link
              to={{
                pathname: `/customers/${customer.id}`,
                state: {
                  customerName: customer.customer_name,
                  customerEmail: customer.customer_email,
                  customerAccountNumber: customer.customer_account_number,
                },
              }}
              style={linkStyle}
            >
              <ListGroup.Item
                style={listGroupItemStyle}
                as="li"
                key={customer.id}
              >
                <BiSolidUserCircle style={biSolidUserCircleStyle} />
                {customer.customer_name}
                <span>{customer.customer_email}</span>
                <span>{customer.customer_account_number}</span>
              </ListGroup.Item>
            </Link>
          </>
        ))}
    </ListGroup>
  );
}

<TheOneSelectedCustomer
  allCustomers={allCustomers}
  linkStyle={linkStyle}
  listGroupItemStyle={listGroupItemStyle}
  biSolidUserCircleStyle={biSolidUserCircleStyle}
/>;
*/
