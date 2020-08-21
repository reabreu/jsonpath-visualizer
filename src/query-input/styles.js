import styled from "styled-components";
import { theme } from "../theme";

export const Input = styled.input`
  background: none;
  border: 1px solid ${theme.colors.secundary};
  font-size: 20px;
  border-radius: 5px;
  font-weight: 100;
  font-family: "Roboto";
  padding: 5px 10px;
  color: ${theme.colors.secundary};

  &:focus {
    outline: none;
  }
`;
