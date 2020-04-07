
function Enemy(x, y, animatie) {
  this.x = x;
  this.y = y;
  this.r = 20;
  this.toDelete = false;
  this.xdir = 1;
  this.animatie = animatie;

  this.destroy = function() {
    this.toDelete = true;
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function(nummer) {
    image(this.animatie[nummer], this.x-48, this.y-48);
  }

}
