import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCustomers from "./pages/AllCustomers";
import ReceiverCustomer from "./pages/ReceiverCustomer";
import TransferMoney from "./pages/TransferMoney";
import Sender from "./pages/Sender";
import AllCustomersProvider from "./AllCustomersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AllCustomersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="customers" element={<AllCustomers />}></Route>
          <Route
            path="/receiverCustomer"
            element={<ReceiverCustomer />}
          ></Route>
          <Route path="/transfermoney" element={<TransferMoney />}></Route>
          <Route path="/customers/:id" element={<Sender />}></Route>
        </Routes>
      </BrowserRouter>
    </AllCustomersProvider>
  </React.StrictMode>
);
