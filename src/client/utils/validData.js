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
  for (const key in data) {
    if (validIsEmpty(data[key])) {
      errors[key] = '请输入正确的信息';
    }
  }
  return {
    errors,
    isValid: validIsExisty(errors)
  };
};
