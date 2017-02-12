import React, { PropTypes } from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ error, field, value, label, onChange, type, ion }) => {
  return (
    <div className="single-input">
      {ion ? <i className={classnames(ion, 'Login-ion')} /> : null}
      <input
        className={classnames({ 'input-txt': ion })}
        onChange={onChange}
        value={value}
        type={type}
        name={field}
        placeholder={label}
      />
      {error && <span className={classnames({ 'error': error })}>{error}</span>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  ion: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
