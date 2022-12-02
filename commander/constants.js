const path = require('path');

const getDirNames = require('read-dir-names');

// получаем имена всех пакетов, которые необходимо релизить
const packagesNames = getDirNames(
  path.resolve(__dirname, '..', 'packages'),
).map((packageName) => `@self-kit/${packageName}`);

const DIST_DIR_NAME = 'lib';

const PACKAGES_NAMES = packagesNames;

module.exports = {
  DIST_DIR_NAME,
  PACKAGES_NAMES,
};
