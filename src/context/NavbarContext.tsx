import { createContext, useContext, useState, ReactNode } from "react";

// Define a type for the context value
interface NavbarContextType {
  clicked: boolean;
  handleClick: () => void;
}

// Create the context with a default value
const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// Provider component to wrap around your app or part of your component tree
export function NavbarProvider({ children }: { children: ReactNode }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((prevClicked) => !prevClicked);
  }

  return (
    <NavbarContext.Provider value={{ clicked, handleClick }}>
      {children}
    </NavbarContext.Provider>
  );
}

// Custom hook to use the Navbar context
export function useNavbar() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
}
