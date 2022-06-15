'use strick';

class MouseEvents {
  constructor() {
    this.down = false;
    this.up = true;
    this.press = false;
    this.pos = {x: 0, y: 0};

    addEventListener('mousedown', e => this.changeState(e));
    addEventListener('mouseup', e => this.changeState(e));
    // addEventListener('mousemove', e => this.changeState(e));
    // addEventListener('mouseout', e => this.changeState(e));
    // addEventListener('mouseover', e => this.changeState(e));
  }

  changeState(e){
    this.pos.x = e.clientX;
    this.pos.y = e.clientY;

    if(e.type === 'mousedown'){
      this.down = true;
      this.up = false;
      this.press = true;
    }
    if(e.type === 'mouseup'){
      this.down = false;
      this.up = true;
      this.press = false;
    }
  }

  update(){
    this.down = false;
    this.up = false;
  }
}

class KeyEvents {
  constructor(keysList = ['KeyA', 'KeyW', 'KeyS', 'KeyD']) {
    this.keysList = keysList;
    this.keys = {};

    addEventListener('keydown', e => this.changeState(e));
    addEventListener('keyup', e => this.changeState(e));
  }

  changeState(e){
    if(!this.keysList.includes(e.code)) return;
    this.keys[e.code] = e.type === 'keydown' ? true : false;
  }
}

export { MouseEvents, KeyEvents };
