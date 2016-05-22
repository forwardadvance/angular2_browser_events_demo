// Exercise - A Click Counter
// Make a little click counter. Each time you click a link, the counter should increment.
// For bonus points, make a down button as well, so you can change a value with up and down clicks.
// Note that i++ or i+=1 is not currently supported in Angular expressions. You will need to use the longhand i = i + 1;

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
    `
  })
  .Class({
    constructor: function() {
    }
  })


document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});
