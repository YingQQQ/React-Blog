import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import loginUser from '../actions/loginAction';
import TextFieldGroup from './TextFieldGroup';


class TextareaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rows: 20,
      errors: {},
      introduction: '',
      post: '',
      category: '',
      isloading: false,
      baseScrollHeight: undefined
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onFocus = this.onFocus.bind(this);
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
      password: this.state.password
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
  onKeyUp(e) {
    const curNode = this.textarea;
    const rows = curNode.rows;
    const scrollHeight = curNode.scrollHeight;
    const baseScrollHeight = this.state.baseScrollHeight;
    if (e.keyCode === 13 && (scrollHeight > baseScrollHeight)) {
      this.setState({
        rows: rows + 2
      });
    }
  }
  onFocus() {
    const curNode = this.textarea;
    console.log(`onFocus:${curNode.scrollHeight}`);
    this.setState({
      baseScrollHeight: curNode.scrollHeight
    });
  }
  render() {
    const { name, errors, post, rows } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          field="name"
          label="Title"
          value={name}
          error={errors.name}
          onChange={this.onChange}
        />
        <textarea
          ref={(textarea) => { this.textarea = textarea; }}
          rows={rows}
          name="post"
          placeholder="Post"
          value={post}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          onFocus={this.onFocus}
        />
      </form>
    );
  }
}


TextareaForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
};
TextareaForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { loginUser })(TextareaForm);
