## Install for production

- install stpa-modal running the following command on terminal

```shell
$ bower install stpa-modal --save
```

- include `stpa-modal.min.js` on your project. It should be located at `bower_components/stpa-modal/src`

```html
<script src="../bower_components/stpa-modal/src/stpa-modal.min.js"></script>
```

- add `stpaModal` and `ui.bootstrap` as a module dependency to your app

```js
angular.module('my.app', [
    'stpaModal',
    'ui.bootstrap'
])
```


## Usage

- insert `<stpa-modal></stpa-modal>` directive into your template

```html
<stpa-modal
body="Hello World!">                     
    Open Modal
</stpa-modal>
```

Check out [documentation](https://modal.stpa.co) for more examples

## Install for development

- install node and bower on your environment
- cd to your devolpment folder and clone repo

```sh
$ git clone https://github.com/stpa-co/stpa-modal.git stpa-modal
$ cd stpa-modal
```

- install module dependencies

```sh
$ npm install
$ bower install
```

- serve project

```sh
$ gulp serve
```

**Note:** running the command `gulp build` should generate minified src at `src/stpa-modal.min.js` and docs on `dist/doc` folder.

**Note:** running the command `gulp serve` should generate minified src at `src/stpa-modal.min.js`, docs on `dist/doc` folder and serves on `http://localhost:3000/doc` with watch changes and live reload.

**Note:** running the command `gulp serve:dist` should generate minified src at `src/stpa-modal.min.js`, docs on `dist/doc` folder and serves on `http://localhost:3000/doc` with minified bower dependencies.

**Note:** to update project src open an issue, fork the project, do your work, run `gulp build` and make a pull-request. 

**Note:** to update docs run `gulp build` and make a pull-request into `gh-pages` branch only with content of `dist/doc` folder. You must have another  repository only for the docs. You can use the `build.sh` script located in root to automate the process. 

Please check out the tasks on gulp folder for more details.

## MIT Licensed