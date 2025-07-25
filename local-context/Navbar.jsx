import { createContext, useState } from "react";
import Navlinks from "./Navlinks";
import { useContext } from "react";

export const NavbarContext = createContext();

//custom hook

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
