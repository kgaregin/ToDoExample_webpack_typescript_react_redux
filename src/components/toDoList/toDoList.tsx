import * as React from 'react';
import { Component } from 'react';

export interface ToDoListState { toDoList: {value: string, done: boolean}[]; filter: string; }

export default class ToDoList extends Component<undefined, ToDoListState> {
  constructor(){
    super();
    this.state = {
     toDoList: [this.getNewItem()],
     filter: "SHOW_ALL"
    };
  }

  getNewItem(){
    return {
      value: "",
      done: false
     }
  }

  handleToDoInputChange(index: number, ev: React.FormEvent<HTMLInputElement>){
    let newValue = (ev.target as HTMLInputElement).value;
    let newState = this.state;
    newState.toDoList[index].value = newValue;
    this.setState(newState)
  }

  toDoList(){
    // onChange={this.setState(this.state)}
    let toDoList:JSX.Element[] = this.state.toDoList.map((item, index) => {
            return (
              <tr key={index}>
                <td><input type="checkbox" onChange={this.toggleStatus.bind(this, index)} checked={item.done} /></td>
                <td><input type="text" value={item.value} onChange={this.handleToDoInputChange.bind(this, index)} /></td>
              </tr>)
            })
    let toDoListFiltered:JSX.Element[] = toDoList.filter((item, index) => this.state.filter === "SHOW_ALL" || !this.state.toDoList[index].done);
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
      </table>)
  }

  toggleStatus(index:number){
    let state = this.state;
    state.toDoList[index].done = !state.toDoList[index].done;
    this.setState(state);
  }

  addListItem(){
    let toDoList = this.state.toDoList;
    toDoList.push(this.getNewItem());
    this.setState({toDoList});
  }

  toggleFilter(ev: React.FormEvent<HTMLInputElement>){
    let target = ev.target as HTMLInputElement;
    let checked = target.checked;
    this.setState({filter: checked ? "SHOW_UNDONE" : "SHOW_ALL"})
  }

  render() {
    let toDoList = this.toDoList();
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
    )
  }
}
