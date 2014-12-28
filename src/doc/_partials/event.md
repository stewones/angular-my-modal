## Events
---------

*sample-controller.js - trigger modal accept*
```js
    function ModalCtrl($rootScope) {
        $rootScope.$emit('StpaModalOk');
    }    
```

*sample-controller.js - trigger modal cancel*
```js
    function ModalCtrl($rootScope) {
        $rootScope.$emit('StpaModalCancel');
    }    
```