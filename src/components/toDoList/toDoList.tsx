import * as React from "react";
import { Component } from "react";

export default class ToDoList extends Component<undefined, IToDoListState> {
  constructor() {
    super();
    this.state = {
     filter: "SHOW_ALL",
     toDoList: [this.getNewToDoListItem()],
    };
  }

  public render(): JSX.Element {
    const toDoList: JSX.Element = this.toDoList();
    return (
      <div>
        <h1>ToDo list:</h1>
        {toDoList}
        <br/>
        <button type="button" onClick={this.addListItem.bind(this)}>Add new item</button>
        <label>
          <input type="checkbox" onChange={this.toggleFilter.bind(this)} />
          Hide done items
        </label>
      </div>
    );
  }

  protected getNewToDoListItem(): IToDoListItem {
    return {
      done: false,
      value: "",
     };
  }

  protected handleToDoInputChange(index: number, ev: React.FormEvent<HTMLInputElement>): void {
    const newValue: string = (ev.target as HTMLInputElement).value;
    const newState: IToDoListState = this.state;
    newState.toDoList[index].value = newValue;
    this.setState(newState);
  }

  protected toDoList(): JSX.Element {
    const toDoList: JSX.Element[] = this.state.toDoList.map((item: IToDoListItem, index: number) => {
            return (
              <tr key={index}>
                <td><input type="checkbox" onChange={this.toggleStatus.bind(this, index)} checked={item.done} /></td>
                <td><input type="text" value={item.value} onChange={this.handleToDoInputChange.bind(this, index)}/></td>
              </tr>);
            });
    const toDoListFiltered: JSX.Element[] = toDoList.filter(
      (item: JSX.Element, index: number) => this.state.filter === "SHOW_ALL" || !this.state.toDoList[index].done);
    return (
      <table>
        <thead>
          {
            toDoListFiltered.length > 0 ?
          <tr>
            <th>Done</th>
            <th>ToDo</th>
          </tr>
          :
          <tr>
            <th colSpan={2}>All done!</th>
          </tr>
          }
        </thead>
        <tbody>
         {toDoListFiltered}
        </tbody>
      </table>);
  }

  protected toggleStatus(index: number): void {
    const state: IToDoListState = this.state;
    state.toDoList[index].done = !state.toDoList[index].done;
    this.setState(state);
  }

  protected addListItem(): void {
    const toDoList: IToDoListItem[] = this.state.toDoList;
    toDoList.push(this.getNewToDoListItem());
    this.setState({toDoList});
  }

  protected toggleFilter(ev: React.FormEvent<HTMLInputElement>): void {
    const target: HTMLInputElement = ev.target as HTMLInputElement;
    const checked: boolean = target.checked;
    this.setState({filter: checked ? "SHOW_UNDONE" : "SHOW_ALL"});
  }
}
