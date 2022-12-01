const { copyCommonFiles } = require('./tasks/copyCommonFiles');
const { modifyPackageJSON } = require('./tasks/modifyPackageJSON');
const { build } = require('./tasks/build');
const { publish } = require('./tasks/publish');
const { lintPRTitle } = require('./tasks/lintPRTitle');

const runTask = async ({ task, args }) => {
  switch (task) {
    case 'build':
      build();

      break;
    case 'publish':
      publish();

      break;
    case 'copyCommonFiles':
      copyCommonFiles();

      break;
    case 'modifyPackageJSON':
      modifyPackageJSON();

      break;

    case 'lintPRTitle':
      await lintPRTitle({ title: args.title });

      break;
    default:
      throw Error('Task not found');
  }
};

module.exports = { runTask };
