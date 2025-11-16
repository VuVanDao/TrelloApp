import { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isCallingApi, setIsCallingApi] = useState(false);

  return (
    <LoadingContext.Provider value={{ isCallingApi, setIsCallingApi }}>
      {children}
    </LoadingContext.Provider>
  );
};
