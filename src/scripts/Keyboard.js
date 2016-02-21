function Keyboard(keyCode) {

    this.code = keyCode;
    this.isDown = false;
    this.isUp = true;
    this.press = undefined;
    this.release = undefined;
    return this;

}

Keyboard.prototype.downHandler = function(event) {
    if (event.keyCode === this.code) {
        if (this.isUp && this.press) this.press();
        this.isDown = true;
        this.isUp = false;
    }
    event.preventDefault();
};


Keyboard.prototype.upHandler = function(event) {
    if (event.keyCode === this.code) {
        if (this.isDown && this.release) this.release();
        this.isDown = false;
        this.isUp = true;
    }
    event.preventDefault();
};


/*window.addEventListener(
    "keydown", this.downHandler.bind(this), false
);
window.addEventListener(
    "keyup", this.upHandler.bind(this), false
);*/


/*
##Use

  var left = new Keyboard(37),
      right = new Keyboard(39);


  left.press = function() {
    elemPosition.x  = -5;
  };

  left.release = function() {

    if (!right.isDown && cat.vy === 0) {
      elemPosition.x = 0;
    }
  };

  right.press = function() {
    elemPosition.x  = +5;
  };

  right.release = function() {

    if (!right.isDown && cat.vy === 0) {
      elemPosition.x = 0;
    }
  };


*/
