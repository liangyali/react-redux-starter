import React,{PropTypes,Component} from 'react';


class TodoList extends Component{
  render(){

    return (
      <ul>
      {this.props.todos.map((todo)=>{
        <li>{todo.text}</li>
      })}
      </ul>
    );
  }
}

TodoList.PropTypes={
  todos:PropTypes.array.isRequired
};

export default TodoList;
