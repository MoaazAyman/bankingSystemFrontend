import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { axiosInstance } from "../AxiosInstance";
function Sender() {
  const BiSolidUserCircleStyle = {
    fontSize: "60px",
    color: "#102C57",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/customers/${id}`).then((response) => {
      const data = response.data;
      setSelectedCustomer(data);
    });
  }, [id]);

  const handleTransferClick = () => {
    // Use navigate to navigate to ReceiverCustomer with the selected customer's id as a URL parameter
    navigate(`/TransferMoney`);
  };

  if (selectedCustomer === null) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="text-center">
      <Card.Header>Customer Information</Card.Header>
      <Card.Body>
        <Card.Title>
          <BiSolidUserCircle style={BiSolidUserCircleStyle} />
        </Card.Title>
        <Card.Title>{selectedCustomer?.customer_name}</Card.Title>
        <Card.Text>{selectedCustomer?.customer_email}</Card.Text>
        <Card.Text>{selectedCustomer?.customer_account_number}</Card.Text>
        <Button variant="dark" onClick={handleTransferClick}>
          Next
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Sender;
