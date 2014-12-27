<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
    <ul class="nav tabs-vertical col-sm-2" role="tablist">
        <li role="presentation" class="active">
            <a href="#install" id="install-tab" role="tab" data-toggle="tab" aria-controls="install" aria-expanded="true">Install</a></li>
        <li role="presentation" class="">
            <a href="#params" role="tab" id="params-tab" data-toggle="tab" aria-controls="params" aria-expanded="false">Params</a></li>
      <li role="presentation" class="dropdown">
        <a href="#" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown" aria-controls="myTabDrop1-contents" aria-expanded="false">Examples <span class="caret"></span></a>
        <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1" id="myTabDrop1-contents">
          <li><a href="#dropdown1" tabindex="-1" role="tab" id="dropdown1-tab" data-toggle="tab" aria-controls="dropdown1">@fat</a></li>
          <li><a href="#dropdown2" tabindex="-1" role="tab" id="dropdown2-tab" data-toggle="tab" aria-controls="dropdown2">@mdo</a></li>
        </ul>
      </li>
    </ul>
    <div id="" class="tab-content">
      <div role="tabpanel" class="tab-pane fade active in" id="install" aria-labelledby="install-tab">

       install ### stpa-modal directive accepts the following params

      </div>
      <div role="tabpanel" class="tab-pane fade" id="params" aria-labelledby="params-tab">

### stpa-modal directive accepts the following params

```js
{
    name: '', //default "My stpa-modal"
    bodyClass: '', //default "my-body-class"
    body: '', //default null
    template: 'path_to_html/file.html', //default false
    scope: {} //default null 
    size: 'lg', //default sm | options lg - md - sm
    windowClass: '', //default "stpa-modal-window"
    backdrop: true, //default true 
}
```

      </div>
      <div role="tabpanel" class="tab-pane fade" id="dropdown1" aria-labelledby="dropdown1-tab">
        <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
      </div>
      <div role="tabpanel" class="tab-pane fade" id="dropdown2" aria-labelledby="dropdown2-tab">
        <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
      </div>
    </div>
  </div>



### template markup
```html
{{ vm.templateMarkup }}
```

## Sample 1
<stpa-modal
name="My Beautiful Modal"
body-class="my-body-class"
body="Hello World!"
size="lg">                     
Click here to open a simple modal
</stpa-modal>

```html
<stpa-modal
name="My Beautiful Modal"
body-class="my-body-class"
body="Hello World!"
size="lg">                     
Click here to open a simple modal
</stpa-modal>
```


## Sample 2
<stpa-modal
name="My Day Modal"
body-class="my-body-class"
body="Hello World! Today is <strong>{{vm.date}}</strong>"
size="lg">                     
Click here to open a modal with dynamic data-binding
</stpa-modal>

```html
<stpa-modal
name="My Day Modal"
body-class="my-body-class"
body="Hello World! Today is <strong>{{vm.dateLabel}}</strong>"
size="lg">                     
Click here to open a modal with dynamic data-binding
</stpa-modal>
```

```js
    function ModalCtrl() {
        var vm = this, //this way vm is passed to scope by controllerAs syntax with no using of $scope
            today = moment().format('dddd');

        vm.date = today + (today == 'Friday' ? ' =D' : ' =/');
    }
```

## Sample 3
<stpa-modal
name="My Modal With Template"
body-class="my-body-class"
template="sample-template.html"
size="lg">                     
Click here to open a modal with custom template
</stpa-modal>

```html
<stpa-modal
name="My Day Modal"
body-class="my-body-class"
body="Hello World! Today is <strong>{{vm.date_label}}</strong>"
size="lg">                     
Click here to open a modal with dynamic data-binding
</stpa-modal>
```
