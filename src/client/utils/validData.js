function validIsExisty(value) {
  for (const val in value) {
    if ({}.hasOwnProperty.call(value, val)) {
      return false;
    }
  }
  return true;
}


function validIsEmpty(value) {
  return value == null || value === '';
}

export default (data) => {
  const errors = {};
  if (validIsEmpty(data.name)) {
    errors.name = '请输入用户名';
  }
  if (validIsEmpty(data.password)) {
    errors.password = '请输入密码';
  }
  return {
    errors,
    isValid: validIsExisty(errors)
  };
};
