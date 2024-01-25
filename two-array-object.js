// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
  const obj = {};

  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = vals[i] ? vals[i] : null;
  }

  return obj;
}

module.exports = twoArrayObject
