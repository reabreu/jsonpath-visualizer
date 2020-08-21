import React, { useContext } from "react";
import throttle from "lodash.throttle";
import { StoreContext } from "../index";
import { Input } from "./styles";

const THROTTLE_TIME = 100;

export const QueryInput = () => {
  const { jsonp } = useContext(StoreContext);

  const throttledOnChange = throttle(
    (val) => jsonp.setQuery(val),
    THROTTLE_TIME
  );

  return (
    <div>
      <Input type="text" onChange={(e) => throttledOnChange(e.target.value)} />
    </div>
  );
};
