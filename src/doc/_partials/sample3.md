## Sample 3 - Modal with custom template
----------------------------------------

<stpa-modal
name="My Modal With Template"
template="sample-template.html"
scope="vm"
size="lg">                     
Click here to open a modal with custom template
</stpa-modal>

*sample-directive.html*
```html
<stpa-modal
name="My Modal With Template"
template="sample-template.html"
scope="vm"
size="lg">                     
Click here to open a modal with custom template
</stpa-modal>
```

*sample-template.html*
```html
<div class="modal-header">
    <h3 class="modal-title">{{vm.templateSettingNameLabel}}</h3>
</div>
<div class="modal-body my-own-template-class">
<p>do your best here</p>
<p>hello world, today is <strong>{{vm.templateDateLabel}}</strong>.</p>
<p>you can pass custom objects to template by the scope param in directive</p>
</div>
<div class="modal-footer">
    <button class="btn btn-primary" ng-click="StpaModalCtrl.accept()">OK</button>
    <button class="btn btn-warning" ng-click="StpaModalCtrl.cancel()">Cancel</button>
</div>
```

*sample-controller.js*
```js
function ModalCtrl() {
    var vm = this, //this way vm is passed to scope by controllerAs syntax with no using of $scope
        today = moment().format('dddd');

    vm.date = today + (today == 'Friday' ? ' =D' : ' =/');
}
```