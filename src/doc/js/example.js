(function() {
    /**
     * example app
     * @author Stewan P. <talk@stpa.co>
     */
    'use strict';

    angular.module('stpa', [
        'stpaModal',
        'ui.bootstrap'
    ])
        .controller('ModalCtrl', ['$timeout', '$rootScope', ModalCtrl]);

    function ModalCtrl($timeout, $rootScope) {
        var vm = this, //this way vm is passed to scope by controllerAs syntax with no using of $scope
            today = moment().format('dddd');

        vm.date = today + ((today != 'Friday' && today != 'Saturday' && today != 'Sunday') ? ' =/' : ' =D');

        //small hack because i cant stop angular parsers on specific blocks
        vm.dateLabel = '{{vm.date}}';
        vm.templateDateLabel = '{{StpaModalCtrl.scope.date}}';
        vm.templateSettingNameLabel = '{{StpaModalCtrl.setting.name}}';
        vm.templateMarkup = '';
        vm.templateMarkup += '<div class="modal-header">' + '\n';
        vm.templateMarkup += '	<h3 class="modal-title">{{StpaModalCtrl.setting.name}}</h3>' + '\n';
        vm.templateMarkup += '</div>' + '\n';
        vm.templateMarkup += '<div class="modal-body change-template">' + '\n';
        vm.templateMarkup += '<p>do your best here</p>' + '\n';
        vm.templateMarkup += '<p>use {{StpaModalCtrl.scope.myCustomObject}} to call your own objects</p>' + '\n';
        vm.templateMarkup += '<p>you will need pass the object "myCustomObject" by the scope param in directive</p>' + '\n';
        vm.templateMarkup += '</div>' + '\n';
        vm.templateMarkup += '<div class="modal-footer">' + '\n';
        vm.templateMarkup += '	<button class="btn btn-primary" ng-click="StpaModalCtrl.ok($event)">OK</button>' + '\n';
        vm.templateMarkup += '	<button class="btn btn-warning" ng-click="StpaModalCtrl.cancel($event)">Cancel</button>' + '\n';
        vm.templateMarkup += '</div>';

        $timeout(function() {
            // highlight snippet
            if (window.hljs) {
                $('pre code').each(function(i, block) {
                    window.hljs.highlightBlock(block);
                });
            }
        }, 1000);

        $rootScope.$on('StpaModalOkCallback', function() {           
            alert('Ok Pressed');
        });

        $rootScope.$on('StpaModalCancelCallback', function() {
            alert('Cancel Pressed');
        });
    }
})();