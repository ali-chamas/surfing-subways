import { createContext } from "react";
import { useState } from "react";

export const StationContext = createContext();

const StationContextProvider = ({ children }) => {
  const [stations, setStations] = useState([]);

  return (
    <StationContext.Provider value={{ stations, setStations }}>
      {children}
    </StationContext.Provider>
  );
};
export default StationContextProvider;
