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
 (function() {
     /**
      * example app
      * @author Stewan P. <talk@stpa.co>
      */
     'use strict';

     angular.module('stpa', [
         'stpa.modal',
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
         vm.templateMarkup += ' <h3 class="modal-title">{{StpaModalCtrl.setting.name}}</h3>' + '\n';
         vm.templateMarkup += '</div>' + '\n';
         vm.templateMarkup += '<div class="modal-body change-template">' + '\n';
         vm.templateMarkup += '<p>do your best here</p>' + '\n';
         vm.templateMarkup += '<p>use {{StpaModalCtrl.scope.myCustomObject}} to call your own objects</p>' + '\n';
         vm.templateMarkup += '<p>you will need pass the object "myCustomObject" by the scope param in directive</p>' + '\n';
         vm.templateMarkup += '</div>' + '\n';
         vm.templateMarkup += '<div class="modal-footer">' + '\n';
         vm.templateMarkup += ' <button class="btn btn-primary" ng-click="StpaModalCtrl.ok($event)">OK</button>' + '\n';
         vm.templateMarkup += ' <button class="btn btn-warning" ng-click="StpaModalCtrl.cancel($event)">Cancel</button>' + '\n';
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