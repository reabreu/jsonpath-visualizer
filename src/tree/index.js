import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../index";
import { JsonTree } from "./tree";

export const Tree = observer(() => {
  const { jsonp } = useContext(StoreContext);
  const { data } = jsonp;

  return <JsonTree data={data} />;
});
