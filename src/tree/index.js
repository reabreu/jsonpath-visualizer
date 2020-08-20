import React, { useContext } from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { StoreContext } from "../index";

export const Tree = observer(() => {
  const { file } = useContext(StoreContext);
  console.log(toJS(file));
  return <span>File data here</span>;
});
