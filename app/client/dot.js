'use strick';

import { MouseEvents, KeyEvents }  from './events.js';

const TWO_PI = 2 * Math.PI;

export class Dot{
  constructor(radius, color, x, y){
    this.radius = radius;
    this.color = color;
    this.pos = {x: x, y: y}
    this.v = 10;
    this.vMax = 400;
    this.ax = 1.1;
    this.mass = this.radius * 10;

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
    if(!this.keyEvents.keys['KeyA'] &
       !this.keyEvents.keys['KeyS'] &
       !this.keyEvents.keys['KeyD'] &
       !this.keyEvents.keys['KeyW']){this.v = 10; return}
    if(this.keyEvents.keys['KeyA']){
      this.v = this.v < 400 ? this.v * this.ax : this.vMax;
      this.pos.x -= this.v * correction;
    }
    if(this.keyEvents.keys['KeyD']){
      this.v = this.v < 400 ? this.v * this.ax : this.vMax;
      this.pos.x += this.v * correction;
    }
    if(this.keyEvents.keys['KeyW']){
      this.v = this.v < 400 ? this.v * this.ax : this.vMax;
      this.pos.y -= this.v * correction;
    }
    if(this.keyEvents.keys['KeyS']){
      this.v = this.v < 400 ? this.v * this.ax : this.vMax;
      this.pos.y += this.v * correction;
    }
  }

}
