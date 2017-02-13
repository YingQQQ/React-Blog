import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import loginORsaveAction from '../actions/loginORsaveAction';
import TextFieldGroup from './TextFieldGroup';


class TextareaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      rows: 20,
      errors: '',
      post: '',
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
    const _data = {
      title: this.state.title,
      post: this.state.post
    };
    console.log(_data);
    const { fetchUrl } = this.props;
    console.log(fetchUrl);
    if (this.isValid()) {
      this.props.loginORsaveAction(fetchUrl, _data)
        .then((data) => {
          console.log(data.errors);
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
    const { title, errors, post, rows } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          field="title"
          label="Title"
          value={title}
          error={errors.title}
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
  loginORsaveAction: PropTypes.func.isRequired,
  fetchUrl: PropTypes.string.isRequired
};
TextareaForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { loginORsaveAction })(TextareaForm);
