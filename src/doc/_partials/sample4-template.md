<div class="modal-header">
    <h3 class="modal-title">{{StpaModalCtrl.setting.name}}</h3>
</div>
<div class="modal-body">
<h1>Hello World!</h1>
<hr />
<p>I'm a modal with 100 table rows. Looks good? do your best here</p>
<p>today is <strong>{{StpaModalCtrl.scope.date}}</strong>.</p>
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
                {{item.id}}
            </td>
            <td class="text-center">
                {{item.lorem}}
            </td>
            <td>
                {{item.date}}
            </td>
        </tr>
    </tbody>
</table>

</div>
<div class="modal-footer">
    <button class="btn btn-primary" ng-click="StpaModalCtrl.accept($event)">OK</button>
    <button class="btn btn-warning" ng-click="StpaModalCtrl.cancel($event)">Cancel</button>
</div>