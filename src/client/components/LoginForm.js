import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import loginUser from '../actions/loginAction';
import TextFieldGroup from './TextFieldGroup';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || '',
      password: '',
      errors: {},
      isloading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      isloading: true
    });
    const _data = {
      name: this.state.name,
      password: this.stat.password
    };
    if (this.isValid()) {
      this.props.loginUser(_data)
        .then((data) => {
          if (data.errors) {
            this.setState({
              errors: data.errors
            });
          } else {
            this.context.router.push('/write');
          }
        });
    }
  }
  render() {
    const { name, errors, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          field="name"
          label="邮箱"
          ion={'ion-android-contact'}
          value={name}
          error={errors.name}
          onChange={this.onChange}
        />
        <TextFieldGroup
          field="password"
          label="密码"
          type="password"
          ion={'ion-android-lock'}
          value={password}
          error={errors.password}
          onChange={this.onChange}
        />
        <div className="Lg-footer">
          <button type="submit" className="btn">登录</button>
        </div>
      </form>
    );
  }
}


LoginForm.propTypes = {
  name: PropTypes.string,
  loginUser: PropTypes.func.isRequired,
};
LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { loginUser })(LoginForm);
