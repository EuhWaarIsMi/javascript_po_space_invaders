function Bullet(x, y, type) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.type = type;

  this.show = function() {
    if (this.type == 'ship') {
        push();
        noStroke();
        fill(150, 0, 255);
        ellipse(this.x, this.y, this.r*2, this.r*2);
        pop();
    } 
    else {
        push();
        noStroke();
        fill('red');
        ellipse(this.x, this.y, this.r*2, this.r*2);
        pop();
    }

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
    if (this.type == 'ship') {
        this.y = this.y - 8;
    } else if (this.type = 'enemy') {
        this.y = this.y + 8;
    }
    
  }

}