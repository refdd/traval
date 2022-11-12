import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
  Highlight: false,
  Iternary: false,
  Reviews: false,
  Comments: false,
  AddReviwes: false,
  Prices: false,
};

export const ContextProvider = ({ children }) => {
  const [displayType, setDisplayType] = useState({
    Nile: "Luxor Aswan Nile Cruises",
    Travel: "Classical Egypt Travel Packages",
  });
  const [desplaygrid, setdesplauGrid] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        handleClick,
        setIsClicked,
        isClicked,
        initialState,
        displayType,
        setDisplayType,
        desplaygrid,
        setdesplauGrid,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
