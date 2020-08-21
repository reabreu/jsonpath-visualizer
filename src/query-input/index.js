import React, { useContext } from "react";
import { StoreContext } from "../index";
import { Input } from "./styles";

export const QueryInput = () => {
  const { jsonp } = useContext(StoreContext);

  return (
    <div>
      <Input type="text" onChange={(e) => jsonp.setQuery(e.target.value)} />
    </div>
  );
};
