import React, { useContext } from "react";
import JSONTree from "react-json-tree";
import { observer } from "mobx-react";
import jp from "jsonpath";
import styled from "styled-components";
import { StoreContext } from "../index";

const NodeTree = styled.label`
  color: ${({ isSelected }) => (isSelected ? "red" : null)};
`;

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
    shouldExpandNode={() => true}
    labelRenderer={(keyPath) => {
      console.log("labelRenderer renderer");
      return <TreeLabelNode keyPath={keyPath} />;
    }}
  />
);
