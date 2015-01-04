## Sample 1 - Simple modal
--------------------------

<h3>
   <my-modal
    name="My Beautiful Modal"
    body-class="my-body-class"
    body="<h1>Hello World!</h1><hr />I'm a modal. Looks good?"
    size="lg" ng-cloak>                     
    Click here to open the modal
    </my-modal> 
</h3>


*sample-directive.html*
```html
<my-modal
name="My Beautiful Modal"
body-class="my-body-class"
body="<h1>Hello World!</h1><hr />I'm a modal. Looks good?"
size="lg">                     
Click here to open the modal
</my-modal>
```