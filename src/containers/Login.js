import {
  connect
}
from 'react-redux';
import {
  login
}
from '../actions/authed';
import {
  Login
}
from '../components';

const submit = (values, dispatch) => {
  dispatch(login(values));
};

function mapStateToProps(state) {
  return {
    authed: state.authed || {}
  };
}

function mapDispatchToProps() {
  return {
    submit
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
