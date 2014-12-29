<div class="modal-header">
    <h3 class="modal-title">{{StpaModalCtrl.setting.name}}</h3>
</div>
<div class="modal-body">
<h1>Hello World!</h1>
<hr />
<p>I'm a modal. Looks good? do your best here</p>
<p>today is <strong>{{StpaModalCtrl.scope.date}}</strong>.</p>
<p>you can pass custom objects to template by the scope param in directive</p>
</div>
<div class="modal-footer">
    <button class="btn btn-primary" ng-click="StpaModalCtrl.accept($event)">OK</button>
    <button class="btn btn-warning" ng-click="StpaModalCtrl.cancel($event)">Cancel</button>
</div>