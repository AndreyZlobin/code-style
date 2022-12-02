const path = require('path');

const copy = require('recursive-copy');

const { DIST_DIR_NAME } = require('../constants');

const { modifyPackageJSON } = require('./modifyPackageJSON');
const { copyCommonFiles } = require('./copyCommonFiles');
const { prebuild } = require('./prebuild');

const build = () => {
  prebuild();
  console.log('Starting build...');
  console.log('Copy .js files...');

  copy(process.cwd(), path.join(process.cwd(), DIST_DIR_NAME), {
    filter: ['**/*.js'],
    overwrite: true,
    expand: true,
    dot: true,
    junk: true,
  }).catch((error) => {
    console.error(error);
    process.exit(1);
  });

  copyCommonFiles();
  modifyPackageJSON();
  console.log('Finish build');
};

module.exports = { build };
