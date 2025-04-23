# NodeJS ESLint Config v0.4.0

A modern ESLint configuration for NodeJS, following my styleguide.
Provides rule enfocement, linting, and auto-formating for JavaScript, TypeScript, MarkDown, JSON and CSS files, as well as parsing of TypeScript and Babel project configured rules. 

## Installation

### Set your GITHUB_TOKEN environment variable

To install this (and any other GitHub) packages, you'll first need to set the **GITHUB_TOKEN** environment variable.
To do this you'll first need to create a GitHub Token (classic), you can do so on the "Developer options" section of your GitHub settings page.
For more instructions, read [GitHub's documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

Once set, add your access token to your preferred terminal's user profile file.

On Windows, WindowsPowerShell is recommended, locate or create your user profile file, usually saved on **%USERPROFILE%/Documents/WindowsPowerShell/Microsoft.Powershell_profile.ps1**, and add this line:

```powershell
$Env:GITHUB_TOKEN="<Your Token>"
```

On MacOS, locate or create your default terminal's user profile file.

For **bash** terminals it can be found at **~/.bashrc**
For **zsh** terminals it can be found at **~/.zshrc**

Then add this line:

```bash
export GITHUB_TOKEN="<Your Token>"
```

### Resolve to GitHub Package Registry

Locate or create your NPM configuration file, usually saved on **./.npmrc** , it should contain the following:

```npmrc
registry=https://registry.npmjs.org/ # or https://registry.yarnpkg.com/
@hersy:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Install the package

Now you can run either:

```bash
npm install --save @hersy/eslint-config-node
```

or

```bash
yarn add -D @hersy/eslint-config-node
```

### Update your ESLint configuration file

For module type projects, update your `eslint.config.js`'s default export:

```javascript
import config from '@hersy/eslint-config-node';

export default config;
```

For commonjs type projects, update your `eslint.config.mjs`'s default export:

```mjs
import { cjs } from '@hersy/eslint-config-node';

export default cjs;
```

Since the linter ignores your test files by default, it also provides a configuration for your test files you can add to your `test/eslint.config.js` file like this:

```javascript
import { 
  test,    // For test modules
  cjsTest, // For commonjs tests
} from '@hersy/eslint-config-node';

export default test;
```

You can add your own configurations and override my defined rules as you see fit:

```javascript
  import config from '@hersy/eslint-config-node';

  export default [
    ...config,
    // Your other configurations,
  ];
```

### Update your project's scripts

Add the following to your `package.json`'s scripts:

```json
  "scripts": {
    "lint": "eslint . --report-unused-disable-directives --ext .js,ts,jsx,tsx,json,css,md",
    "lint-fix": "eslint . --fix --ext .js,ts,jsx,tsx,json,css,md",
    "format": "eslint . --fix --ext .js,ts,jsx,tsx,json,css,md",
    "eslint-check": "eslint --print-config eslint.config.js",
  },
```

And you're all set!

## Configure code editor for automatic fixing and formatting

Using [VSCode](https://code.visualstudio.com/) is very much encouraged, since no other editors have yet been tested.

Make sure the [ESLint Extension for VSCode](vscode:extension/dbaeumer.vscode-eslint) is both installed and enabled on your workspace.

Add the following to your project's `.vscode/settings.json`, or your user's `~/.vscode/settings.json`:

```json
  {
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.tabSize": 2,
    "eslint.enable": true,
    "eslint.format.enable": true,
    "eslint.lintTask.enable": true,
    "eslint.useESLintClass": true,
    "eslint.useFlatConfig": true,
    "eslint.codeActionsOnSave.mode": "all",
    "eslint.lintTask.options": ". --ext .js,ts,jsx,tsx,json,css,md",
    "eslint.probe": ["javascript", "javascriptreact", "typescript", "typescriptreact", "css", "markdown", "json"],
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "css", "markdown", "json"],
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "always"
    }
  }
```

You can fine-tune these settings based on personal preference. For more details on the available settings and options, refer to [ESLint Extension for VSCode's Documentation](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint#settings-options).

### Restart ESLint server

  - Open the "Help" Tab on your VSCode window and select "Show All Commands". This will display and focus on a global comand searchbar.
  - Search for the command titled `ESLint: Restart ESLint Server`.
  - The searchbar will showcase command suggestions for auto-complete as you input your search.
  - Once `ESLint: Restart ESLint Server` shows up as a suggestion, pick it to run it.

And you're all set!
