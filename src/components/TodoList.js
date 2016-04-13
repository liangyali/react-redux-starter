import React, {PropTypes, Component} from 'react';

class TodoList extends Component {
  render() {
    let todos = this.props.todos || [];
    return (
      <ul className="list-group">
        {(todos || []).map((todo) => {
          return (
            <li key={todo.id} className="list-group-item">
              <span className="label label-success" style={{marginLeft:'20px'}}>{todo.updatedAt}</span>
            </li>
          )
        })}
      </ul>
    );
  }
}

TodoList.PropTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
