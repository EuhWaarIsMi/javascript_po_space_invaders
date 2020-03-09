function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.destroy = function() {
    this.toDelete = true;
  }

  this.hits = function(bullet) {
    var d = dist(this.x, this.y, bullet.x, bullet.y);
    if (d < this.r + bullet.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y - 8;
  }

}