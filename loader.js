const protobuf = require('protobufjs');

module.exports = function loader(source) {
  const parsed = protobuf.parse(source);
  const json = parsed.root.toJSON();
  const jsonStr = JSON.stringify(json, null, 2);

  return `export default ${jsonStr}`;
};