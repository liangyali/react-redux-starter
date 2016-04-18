import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

class TodoList extends Component {
  render() {
    let todos = this.props.todos || {};

    if(this.props.todos.isFeting){
      return (
        <div>Loading</div>
      );
    }
    return (
      <table className="table table-inverse">
        <thead>
          <tr key='head'>
            <th>#</th>
            <th>Name</th>
            <th>更新时间Update</th>
          </tr>
        </thead>
        <tbody>
          {(todos.items || []).map((todo) => {
            return (
              <tr key={todo.id}>
              <th scope="row">{todo.id}</th>
              <td> <Link to={`/app/detail/${todo.id}`}>{todo.name}</Link> </td>
              <td width='250'>{todo.updatedAt}</td >
              </tr>);
          })}
        </tbody>
      </table>
    );
  }
}

TodoList.PropTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
