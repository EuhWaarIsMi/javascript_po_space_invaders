function Ship(lMarge, rMarge, animatie) {
  this.x = width/2;
  this.y = height - 200;
  this.r = 30;
  this.lMarge = lMarge;
  this.rMarge = rMarge;
  this.xdir = 0;
  this.lives = 3;
  this.animatie = animatie;      

  this.show = function(nummer) {
    image(this.animatie[nummer],this.x-75, this.y);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.destroy = function() {
      this.lives--;
  }

  this.create = function(x, y) {
    image(this.animatie[0],x,y);
  }

  this.move = function(dir, lMarge, rMarge) {
    this.x = constrain(this.x, this.lMarge*width, this.rMarge*width);
    this.x += this.xdir*5;
    
  }

}
