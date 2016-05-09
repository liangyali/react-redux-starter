import React, {Component, PropTypes} from 'react';
import styles from './styles.less';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.box}>
          <LoginForm submit={this.props.submit}/>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Login;
