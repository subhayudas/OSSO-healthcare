"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  ReactNode,
} from "react";

type ContextProps = {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
};

const NavContext = createContext<ContextProps>({
  activeLink: "",
  setActiveLink: () => {},
});

export default function NavProvider({ children }: { children: ReactNode }) {
  const [activeLink, setActiveLink] = useState<string>("");

  return (
    <NavContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavContext.Provider>
  );
}

export const useNavProvider = () => useContext(NavContext);
