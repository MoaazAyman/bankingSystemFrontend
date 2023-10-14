import React, { useState, useEffect, createContext } from "react";
import { axiosInstance } from "./AxiosInstance";

export const CustomersListContext = createContext([]);
export const UpdateCustomersContext = createContext(() => {});

export default function AllCustomersProvider({ children }) {
  const [allCustomers, setAllCustomers] = useState([]);

  useEffect(() => {
    axiosInstance.get("/customers").then((response) => {
      const data = response.data;
      setAllCustomers(data);
    });
  }, []);

  return (
    <CustomersListContext.Provider value={allCustomers}>
      <UpdateCustomersContext.Provider value={{ setAllCustomers }}>
        {children}
      </UpdateCustomersContext.Provider>
    </CustomersListContext.Provider>
  );
}
