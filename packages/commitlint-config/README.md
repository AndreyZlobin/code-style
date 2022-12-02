# @self-kit/commitlint-config

# Usage

## Installation

### Npm
```shell
npm i commitlint @self-kit/commitlint-config --save-dev 
```

### Yarn
```shell
yarn add commitlint @self-kit/commitlint-config -D
```

### Configuration
```commitlint.config.js```
```js
const { createConfig } = require('@self-kit/commitlint-config');

module.exports = createConfig({
  scopes: ['ui', 'server'],
  ticketPrefix: 'UIKIT',
});
```

```.huskyrc```
```json
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

### Message example
#### Valid
```feat(UIKIT-222,ui): Title```
```feat: Title```
```feat(UIKIT-222): Title```

#### Invalid
```feat(UIKIT222): Title```
```feat(unknown): Title```

# Format

```${ENUM}(SCOPE|TASK): Description```

Default ENUM:
- feat
- bug
- wip (work in progress)
- refactor
- doc
- build
- chore

# API
## createConfig
```ts
const { createConfig } = require('@self-kit/commitlint-config');

type Params = {
  /**
   * Список доступных scopes.
   * @example
   * // createConfig({ scopes: ['server', 'ui'], ticketPrefix: 'UIKIT' })
   */
  scopes?: string[];
  /**
   * Название префикса задач, данный префикс будет доступен в scope.
   * @example
   * // createConfig({ ticketPrefix: 'UIKIT' })
   */
  ticketPrefix: string;
  /**
   * Список доступных type. Дефолтное значение указано в разделе Format
   * @example
   * // createConfig({ typeEnum: ['feat', 'ci'], ticketPrefix: 'UIKIT',  })
   */
  typeEnum?: string[];
};
  
createConfig(params: Params);
```
