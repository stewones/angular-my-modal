## Callbacks
------------

*sample-controller.js - receives an accept modal callback*
```js
    function ModalCtrl($rootScope) {
        $rootScope.$on('StpaModalAccepted',function(){
            alert('Yay, ok button pressed =D');
        });
    }    
```
*sample-controller.js - receives a cancel modal callback*
```js
    function ModalCtrl($rootScope) {
        $rootScope.$on('StpaModalCanceled',function(){
            alert('Ops, cancel button pressed =/');
        });
    }
```