// Exercise - A Click Counter
// Make a little click counter. Each time you click a link, the counter should increment.
// For bonus points, make a down button as well, so you can change a value with up and down clicks.
// Note that i++ or i+=1 is not currently supported in Angular expressions. You will need to use the longhand i = i + 1;

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <a (click)="i=i+1">Clicked {{i}} Times</a>
    `
  })
  .Class({
    constructor: function() {
      this.i = 0
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


