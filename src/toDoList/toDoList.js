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

  toDoList(){
    let toDoListFiltered = this.state.toDoList.filter((item) => this.state.filter === "SHOW_ALL" || !item.done);
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
         {
          toDoListFiltered.map((item, index) => {
            return (
              <tr key={index}>
                <td><input type="checkbox" onChange={this.toggleStatus.bind(this, index)} checked={item.done} /></td>
                <td><input type="text" value={item.value} /></td>
              </tr>)
            })
          }
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
