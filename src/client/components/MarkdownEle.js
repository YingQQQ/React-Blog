import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import { highlightAuto } from 'highlightjs';

class Markdown extends Component {
  componentWillMount() {
    marked.setOptions({
      highlight: (code) => {
        return highlightAuto(code).value;
      }
    });
  }
  render() {
    return (
      <article
        dangerouslySetInnerHTML={{ __html: marked(this.props.text) }}
      />
    );
  }
}
Markdown.propTypes = {
  text: PropTypes.string
};

export default Markdown;
