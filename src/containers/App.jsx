import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions/Todos';
import {Header, Sidebar, PageContainer} from '../components/Commons';
const propTypes = {
  update: PropTypes.func.isRequired
};

class App extends Component {

  componentDidMount() {
    this.props.update();
  }

  render() {
    return (
      <div>
        <Sidebar/>
        <PageContainer>
          <Header>测试数据</Header>
        </PageContainer>
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
