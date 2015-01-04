## Sample 4 - Modal with 100 table rows
----------------------------------------

<h3>
    <my-modal
    name="My Modal With 100 Table Rows"
    template="sample4-template.html"
    scope="vm"
    size="lg">                     
    Click here to open the modal
    </my-modal>
</h3>

*sample-directive.html*
```html
<my-modal
name="My Modal With 100 Table Rows"
template="sample4-template.html"
scope="vm"
size="lg">                     
Click here to open the modal
</my-modal>
```

*sample-template.html*
```html
<div class="modal-header">
    <h3 class="modal-title">{{vm.templateSettingNameLabel}}</h3>
</div>
<div class="modal-body">
<h1>Hello World!</h1>
<hr />
<p>I'm a modal with 100 table rows. Looks good? do your best here</p>
<p>today is <strong>{{vm.templateDateLabel}}</strong>.</p>
<p>you can pass custom objects to template by the scope param in directive</p>
<table class="table">
    <thead>
        <tr>
            <th class="text-center">
                #ID
            </th>
            <th class="text-center">
                Lorem
            </th>
            <th>
                Date
            </th>
        </tr>        
    </thead>
    <tbody>
        <tr ng-repeat="item in StpaModalCtrl.scope.sample4">
            <td class="text-center">
                {{vm.sample4ItemId}}
            </td>
            <td class="text-center">
                {{vm.sample4ItemLorem}}
            </td>
            <td>
                {{vm.sample4ItemDate}}
            </td>
        </tr>
    </tbody>
</table>
</div>
<div class="modal-footer">
    <button class="btn btn-primary" ng-click="StpaModalCtrl.accept($event)">OK</button>
    <button class="btn btn-warning" ng-click="StpaModalCtrl.cancel($event)">Cancel</button>
</div>
```


*sample-controller.js*
```js
function ModalCtrl() {
    var vm = this, //this way vm is passed to scope by controllerAs syntax with no using of $scope
    today = moment().format('dddd');
    vm.date = today + (today == 'Friday' ? ' =D' : ' =/');

    //mock many rows for sample 4
    var sample4 = [];
    for (var i = 1; i <= 100; i++) {
        sample4.push({
            'id': i,
            'lorem': 'ipsum ' + i,
            'date': moment().add(i, 'days').calendar()
        });
    };
    vm.sample4 = sample4;
}
```