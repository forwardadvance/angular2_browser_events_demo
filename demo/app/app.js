// Dealing with Browser Events
// (click)="onClick()">
// (keyup)="onChange($event)"
// (submit)

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <a on-click="handleClick($event)">Click</a>
      <br />
      <input on-input="value = $event.target.value" />
      {{value}}

      <form on-submit="submitted = true">
        <input />
        <button>submit</button>
        {{submitted}}
      </form>
    `
  })
  .Class({
    constructor: function() {
      this.handleClick = function(evt) {
        console.log('clicked');
      }
      this.handleInput = function(evt) {
        console.log(evt);
        this.value = evt.target.value;
      }
    }
  })


/**
  * The App Module
  */
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


/**
  * Finally bootstrap
  */
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);


