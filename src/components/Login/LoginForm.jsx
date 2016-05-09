import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import classNames from 'classnames';

const fields = ['username', 'password'];
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = '用户名不能为空';
  }

  if (!values.password) {
    errors.password = '密码不能为空';
  }

  return errors;
};

class LoginForm extends Component {
  render() {
    const {
      fields: {
        username,
        password
      },
      resetForm,
      submit,
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit(submit)}>
        <div className={classNames('form-group', {
          'has-error': username.touched && username.error
        })}>
          <label>用户名</label>
          <input type="text" className="form-control" placeholder="用户名" {...username}/>
        </div>
        <div className={classNames('form-group', {
          'has-error': password.touched && password.error
        })}>
          <label>密码</label>
          <input type="password" className="form-control" placeholder="密码" {...password}/>
        </div>
        <div className="form-group">
          <buttom className="btn btn-primary" onClick={handleSubmit(submit)}>登录</buttom>&nbsp;
          <buttom className="btn btn-default" onClick={resetForm}>重置</buttom>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({form: 'LoginForm', fields, validate})(LoginForm);
