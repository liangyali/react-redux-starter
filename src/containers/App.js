import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <button onClick={this.props.update.bind(this)}>add some</button>
        <TodoList todos={this.props.todos}></TodoList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todos || []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    update: () => {
      dispatch({
        type: 'FETCH_ALL',
        todos: [
          {
            text: 'item'
          }, {
            text: 'item2'
          }, {
            text: 'item3'
          }
        ]
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
