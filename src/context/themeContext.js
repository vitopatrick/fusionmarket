import React ,{ createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeChanger = ({ children }) => {
  const [dark, setLight] = useState(true);

  const changeTheme = () => {
    setLight(!dark);
  };
  return (
    <ThemeContext.Provider value={{ checked: dark, change: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeChanger;
