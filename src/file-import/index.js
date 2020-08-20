import React, { useContext } from "react";
import { StoreContext } from "../index";
import { File } from "./file";

export const FileImport = () => {
  const { file } = useContext(StoreContext);

  const onChange = (e) => {
    const reader = new FileReader();

    reader.addEventListener("load", (event) => {
      file.setData(JSON.parse(event.target.result));
    });

    reader.readAsText(e.target.files[0]);
  };

  return <File onChange={onChange} />;
};
