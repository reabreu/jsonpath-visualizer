import React from "react";
import JSONTree from "react-json-tree";
import jp from "jsonpath";
import styled from "styled-components";

const NodeTree = styled.label`
  color: ${({ isSelected }) => (isSelected ? "red" : null)};
`;

export const JsonTree = ({ data, matchSet }) => (
  <JSONTree
    data={data}
    keyPath={["$"]}
    shouldExpandNode={() => true}
    labelRenderer={(keyPath, nodeType, expanded) => {
      const isSelected = matchSet.has(jp.stringify([...keyPath].reverse()));
      return <NodeTree isSelected={isSelected}>{keyPath[0]}</NodeTree>;
    }}
  />
);
