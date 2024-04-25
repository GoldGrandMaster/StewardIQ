"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type StateProps = {
  logIn: boolean;
  handleLogIn: any;
  newDateValue: any;
  handleNewDateChange: any;
};

const LogInContext = createContext({} as StateProps);

const UseLogInProvider = ({ children }: any) => {
  const [logIn, setLogIn] = useState<boolean>(false);
  const [newDateValue, setNewDateValue] = useState<string>("");

  const handleLogIn = (value: boolean) => {
    setLogIn(value);
  };

  const handleNewDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDateValue(event.target.value);
  };

  return (
    <LogInContext.Provider value={{ logIn, newDateValue, handleLogIn, handleNewDateChange }}>
      {children}
    </LogInContext.Provider>
  );
};

const useLogInContext = () => {
  return useContext(LogInContext);
};

export { UseLogInProvider, useLogInContext };
