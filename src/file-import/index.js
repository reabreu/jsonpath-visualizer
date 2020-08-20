import React, { useContext, useState } from "react";
import { StoreContext } from "../index";
import { File } from "./file";

const onChange = (file, setError) => (e) => {
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    try {
      file.setData(JSON.parse(event.target.result));
      setError(false);
    } catch {
      setError(true);
    }
  });

  reader.readAsText(e.target.files[0]);
};

export const FileImport = () => {
  const [error, setError] = useState(false);
  const { file } = useContext(StoreContext);

  return <File onChange={onChange(file, setError)} hasError={error} />;
};
