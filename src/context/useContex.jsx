import { createContext, useState } from "react";

const dataContext = createContext("");

function UseContext({ children }) {
  const [data1, setData] = useState("dwedw");

  return (
    <dataContext.Provider value={{ data1, setData }}>
      {children}
    </dataContext.Provider>
  );
}
export { dataContext, UseContext };
