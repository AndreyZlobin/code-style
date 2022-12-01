const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const getDirNames = require('read-dir-names');

const packagesCommands = getDirNames(
  path.resolve(__dirname, 'packages'),
).reduce(
  (result, packageName) => ({
    [`packages/${packageName}/**/*.{js}`]: [
      `npm run lint --workspace=@self/${packageName}`,
    ],
  }),
  {},
);

module.exports = {
  ...packagesCommands,
  'commander/**/*.{js}': ['npm run lint --workspace=@self/commander'],
};
