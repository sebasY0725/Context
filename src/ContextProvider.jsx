import React, { createContext, useState } from "react";

/* Data */
import { carga } from "./carga.js";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  /* useState */
  const [data, setData] = useState(carga);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

/*
  <Card>
    <Header/>
  <Card/> 

  <Card>
    {children}
  <Card/> 


*/
