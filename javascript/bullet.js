function Bullet(x, y, type, animatie) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.type = type;
  this.animatie = animatie;

  this.show = function(nummer) {
    image(this.animatie[nummer], this.x-(this.animatie[nummer].width/2), this.y-(this.animatie[nummer].height/2));
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