import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { File } from "../file";

describe("<Search /> spec", () => {
  it("Contains file input and calls onChange", async () => {
    const onChangeHandler = jest.fn();

    const { asFragment, getByRole } = render(
      <File onChange={onChangeHandler} />
    );

    expect(asFragment()).toMatchSnapshot();

    const input = getByRole("button");

    fireEvent.change(input);

    await wait(() => expect(onChangeHandler).toHaveBeenCalled(), {
      timeout: 300,
    });
  });
});
