import styled from "styled-components";
import { theme } from "../theme";

export const Label = styled.label`
  font-size: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  font-size: 16px;
  margin-right: 20px;
  background: none;
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Error = styled.p`
  position: absolute;
  min-width: 200px;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Path = styled.path``;

export const SVG = styled.svg`
  width: 60px;

  :hover {
    cursor: pointer;
    ${Path} {
      fill: ${theme.colors.tertiary};
    }
  }

  ${Path} {
    fill: ${theme.colors.secundary};
  }
`;
