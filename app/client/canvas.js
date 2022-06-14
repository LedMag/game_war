'use strict';

export default class Layer{

  constructor(container){

    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    container.prepend(this.canvas);

    this.fitToContainer(this.canvas);
    addEventListener('resize', () => this.fitToContainer(this.canvas));

  }

  fitToContainer(cnv){
    console.dir(cnv);
    cnv.width = cnv.offsetWidth;
    cnv.height = cnv.offsetHeight;
  }
}
