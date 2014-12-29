## Sample 2 - Modal with dynamic data-binding
---------------------------------------------

<stpa-modal
name="My Beautiful Day Modal"
body-class="my-body-class"
body="<h1>Hello World!</h1><hr />I'm a modal. Today is <strong>{{vm.date}}</strong>"
size="lg">                     
Click here to open a modal with dynamic data-binding
</stpa-modal>

*sample-directive.html*
```html
<stpa-modal
name="My Beautiful Day Modal"
body-class="my-body-class"
body="<h1>Hello World!</h1><hr />I'm a modal. Today is <strong>{{vm.dateLabel}}</strong>"
size="lg">                     
Click here to open a modal with dynamic data-binding
</stpa-modal>
```

*sample-controller.js*
```js
function ModalCtrl() {
    var vm = this, //this way vm is passed to scope by controllerAs syntax with no using of $scope
        today = moment().format('dddd');

    vm.date = today + ((today != 'Friday' && today != 'Saturday' && today != 'Sunday') ? ' =/' : ' =D');
}
```