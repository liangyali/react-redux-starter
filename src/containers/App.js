import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { fetchTodos } from '../actions/Todos';

class App extends Component {

  propTypes : {
  update: React.PropTypes.func.isRequired,
  todos: React.PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.update();
  }

  render() {
    return (
      <div>
        <div style={{
        margin: '20px 10px'
      }}>
          <button onClick={this.props.update} className="btn btn-sm btn-primary">更新</button>
          <br/>
        </div>
        <TodoList todos={this.props.todos}/>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos || {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    update: () => {
      dispatch(fetchTodos('test'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
