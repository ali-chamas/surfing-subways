import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("session"))
  );

  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );

  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
    window.localStorage.setItem("session", JSON.stringify(userData));
    window.localStorage.setItem("token", JSON.stringify(token));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    window.localStorage.removeItem("session");
    window.localStorage.removeItem("token");
  };
  return (
    <UserContext.Provider value={{ token, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
