import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addTodo, input, setVisibilityFilter, toggleTodo } from "../../reducers";

// raw (not connected) ToDo component
class ToDoListRaw extends Component<IToDoListProps, undefined> {
  constructor(props: IToDoListProps) {
    super(props);
  }

  public render(): JSX.Element {
    const toDoList: JSX.Element = this.toDoList();
    return (
      <div>
        <h1>ToDo list:</h1>
        {toDoList}
        <br/>
        <button type="button" onClick={this.props.addTodo}>Add new item</button>
        <label>
          <input type="checkbox" onChange={this.toggleFilter.bind(this)} />
          Hide done items
        </label>
      </div>
    );
  }

  protected toggleFilter(ev: React.FormEvent<HTMLInputElement>): void {
    const filter = (ev.target as HTMLInputElement).checked ? "SHOW_UNDONE" : "SHOW_ALL";
    this.props.setVisibilityFilter(filter);
  }

  protected handleToDoInputChange(index: number, ev: React.FormEvent<HTMLInputElement>): void {
    const newValue: string = (ev.target as HTMLInputElement).value;
    this.props.input(index, newValue);
  }

  protected toDoList(): JSX.Element {
    const toDoList: JSX.Element[] = this.props.toDoList.map((item: IToDoListItem, index: number) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    onChange={this.props.toggleTodo.bind(this, index)}
                    checked={item.done}/>
                </td>
                <td>
                  <input
                    type="text"
                    value={item.value}
                    onChange={this.handleToDoInputChange.bind(this, index)}/>
                </td>
              </tr>);
            });
    const toDoListFiltered: JSX.Element[] = toDoList.filter(
      (item: JSX.Element, index: number) => this.props.filter === "SHOW_ALL" || !this.props.toDoList[index].done);
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
}

// pass redux state to component props
const mapStateToProps = (state: IToDoListState) => {
  return {
    filter: state.filter,
    toDoList: state.toDoList,
  };
};

// pass wrapped action creators to component props
const mapDispatchToProps = { addTodo, input, setVisibilityFilter, toggleTodo };

// connect redux store with react component
const ToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoListRaw);

// export connected ToDo component
export default ToDoList;
