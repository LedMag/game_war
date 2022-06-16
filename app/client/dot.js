'use strick';

import { MouseEvents, KeyEvents }  from './events.js';

const TWO_PI = 2 * Math.PI;

export class Dot{
  constructor(radius, color, x, y){
    this.radius = radius;
    this.color = color;
    this.pos = {x: x, y: y}
    this.vel = 500;

    this.keyEvents = new KeyEvents;
    this.mouseEvents = new MouseEvents;

    this.render = this.render.bind(this);
  }

  render(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, TWO_PI);
    ctx.closePath();
    ctx.fill();
  }

  move(correction){
    if(this.keyEvents.keys['KeyA']){
      this.pos.x -= this.vel*correction;
    }
    if(this.keyEvents.keys['KeyD']){
      this.pos.x += this.vel*correction;
    }
    if(this.keyEvents.keys['KeyW']){
      this.pos.y -= this.vel*correction;
    }
    if(this.keyEvents.keys['KeyS']){
      this.pos.y += this.vel*correction;
    }
  }

}
