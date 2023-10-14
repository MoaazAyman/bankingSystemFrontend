import { useState, useEffect } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import QuickTransfers from "./QuickTransfer";
import ListGroup from "react-bootstrap/ListGroup";
import { axiosInstance } from "./AxiosInstance";

export default function LastTransactions() {
  const LastTransactionsStyle = {
    // border: "1px solid black",
    float: "right",
    width: "30%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "2rem",
    transition: "0.5s ease-in-out",
    position: "relative",
    right: "0",
    //bottom: " 51.5rem",
    bottom: " 36rem",
  };

  const h1Style = {
    position: "relative",
    left: "4rem",
    bottom: "1rem",
  };

  const quickTransfersStyle = {
    width: "100%",
    position: "relative",
    right: "2rem",
  };

  return (
    <section style={LastTransactionsStyle}>
      <div style={quickTransfersStyle}>
        <h2 style={h1Style}>Last Transfers</h2>
        <Details />
      </div>
      <div style={quickTransfersStyle}>
        <QuickTransfers />
      </div>
    </section>
  );
}

const detailsStyle = {
  border: "none",
  width: "100%",
  borderRadious: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "2rem",
  height: "3rem",
  padding: "2rem 2rem",
  //backgroundColor: "#F1EFEF",
  backgroundColor: "transparent",
  margin: "0.5rem 0rem 0.5rem 1.5rem",
};

function Details() {
  const BiSolidUserCircleStyle = {
    fontSize: " 60px",
    color: "#FE7BE5",
  };

  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    axiosInstance.get("/transfermoney/1/2/300").then((response) => {
      const data = response.data;
      setTransfers(data);
    });
  }, []);

  return (
    <div>
      <ListGroup as="ul">
        {transfers.map((transfer) => (
          <ListGroup.Item as="li" style={detailsStyle} key={transfer.sender_id}>
            <BiSolidUserCircle style={BiSolidUserCircleStyle} />
            <span>{transfer.amount}</span>
            <span>from</span>
            <span>
              <strong>{transfer.sender_id}</strong>
            </span>
            <span>to</span>
            <span>
              <strong>{transfer.receiver_id}</strong>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

/*import { useState, useEffect } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import QuickTransfers from "./QuickTransfer";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export default function LastTransactions() {
  const LastTransactionsStyle = {
    // border: "1px solid black",
    float: "right",
    width: "30%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "2rem",
    transition: "0.5s ease-in-out",
    position: "relative",
    right: "0",
    //bottom: " 51.5rem",
    bottom: " 36rem",
  };

  const h1Style = {
    position: "relative",
    left: "2.5rem",
    bottom: "1rem",
  };

  const quickTransfersStyle = {
    width: "100%",
    position: "relative",
    right: "2rem",
  };

  return (
    <section style={LastTransactionsStyle}>
      <div style={quickTransfersStyle}>
        <h2 style={h1Style}>Last Transfers</h2>
        <Details />
      </div>
      <div style={quickTransfersStyle}>
        <QuickTransfers />
      </div>
    </section>
  );
}

const detailsStyle = {
  width: "100%",
  borderRadious: "20px",
  display: "flex",
  margin: " 0.5rem",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
  height: "3rem",
  padding: "2rem 2rem",
  backgroundColor: "#F1EFEF",
};

function Details() {
  const BiSolidUserCircleStyle = {
    fontSize: " 60px",
    color: "#FE7BE5",
  };

  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    axiosInstance.get("/transfermoney/1/2/300").then((response) => {
      const data = response.data;
      setTransfers(data);
    });
  }, []);
  return (
    <div>
      <ul>
        {transfers.map((transfer) => (
          <li style={detailsStyle} key={transfer.sender_id}>
            <BiSolidUserCircle style={BiSolidUserCircleStyle} />
            <span>{transfer.amount}</span>
            <span>from</span>
            <span>
              <strong>{transfer.sender_id}</strong>
            </span>
            <span>to</span>
            <span>
              <strong>{transfer.receiver_id}</strong>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/
