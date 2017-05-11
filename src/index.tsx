import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ToDoList from "./components/toDoList/toDoList";
import toDoApp from "./reducers";

const store = createStore(toDoApp);

ReactDOM.render(
  <Provider store={store}>
    <ToDoList></ToDoList>
  </Provider>,
  document.getElementById("root"));
