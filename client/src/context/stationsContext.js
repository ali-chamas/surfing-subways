import { createContext, useEffect } from "react";
import { useState } from "react";
import { sendRequest } from "../tools/request/request";

export const StationContext = createContext();

const StationContextProvider = ({ children }) => {
  const [stations, setStations] = useState([]);

  const getStations = async () => {
    const res = await sendRequest("GET", "/stations");
    const data = await res.data;
    setStations(data);
  };

  useEffect(() => {
    getStations();
  }, [stations.length]);

  return (
    <StationContext.Provider value={{ stations }}>
      {children}
    </StationContext.Provider>
  );
};
export default StationContextProvider;
