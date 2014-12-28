## Callbacks
------------

*sample-controller.js - callback modal accept*
```js
    function ModalCtrl($rootScope) {
        $rootScope.$on('StpaModalOkCallback',function(){
            alert('Ok Pressed');
        });
    }    
```
*sample-controller.js - callback modal cancel*
```js
    function ModalCtrl($rootScope) {
        $rootScope.$on('StpaModalCancelCallback',function(){
            alert('Cancel Pressed');
        });
    }
```