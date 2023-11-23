const get = (obj, key, defaultValue) => {
  const result = obj.key || defaultValue;
  return result;
};

export default get;
