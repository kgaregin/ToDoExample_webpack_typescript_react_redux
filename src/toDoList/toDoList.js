import React, { Component } from 'react';

export default class ToDoList extends Component {
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

  handleToDoInputChange(index, ev){
    let newValue = ev.target.value;
    let newState = this.state;
    newState.toDoList[index].value = newValue;
    this.setState(newState)
  }

  toDoList(){
    // onChange={this.setState(this.state)}
    let toDoList = this.state.toDoList.map((item, index) => {
            return (
              <tr key={index}>
                <td><input type="checkbox" onChange={this.toggleStatus.bind(this, index)} checked={item.done} /></td>
                <td><input type="text" value={item.value} onChange={this.handleToDoInputChange.bind(this, index)} /></td>
              </tr>)
            })
    let toDoListFiltered = toDoList.filter((item, index) => this.state.filter === "SHOW_ALL" || !this.state.toDoList[index].done);
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
            <th colSpan="2">All done!</th>
          </tr>
          }
        </thead>
        <tbody>
         {toDoListFiltered}
        </tbody>
      </table>)
  }

  toggleStatus(index){
    let state = this.state;
    state.toDoList[index].done = !state.toDoList[index].done;
    this.setState(state);
  }

  addListItem(){
    let toDoList = this.state.toDoList;
    toDoList.push(this.getNewItem());
    this.setState({toDoList});
  }

  toggleFilter(ev){
    let checked = ev.target.checked;
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
