// extending ObjectConstructor with assign method
interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}

// ToDo component props
interface IToDoListProps { 
  toDoList: IToDoListItem[]; 
  filter: string; 
  toggleTodo: (index: number) => IAction; 
  input: (index: number, text: string) => IAction;
  setVisibilityFilter: (text: string) => IAction;
  addTodo: () => IAction; }

// ToDo component state
interface IToDoListState { filter: string; toDoList: IToDoListItem[]; }

// ToDo single item
interface IToDoListItem { done: boolean; value: string; }

// redux action
interface IAction { type: string; text?: string, index?: number, filter?: string }

// redux action creator
interface IActionCreator { <T>(arg?: T): IAction }

// action-by-type object storing handlers for all kind of action types
interface IActionByType {
  [action: string]: () => IToDoListState
}