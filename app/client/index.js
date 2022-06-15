'use strict';

import { Layer } from './canvas.js';
import { Loop } from './loop.js';
import { Dot } from './dot.js';
// import { MouseEvents, KeyEvents }  from './events.js';

class App{

  constructor(container){
    // this.keyEvents = new KeyEvents;
    // this.mouseEvents = new MouseEvents;
    this.layer = new Layer(container);
    this.dot = new Dot(30, '#000000', this.layer.ctx);

    new Loop(this.update.bind(this), this.display.bind(this));
  }

  update(correction){
    this.dot.move(correction);
  }

  display(){
    this.layer.ctx.clearRect(0, 0, this.layer.width, this.layer.height);
    this.dot.render();
  }


};

new App(document.querySelector('body'));
