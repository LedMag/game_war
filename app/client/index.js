'use strict';

import { Layer } from './canvas.js';
import { Loop } from './loop.js';
import { Dot } from './dot.js';
import { Collision } from './fisics.js';


const random = limit => {
  return Math.floor(Math.random() * limit);
}


class App{

  constructor(container){
    this.layer = new Layer(container);
    this.collision = new Collision;
    this.dot = new Dot(30, '#000000', 100, 300);
    this.dots = [];

    this.dots.push(this.dot);
    this.getSetOfDots(3);

    new Loop(this.update.bind(this), this.display.bind(this));
  }

  update(correction){
    this.dot.move(correction);
    for(let i = 0; i < this.dots.length; i++){
      for(let k = 0; k < this.dots.length; k++){
        if(k === i) continue;
        const info = this.collision.checkCollision(this.dots[i], this.dots[k]);
        this.collision.resolveCollision(info);
        // this.collision.resolveCollisionWithBounce(info);
      }
    }
  }

  display(){
    this.layer.ctx.clearRect(0, 0, this.layer.width, this.layer.height);
    // this.dot.render(this.layer.ctx);
    for(const dot of this.dots){
      dot.render(this.layer.ctx);
    }
  }

  getSetOfDots(limit){
    for(let i = 0; i < limit; i++){
      const color = this.getColor();
      // const r = random(20);
      const x = random(this.layer.width - 60);
      const y = random(this.layer.height - 60);
      const dot = new Dot(60, `rgb(${color.r}, ${color.g}, ${color.b})`, x, y);
      this.dots.push(dot);
    }
  }

  getColor(){
    let r = random(255);
    let g = random(255);
    let b = random(255);
    return {r,g,b}
  }

};


new App(document.querySelector('body'));
