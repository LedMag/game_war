'use strict';

export class Layer{

  constructor(container){

    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width;
    this.height;

    container.prepend(this.canvas);

    this.fitToContainer(this.canvas);
    addEventListener('resize', () => this.fitToContainer(this.canvas));

  }

  fitToContainer(cnv){
    cnv.width = this.width = cnv.offsetWidth;
    cnv.height = this.height = cnv.offsetHeight;
  }
}
