import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {fetchTodos} from '../actions/Todos';

class App extends Component {
  componentDidMount() {
    this.interval=setInterval(()=>{
      this.props.update();
    },2000);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.update} className='btn btn-success'>UPDATE TODOS</button>
        <TodoList todos={this.props.todos.items}></TodoList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos||{}
  }
}

function mapDispatchToProps(dispatch) {

  return {
    update: () => {
      dispatch(fetchTodos('test'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
