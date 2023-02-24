// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const { alias, aliasJest, configPaths } = require('react-app-rewire-alias');

const aliasMap = configPaths('./tsconfig.paths.json');

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
