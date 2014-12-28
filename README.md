## Install for production
-------------------------
- install stpa-modal running the following command

```shell
$ bower install stpa-modal --save
```

- **Note:** if you are asked about `Unable to find a suitable version for angular` - answer `angular#1.3.x which is required by stpa-modal`.
- **Note:** if you are issued about `github.com connection timed out` just run `git config --global url.https://.insteadOf git://` in terminal.


- include `stpa-modal.min.js` on your project. It should be located at `bower_components/stpa-modal/src`

```html
<script src="../bower_components/stpa-modal/src/stpa-modal.min.js"></script>
```

- add `stpa.modal` and `ui.bootstrap` as a module dependency to your app

```js
angular.module('my.app', [
    'stpa.modal',
    'ui.bootstrap'
])
```

<br />

## Usage
--------

- insert `<stpa-modal></stpa-modal>` directive into your template

```html
<stpa-modal body="Hello World!">Open Modal</stpa-modal>
```

Check out [documentation](https://modal.stpa.co) for more examples
<br />

## Install for development
--------------------------
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

- **Note:** if you are issued about `github.com connection timed out` just run `git config --global url.https://.insteadOf git://` in terminal.

- serve project and do the work

```sh
$ gulp serve #Note: maybe you should have to use `sudo`
```

- serve project on distribution mode

```sh
$ gulp serve:dist #Note: maybe you should have to use `sudo`
```

- build project to distribution

```sh
$ gulp build #Note: maybe you should have to use `sudo`
```

**Note:** running the command `gulp build` should generate minified src at `src/stpa-modal.min.js` and docs on `dist/doc` folder.

**Note:** running the command `gulp serve` should generate minified src at `src/stpa-modal.min.js`, docs on `dist/doc` folder and serves on `http://localhost:3000/doc` with live reload and changes watcher.

**Note:** running the command `gulp serve:dist` should generate minified src at `src/stpa-modal.min.js`, docs on `dist/doc` folder and serves on `http://localhost:3000/doc` with minified dependencies.

**Note:** to update project src open an issue, fork the project, do your work, run `gulp build` and make a pull-request. 

**Note:** to update docs run `gulp build` and make a pull-request into `gh-pages` branch only with content of `dist/doc` folder. I like to work with another folder (and repo) just for the docs (pointing to the same remote), maybe you will like also. You can use the `build.sh` script located in the root to automate the process, but check it before. Also check tasks located on gulp folder for more details.

Feel free to open issues if you run into trouble or have suggestions. Pull Requests are always welcome.

## License
---------------
The stpa-modal is open-sourced software licensed under the [MIT](http://opensource.org/licenses/MIT) license

[@stewones](https://twitter.com/stewones)