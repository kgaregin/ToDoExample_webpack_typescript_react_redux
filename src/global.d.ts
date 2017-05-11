// extending ObjectConstructor with assign method:
interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}

interface IToDoListState { filter: string; toDoList: IToDoListItem[]; }

interface IToDoListItem { done: boolean; value: string; }

interface IAction { type:string; text?:string, index?:number, filter?:string }

interface IActionCreator { <T>(arg?:T):IAction }

interface IActionByType {
  [action: string]: () => IToDoListState
}