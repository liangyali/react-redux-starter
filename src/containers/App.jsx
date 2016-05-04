import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions/Todos';
import {Header, Sidebar, PageContainer, PageContent} from '../components/Commons';
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
          <PageContent>
            <div>
              <div className="form-group">
                <label >应用程序AppKey</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="用户密码"/></div>
              <div className="form-group">
                <label >应用程序SecureKey</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder=""/></div>
            </div>
          </PageContent>
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
