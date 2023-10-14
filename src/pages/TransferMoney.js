import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function TransferMoney() {
  const { id } = useParams();
  const inputStyling = {
    width: "100%",
    heigth: "100%",
    border: "1px solid #B4B4B3",
    borderRadius: "10px",
    outline: "none",
  };

  const [transferAmount, setTransferAmount] = useState("");
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial", margin: "7rem auto" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Amount</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="text"
            placeholder="00.00"
            style={inputStyling}
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
          ></input>
        </Modal.Body>

        <Modal.Footer>
          <Link to={`/customers/${id}`}>
            <Button variant="primary">Back</Button>
          </Link>{" "}
          {parseFloat(transferAmount) > 0 ? (
            <Link to="/ReceiverCustomer">
              <Button variant="primary">Select Customer To Transfer To</Button>
            </Link>
          ) : (
            <Link to="/ReceiverCustomer">
              <Button variant="secondary" disabled>
                Select Customer To Transfer To
              </Button>
            </Link>
          )}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
