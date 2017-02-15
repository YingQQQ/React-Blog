export default (callback, values, len = 3) => {
  const ret = [];
  let value;
  let i = 0;
  for (; i < len; i++) {
    value = callback.call(values, values[i], i);
    if (value != null) {
      ret.push(value);
    }
  }
  return [...ret];
};
