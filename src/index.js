import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import TodoContext from "./context";
import TodoReducer from "./reducer";
import * as serviceWorker from "./serviceWorker";

import TodoList from "./components/TodoList";

const App = () => {
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodoContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
