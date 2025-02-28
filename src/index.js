import "mobx-react-lite/batchingForReactDom";
import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./global-styles";
import { Header } from "./header";
import { FileImport } from "./file-import";
import { QueryInput } from "./query-input";
import { InputsPanel } from "./inputs-panel";
import { Tree } from "./tree";
import store from "./store";

export const StoreContext = React.createContext();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <GlobalStyle />
    <Header />
    <InputsPanel>
      <FileImport />
      <QueryInput />
    </InputsPanel>
    <Tree />
  </StoreContext.Provider>,
  document.getElementById("root")
);
