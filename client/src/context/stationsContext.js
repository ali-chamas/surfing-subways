import { createContext, useEffect } from "react";
import { useState } from "react";
import { sendRequest } from "../tools/request/request";
import Loader from "../common/components/Loader";

export const StationContext = createContext();

const StationContextProvider = ({ children }) => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const getStations = async () => {
    setLoading(true);
    try {
      const res = await sendRequest("GET", "/stations");
      const data = await res.data;
      setStations(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getStations();
  }, [stations.length]);

  return (
    <StationContext.Provider value={{ stations }}>
      {loading && <Loader />}
      {children}
    </StationContext.Provider>
  );
};
export default StationContextProvider;
