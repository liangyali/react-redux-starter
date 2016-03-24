import React, {PropTypes, Component} from 'react';

class TodoList extends Component {
  render() {
    let todos = this.props.todos||[];
    return (
      <ul>
        {(todos||[]).map((todo) => {
          return (
            <li key={todo.text+Math.random()}>{todo.text}</li>
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
