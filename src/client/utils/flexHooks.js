export const justifyHooks = {};
export const alignHooks = {};

function specilStyle(type) {
  if (!type) {
    return false;
  }
  if (type === 'between') {
    return 'baseline';
  }
  if (type === 'between') {
    return 'stretch';
  }
  return type;
}

[
  'start',
  'end',
  'center',
  'between',
  'around',
].forEach((val) => {
  justifyHooks[val] = `justify-${val}`;
  alignHooks[specilStyle(val)] = `align-${specilStyle(val)}`;
});
