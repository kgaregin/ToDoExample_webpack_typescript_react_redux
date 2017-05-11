import { Provider } from "react-redux";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import ToDoList from "./components/toDoList/toDoList";
import toDoApp from './reducers'

let store = createStore(toDoApp);

ReactDOM.render(
  <Provider store={store}>
    <ToDoList></ToDoList>
  </Provider>,
  document.getElementById("root"));
