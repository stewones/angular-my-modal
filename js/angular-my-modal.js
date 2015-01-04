/**
 * angular-my-modal provides a reusable way to do modals in AngularJS
 * check out documentation in http://angular-my-modal.stpa.co
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
"use strict";
(function() {
    var module = angular.module("stpa.modal", []);
    module.directive('myModal', StpaModal);
    module.controller('StpaModalCtrl', StpaModalCtrl);

    //directive
    function StpaModal($modal) {
        return {
            transclude: true,
            restrict: 'EA',
            template: '<a ng-click="open()" ng-transclude></a>',
            scope: {
                controller: "@",
                controllerAs: "@",
                name: "@",
                size: "@",
                scope: "=scope",
                body: "@",
                bodyClass: "@"
            },
            link: function(scope, element, attrs) {
                scope.open = function() {
                    var modalInstance = $modal.open({
                        templateUrl: attrs.template ? attrs.template : false,
                        template: !attrs.template ? function() {
                            var html = '';
                            html += '<div class="modal-header">';
                            html += '<h3 class="modal-title">' + attrs.name && attrs.name != '' ? attrs.name : 'Angular My Modal' + '</h3>';
                            html += '</div>';
                            html += '<div class="modal-body ' + attrs.bodyClass + '">';
                            html += attrs.body;
                            html += '</div>';
                            html += '<div class="modal-footer">';
                            html += '<button class="btn btn-primary" ng-click="StpaModalCtrl.accept($event)">OK</button>';
                            html += '<!-- <button class="btn btn-warning" ng-click="StpaModalCtrl.cancel($event)">Cancel</button> -->';
                            html += '</div>';
                            return html;
                        } : false,
                        controller: 'StpaModalCtrl',
                        controllerAs: 'StpaModalCtrl',
                        size: attrs.size ? attrs.size : 'sm', //lg - sm - md
                        windowClass: attrs.windowClass ? attrs.windowClass : 'angular-my-modal-window',
                        backdrop: attrs.backdrop ? attrs.backdrop : true,
                        resolve: {
                            modalSetting: function() {
                                return {
                                    name: scope.name ? scope.name : 'Angular My Modal'
                                };
                            },
                            modalScope: function() {
                                return scope.scope ? scope.scope : {};
                            }
                        }

                    });

                    modalInstance.result.then(function() {
                        //console.log('success');
                    }, function() {
                        //console.log('error');
                    });
                };
            }
        };
    }

    //directive controller
    function StpaModalCtrl($scope, $rootScope, $modalInstance, modalSetting, modalScope) {
        var that = this;
        that.setting = modalSetting;
        that.scope = modalScope;
        that.accept = accept;
        that.cancel = cancel;

        //////////////////////
        // callback trigger //
        //////////////////////

        function accept(e) {
            $modalInstance.close();    
            $rootScope.$emit('StpaModalAccepted', e);
            if (e) e.stopPropagation();
        };

        function cancel(e) {
            $modalInstance.dismiss('cancel');
            $rootScope.$emit('StpaModalCanceled', e);
            if (e) e.stopPropagation();
        };

        ///////////////////
        // event trigger //
        ///////////////////

        $rootScope.$on('StpaModalAccept', function() {
            accept();
        });
        $rootScope.$on('StpaModalCancel', function() {
            cancel();
        });
    }

})();