import React, { useState, useEffect } from "react";
import APIHandler from "../Api/ApiHandler";

const HeaderContext = React.createContext();
const apiHandler = new APIHandler();

const HeaderInfosProvider = props => {
  const [headerState, setHeaderState] = useState([]);

  useEffect(() => {
    const fetchHeaderInfos = async () => {
      const dbRes = await apiHandler.get("/api/pages/headers");
      setHeaderState(dbRes.data);
    };
    fetchHeaderInfos();
  }, []);
  console.log("HeaderState", headerState);
  return (
    <HeaderContext.Provider value={{ headerState }}>
      {props.children}
    </HeaderContext.Provider>
  );
};

const HeaderInfosConsumer = HeaderContext.Consumer;

export { HeaderInfosProvider, HeaderInfosConsumer };
