//Deze class wordt gebruikt om de kogels aan te maken.
function Bullet(x, y, type, animatie) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.type = type;
  this.animatie = animatie;

  //Zorgt ervoor dat de kogels getoond worden met de correcte animatie.
  this.show = function(nummer) {
    image(this.animatie[nummer], this.x-(this.animatie[nummer].width/2), this.y-(this.animatie[nummer].height/2));
  }

  //Zorgt ervoor dat kogel uiteindelijk verwijdert wordt.
  this.destroy = function() {
      this.toDelete = true;
  }

  //Deze functie kijkt of de kogel iets raakt.
  this.hits = function(bullet) {
    var d = dist(this.x, this.y, bullet.x, bullet.y);
    if (d < this.r + bullet.r) {
      return true;
    } else {
      return false;
    }
  }

  //Zorgt ervoor dat de verschillende types kogels bewegen in de correcte richting.
  //Kogels kunnen van de vijand komen of van het karakter en hebben dan verschillende bewegingen nodig.
  this.move = function() {
    if (this.type == 'ship') {
        this.y = this.y - 8;
    } else if (this.type = 'enemy') {
        this.y = this.y + 8;
    }
    
  }

}