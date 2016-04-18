import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {fetchTodos} from '../actions/Todos';

class App extends Component {
  componentDidMount() {
    this.props.update();
  }

  render() {
    return (
      <div>
        <div style={{
          margin: '20px 10px'
        }}>
          <button onClick={this.props.update} className='btn btn-sm btn-primary'>更新数据</button><br/>
        </div>
        <TodoList todos={this.props.todos}></TodoList>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos || {}
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
