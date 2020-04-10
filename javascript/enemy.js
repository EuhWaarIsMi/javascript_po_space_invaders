//Deze klasse wordt gebruikt voor de aliens.
function Enemy(x, y, animatie) {
  this.x = x;
  this.y = y;
  this.r = 20;
  this.toDelete = false;
  this.xdir = 1;
  this.animatie = animatie;

  //Zorgt ervoor dat de aliens uiteindelijk verwijdert worden.
  this.destroy = function() {
    this.toDelete = true;
  }

  //Deze functie zorgt ervoor dat de aliens omlaag gaan als ze de rand bereiken.
  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  //Zorgt ervoor dat de aliens bewegen.
  this.move = function() {
    this.x = this.x + this.xdir;
  }

  //Toont de aliens met de correcte animatie.
  this.show = function(nummer) {
    image(this.animatie[nummer], this.x-48, this.y-48);
  }

}
