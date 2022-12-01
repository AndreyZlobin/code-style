const fs = require('fs');
const path = require('path');

const { PACKAGES_NAMES } = require('../constants');

const { RELEASE_TAG } = process.env;
const readPackageJSON = (packageJSONPath) =>
  JSON.parse(fs.readFileSync(packageJSONPath));

// обновляет до последней версии пакеты, которые есть в репозитории
const updateDepsVersions = (packageDeps, rootPackageVersion) =>
  PACKAGES_NAMES.reduce((newPackageDeps, packageName) => {
    if (!newPackageDeps[packageName]) {
      return newPackageDeps;
    }

    return { ...newPackageDeps, [packageName]: `^${rootPackageVersion}` };
  }, packageDeps);

const updatePackagesVersions = (packageJSONPath, rootPackageVersion) => {
  const packageData = readPackageJSON(packageJSONPath);

  fs.writeFileSync(
    packageJSONPath,
    JSON.stringify(
      {
        ...packageData,
        dependencies: updateDepsVersions(
          packageData.dependencies || {},
          rootPackageVersion,
        ),
      },
      null,
      2,
    ),
  );

  return readPackageJSON(packageJSONPath);
};

const modifyPackageJSON = () => {
  console.log('Starting modifyPackageJSON...');
  console.log('Update packages versions and deps');

  const packageData = updatePackagesVersions(
    path.resolve(process.cwd(), 'package.json'),
    RELEASE_TAG,
  );

  const {
    scripts,
    devDependencies,
    keywords = [],
    ...restPackageData
  } = packageData;

  console.log('Write data to lib package.json');

  fs.writeFileSync(
    path.resolve(process.cwd(), 'lib', 'package.json'),
    JSON.stringify(
      {
        ...restPackageData,
        version: RELEASE_TAG,
        author: 'zlobin_andy',
        license: 'MIT',
        repository: {
          type: 'git',
          url: 'git+https://github.com/AndreyZlobin/code-style',
        },
        bugs: {
          url: 'https://github.com/AndreyZlobin/code-style/issues',
        },
        keywords,
        main: './index.js',
      },
      null,
      2,
    ),
  );

  console.log('Finish modifyPackageJSON');
};

module.exports = { modifyPackageJSON };
