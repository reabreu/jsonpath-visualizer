This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and it's intended for demo purposes. It allows you to query a JSON object
using the ​ JSONPath​ with an instant and beautiful visualization.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />

## Architectural notes

### Stack

- App uses `Mobx` for state management and shares that state via `React Context`
- Styling is archieved via `styled-components`
- Folder structure is organized by functionality
- JSONP parsing is archived via `jsonpath` package, which uses an AST to determine matching paths between an object
- The tree is rendered using `react-json-tree` with a few custom perfomance optimizations

### Performance considerations

Since we're aiming for good perfomance, there are a couple of of mechanisms considered:

- The matching paths between the JSONP query and the data object are a Mobx Computed property, this ensures that even if the app re-renders multiple times (for example leaf nodes), we only compute once per root state change. The result of the computed property is a javascript `Set` that allows for the leaves to quickly check if their root path is on the matching set.

- The Tree component and leaf components are both rendered with their custom Mobx `observer` wrappers, instead of a root one. This ensures that the Tree is not rendered from scratch when the query changes, but only the leafs are re-evaluated.

- The function that gets the string path to check if the value exists on the matching set is memoized with react `useMemo`, for deeply nested objects we avoid recomputing paths unless three changes.

- Last but not least, the query input is `throtlled` so that even if the users types too fast we call at most one per 100ms, this allows for perfomance gains with very large datasets, without user noticing the difference.
