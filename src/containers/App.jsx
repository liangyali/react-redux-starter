import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions/Todos';
import Sidebar from '../components/Commons/Sidebar';
import Header from '../components/Commons/Header';
const propTypes = {
  update: PropTypes.func.isRequired,
};

class App extends Component {

  componentDidMount() {
    this.props.update();
  }

  render() {
    return (
      <div>
        <Sidebar/>
        <div className="content">
          <Header>test</Header>
        </div>
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
