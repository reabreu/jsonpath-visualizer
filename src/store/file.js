import { decorate, observable, computed, action } from "mobx";
import jp from "jsonpath";

class JSONP {
  data = {};
  query = "";

  setData(data) {
    this.data = data;
  }

  setQuery(query) {
    this.query = query;
  }

  get matchSet() {
    console.log("match set computed");
    const matchSet = new Set();

    if (this.query !== "") {
      try {
        const paths = jp.paths(this.data, this.query);

        paths.forEach((element) => {
          matchSet.add(jp.stringify(element));
        });
      } catch {
        console.log("Invalid expression analyzed");
      }
    }

    return matchSet;
  }
}

export const JSONPState = decorate(JSONP, {
  data: observable,
  query: observable,
  matchSet: computed,
  setData: action,
  setQuery: action,
});
