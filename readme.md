# library-ts-boilerplate

Generic boilerplate to publish libraries with NPM.

## Features
* Typescript support.
* Testing with Jest.
* Different build targets with `npm run build` grouped under `build` folder:
  * `dist` folder contains a single bundle in ES5 with CommonJS module format. It is made with webpack and intended to be consumed by `<script>` tags. Both, regular and minified versions will be generated.
  * `lib` folder contains the sources to be consumed from another project. They will be generated in ES5 with 2 variants of barrel file:
    * `index.js` with CommonJS module syntax.
    * `index.esm.js` with ES module syntax.
  * `es` folder with sources in ES6 and no module transformation (ES module syntax) for evergreen browsers.
* Babel 7 for transpiling either JS or Typescript. No webpack loaders needed for Typescript.
  * Since Babel 7 strategy to transpile Typescript consists in removing type annotations, we loose type check on the build process (linter will still warn you). So, a manual type check using Typescript compilator `tsc` has been added in the build process.
* TSLint and Prettier integration for linting and formatting:
  * Curated list of TSLint rules.
  * Linting script available in package.json as `npm run lint`.
  * Formatting script available in package.json as `npm run lint:fix`.
  * Auto formatting when publishing the library (by running `npm run prerelease`).
* Publish whith `npm run release`.

* Recommended pluggins in VS Code:
  * TSLint, to highlight linter errors on your code.
  * Prettier, it will allow to auto format document using prettier instead (`Shift + Alt + F`. Once installed, remember to check option `TSLint integration` to true for a better experience.

## Workflow
The typical workflow would be:
* `npm install` to start developing.
  * You can make use of `npm typecheck`, `npm test`, or `npm link` at your convenience while developing.
  * Of course, you can also expand these scripts, e.g.: start a dev server.
* `npm run build` to build all final artifacts within the `build` folder. This will be the entry point to be published. As you can see, source code and configuration files have been excluded. Only built artifacts are present.
  * Note: the build process will automatically run type checking.
* `npm prerelease` to get everything ready for release, including code formatting with prettier + tslint and test stage. Now we have 2 options:
  * `npm release:local` to install locally our package through a symlink from the `build` folder to your local npm cache. This is very handy in order to test the package from a different project by using `npm link <your package name>`.
  * `npm release` to finally publish your package in npm.
