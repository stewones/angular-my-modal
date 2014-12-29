## Events
---------

*sample-controller.js - trigger an accept modal action*
```js
    function ModalCtrl($rootScope) {
        $rootScope.$emit('StpaModalAccept');
    }    
```

*sample-controller.js - trigger a cancel modal action*
```js
    function ModalCtrl($rootScope) {
        $rootScope.$emit('StpaModalCancel');
    }    
```