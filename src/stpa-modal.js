 /**
  * stpa-modal provides a reusable way to do modal in AngularJS
  * check out documentation in http://modal.stpa.co
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
     var mod = angular.module("stpa.modal", []);
     mod.directive('stpaModal', function($modal) {
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
                             html += '<h3 class="modal-title">' + attrs.name && attrs.name != '' ? attrs.name : 'My stpa-modal' + '</h3>';
                             html += '</div>';
                             html += '<div class="modal-body ' + attrs.bodyClass + '">';
                             html += attrs.body;
                             html += '</div>';
                             html += '<div class="modal-footer">';
                             html += '<button class="btn btn-primary" ng-click="StpaModalCtrl.ok($event)">OK</button>';
                             html += '<!-- <button class="btn btn-warning" ng-click="StpaModalCtrl.cancel($event)">Cancel</button> -->';
                             html += '</div>';
                             return html;
                         } : false,
                         controller: 'StpaModalCtrl',
                         controllerAs: 'StpaModalCtrl',
                         size: attrs.size ? attrs.size : 'sm', //lg - sm - md
                         windowClass: attrs.windowClass ? attrs.windowClass : 'stpa-modal-window',
                         backdrop: attrs.backdrop ? attrs.backdrop : true,
                         resolve: {
                             modalSetting: function() {
                                 return {
                                     name: scope.name ? scope.name : 'Stpa Modal'
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
                         //console.log('error : ' + new Date());
                     });
                 };
             }
         };
     });

     mod.controller('StpaModalCtrl', function($scope, $rootScope, $modalInstance, modalSetting, modalScope) {
         var that = this;
         that.setting = modalSetting;
         that.scope = modalScope;
         that.ok = ok;
         that.cancel = cancel;

         //callback
         function ok(e) {
             $modalInstance.close();
             $rootScope.$emit('StpaModalOkCallback', e);
             if (e) e.stopPropagation();
         };

         function cancel(e) {
             $modalInstance.dismiss('cancel');
             $rootScope.$emit('StpaModalCancelCallback', e);
             if (e) e.stopPropagation();
         };

         //events trigger
         $rootScope.$on('StpaModalOk', function() {
             ok();
         });

         $rootScope.$on('StpaModalCancel', function() {
             cancel();
         });
     });
 })();