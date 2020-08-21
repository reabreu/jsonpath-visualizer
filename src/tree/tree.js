import React, { useContext } from "react";
import JSONTree from "react-json-tree";
import { observer } from "mobx-react";
import jp from "jsonpath";
import { StoreContext } from "../index";
import { TreeTheme, NodeTree } from "./styles";

const TreeLabelNode = observer(({ keyPath }) => {
  const { jsonp } = useContext(StoreContext);
  const { matchSet } = jsonp;
  const isSelected = matchSet.has(jp.stringify([...keyPath].reverse()));
  return <NodeTree isSelected={isSelected}>{keyPath[0]}</NodeTree>;
});

export const JsonTree = ({ data }) => (
  <JSONTree
    data={data}
    keyPath={["$"]}
    invertTheme={false}
    shouldExpandNode={(keyName, data, level) => {
      console.log("level", level);
      return level < 1;
    }}
    labelRenderer={(keyPath) => <TreeLabelNode keyPath={keyPath} />}
    theme={TreeTheme}
  />
);
