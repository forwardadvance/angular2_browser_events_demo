// Exercise - Mouse Coordinates

// We are going to access the mouse coordinates in a div
// When the user clicks on the div, grab the mouse coordinates from the event and output them on the page.
// For bonus points, make this happen when on mousemove

var heroModel = {
  name: "LLars Bunderchump",
  x: 0,
  y: 0,
  moveNorth: function() {
    this.x++;
  },
  moveSouth: function() {
    this.x--;
  },
  moveEast: function() {
    this.y--
  },
  moveWest: function() {
    this.y++
  }
}

var AppComponent = ng.core
  .Component({
    selector: 'app',
    template:
    `
      <h1>Escape The Dungeon!</h1>
    `
  })
  .Class({
    constructor: function() {
      this.protagonist = heroModel;
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


