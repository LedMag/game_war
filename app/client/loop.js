'use strick';

export class Loop{
  constructor(_update, _display){
      this.update = _update;
      this.display = _display;
      this.deltaTime;
      this.lastUpdate;

      this.animate = this.animate.bind(this);
      this.animate();
  }

  animate(currentTime = 0){
    requestAnimationFrame(this.animate);
    this.deltaTime = currentTime - this.lastUpdate;

    this.update(this.deltaTime/1000);
    this.display();

    this.lastUpdate = currentTime;
  }
}
