import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [displayType , setDisplayType] = useState({
    Nile: "Luxor Aswan Nile Cruises",
    Travel: "Classical Egypt Travel Packages"
  })
  const [desplaygrid , setdesplauGrid] = useState(false)
  

  

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ initialState , displayType , setDisplayType , desplaygrid , setdesplauGrid }}>
      {children} 
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
