import React, { useContext } from "react";
import { StoreContext } from "../index";

export const QueryInput = () => {
  const { jsonp } = useContext(StoreContext);

  return <input type="text" onChange={(e) => jsonp.setQuery(e.target.value)} />;
};
