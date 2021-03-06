// Exercise - Mouse Coordinates

// We are going to access the mouse coordinates in a div
// When the user clicks on the div, grab the mouse coordinates from the event and output them on the page.
// For bonus points, make this happen when on mousemove

var AppComponent = ng.core
  .Component({
    selector: 'app',
    template:
    `
      <div
        style="width:400px; height:400px; border:1px solid black"
        (mousemove)="handleMouseMove($event)"
      >
      x: {{x}}, y: {{y}}
      </div>
    `
  })
  .Class({
    constructor: function() {
      this.handleMouseMove = (e) => {
        this.x = e.clientX;
        this.y = e.clientY;
      }
    }
  });


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


