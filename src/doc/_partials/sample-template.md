<div class="modal-header">
    <h3 class="modal-title">{{StpaModalCtrl.setting.name}}</h3>
</div>
<div class="modal-body change-template">
<p>do your best here</p>
<p>hello world, today is <strong>{{StpaModalCtrl.scope.date}}</strong>.</p>
<p>you can pass custom objects to template by the scope param in directive</p>
</div>
<div class="modal-footer">
    <button class="btn btn-primary" ng-click="StpaModalCtrl.ok($event)">OK</button>
    <button class="btn btn-warning" ng-click="StpaModalCtrl.cancel($event)">Cancel</button>
</div>