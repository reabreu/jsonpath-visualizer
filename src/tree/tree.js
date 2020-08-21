import React, { useContext, useMemo } from "react";
import JSONTree from "react-json-tree";
import { observer } from "mobx-react";
import jp from "jsonpath";
import { StoreContext } from "../index";
import { TreeTheme, NodeTree } from "./styles";

const keyPathtoString = (keyPath, matchSet) =>
  jp.stringify([...keyPath].reverse());

const TreeLabelNode = observer(({ keyPath }) => {
  const { jsonp } = useContext(StoreContext);
  const { matchSet } = jsonp;

  const pathString = useMemo(() => keyPathtoString(keyPath), [keyPath]);

  const isSelected = matchSet.has(pathString);

  return <NodeTree isSelected={isSelected}>{keyPath[0]}</NodeTree>;
});

export const JsonTree = ({ data }) => (
  <JSONTree
    data={data}
    keyPath={["$"]}
    invertTheme={false}
    shouldExpandNode={(keyName, data, level) => {
      return level < 1;
    }}
    labelRenderer={(keyPath) => <TreeLabelNode keyPath={keyPath} />}
    theme={TreeTheme}
  />
);
