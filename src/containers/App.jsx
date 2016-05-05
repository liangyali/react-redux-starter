import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authed';
import {Header, Sidebar, Container, Content} from '../components/Commons';

class App extends Component {

  componentDidMount() {
    this.props.loginUser();
  }

  render() {
    return (
      <div>
        <Sidebar/>
        <Container>
          <Header>测试数据</Header>
          <Content>
            <div>
              <div className="form-group">
                <label >应用程序AppKey</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="用户密码"/></div>
              <div className="form-group">
                <label >应用程序SecureKey</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder=""/></div>
            </div>
            <button onClick={() => {
              this.props.loginUser();
            }}>reload</button>
            <div>{this.props.authed.user.name}</div>
          </Content>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  loginUser: PropTypes.func.isRequired,
  authed: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    authed: state.authed || {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: () => {
      dispatch(loginUser());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
