import React from "react";

export const File = ({ onChange }) => (
  <div>
    <label htmlFor="file">Choose a JSON file:</label>
    <input
      onChange={onChange}
      type="file"
      id="file"
      name="json"
      accept=".json"
    />
  </div>
);
