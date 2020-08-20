import React from "react";

export const File = ({ onChange, hasError }) => {
  return (
    <div>
      <label htmlFor="file">Choose a JSON file:</label>
      <input
        onChange={onChange}
        type="file"
        id="file"
        name="json"
        accept=".json"
        role="button"
      />
      {hasError && <p>Oops, looks like there was an error, please retry.</p>}
    </div>
  );
};
