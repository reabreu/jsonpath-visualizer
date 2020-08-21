import styled from "styled-components";
import { theme } from "../theme";

export const TreeTheme = {
  scheme: "custom",
  author: "Ruben",
  base00: theme.colors.quinary,
  base03: theme.colors.senary,
  base09: theme.colors.tertiary,
  base0B: theme.colors.tertiary,
  base0D: theme.colors.primary,
};

export const NodeTree = styled.label`
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : null)};
`;
