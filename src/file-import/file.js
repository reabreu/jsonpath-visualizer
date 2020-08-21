import React from "react";
import { UploadIcon } from "./upload-icon";
import { Label, Input, Wrapper, Error } from "./styles";

export const File = ({ onChange, hasError }) => {
  return (
    <Wrapper>
      <Label htmlFor="file">
        <UploadIcon />
      </Label>
      <Input
        onChange={onChange}
        type="file"
        id="file"
        name="json"
        accept=".json"
        role="button"
      />
      {hasError && (
        <Error>Oops, looks like there was an error, please retry.</Error>
      )}
    </Wrapper>
  );
};
