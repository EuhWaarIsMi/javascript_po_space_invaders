function Ship(lMarge, rMarge) {
  this.x = width/2;
  this.y = height - 50;
  this.lMarge = lMarge;
  this.rMarge = rMarge;
  this.xdir = 0;
  this.lives = 3;       

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, 60, 60);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir, lMarge, rMarge) {
    this.x = constrain(this.x, this.lMarge*width, this.rMarge*width);
    this.x += this.xdir*5;
    
  }

}
