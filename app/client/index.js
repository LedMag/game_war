'use strict';

import Layer from './canvas.js';
import { MouseEvents, KeyEvents }  from './events.js';

class App{

  constructor(container){
    this.keyEvents = new KeyEvents;
    this.mouseEvents = new MouseEvents;
    this.layer = new Layer(container);

  }

};
const app = new App(document.querySelector('body'));

requestAnimationFrame(animate)
function animate(){
  requestAnimationFrame(animate)
  console.log(app.mouseEvents.down, app.mouseEvents.press);
  app.mouseEvents.update();
}
