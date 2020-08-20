import { observable, action } from "mobx";

export const file = observable(
  {
    data: {},
    setData(data) {
      this.data = data;
    },
  },
  {
    setData: action,
  }
);
