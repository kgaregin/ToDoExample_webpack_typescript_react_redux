const INITIAL_STATE: IToDoListState = {
     filter: "SHOW_ALL",
     toDoList: [{ 
       done: false, 
       value: "",
     }],
    };

function toDoApp <T>(state:IToDoListState = INITIAL_STATE, action:IAction): IToDoListState{
  const newState: IToDoListState = Object.assign({}, state) as IToDoListState; 
  const doActionByType: IActionByType = {
    ADD_TODO: () => {
      newState.toDoList.push({ done: false, value: "" });
      return newState;
    },
    TOGGLE_TODO: () => {
      newState.toDoList[action.index].done = !newState.toDoList[action.index].done;
      return newState;
    },
    SET_VISIBILITY_FILTER: () => {
     newState.filter = action.filter;
     return newState;
    },
    INPUT: () => {
      newState.toDoList[action.index].value = action.text;
      return newState;
    },
  }
  const actionType: string = action.type;
  return doActionByType[actionType] ? doActionByType[actionType]() : newState;
}

/*
 * action creators
 */

function addTodo(text: string): IAction {
  return { type: "ADD_TODO", text }
}

function input(index:number, text: string): IAction {
  return { type: "INPUT", index, text }
}

function toggleTodo(index: number): IAction {
  return { type: "TOGGLE_TODO", index }
}

function setVisibilityFilter(filter: string): IAction {
  return { type: "SET_VISIBILITY_FILTER", filter }
}



export default toDoApp;
export {addTodo, toggleTodo, setVisibilityFilter};