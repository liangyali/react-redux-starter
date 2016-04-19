import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class TodoList {
  render() {
    const todos = this.props.todos || {};

    if (this.props.todos.isFeting) {
      return (
        <div>Loading</div>
        );
    }
    return (
      <table className="table">
        <thead>
          <tr key="head">
            <th>编号</th>
            <th>名称</th>
            <th>更新时间</th>
          </tr>
        </thead>
        <tbody>
          {(todos.items || []).map((todo) => (
        <tr key={todo.id}>
              <th scope="row">{todo.id}</th>
              <td>
                <Link to={`/app/detail/${todo.id}`}>{todo.name}</Link>
              </td>
              <td width="250">{todo.updatedAt}</td>
            </tr>
      ))}
        </tbody>
      </table>
      );
  }
}

TodoList.PropTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
