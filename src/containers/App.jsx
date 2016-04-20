import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {fetchTodos} from '../actions/Todos';

const propTypes = {
  update: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

class App extends Component {

  componentDidMount() {
    this.props.update();
  }

  render() {
    const style = {
      margin: '20px 10px'
    };

    return (
      <div>
        <div
          style={style}
        >
          <button onClick={this.props.update} className="btn btn-sm btn-primary">更新123</button>
          <br />
        </div>
        <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

App.propTypes = propTypes;

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
