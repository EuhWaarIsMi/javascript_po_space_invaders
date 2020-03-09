
function Enemy(x, y) {
  this.x = x;
  this.y = y;
  this.r = 15;
  this.toDelete = false;
  this.xdir = 1;

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

  this.show = function() {
    noStroke();
    fill(255, 0, 200, 150);
    rect(this.x, this.y, this.r*2, this.r*2);
  }

}
