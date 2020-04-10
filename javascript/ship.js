//Dit is de class voor het ruimteschip, die verschillende waardes toegewezen krijgt.
function Ship(lMarge, rMarge, animatie) {
  this.x = width/2;
  this.y = height - 100;
  this.r = 30;
  this.lMarge = lMarge;
  this.rMarge = rMarge;
  this.xdir = 0;
  this.lives = 3;
  this.animatie = animatie;      

  //Deze functie zorgt ervoor dat het schip beweegt/geupdatet wordt.
  this.show = function(nummer) {
    image(this.animatie[nummer],this.x-(this.animatie[nummer].width/2), this.y-(this.animatie[nummer].height/2));
  }

  //Dit zorgt voor de richting van het ruimteschip, zodat je naar links en naar rechts gaat.
  this.setDir = function(dir) {
    this.xdir = dir;
  }

  //Deze functie zorgt ervoor dat je een leven verliest.
  this.destroy = function() {
      this.lives--;
  }

  //Deze functie wordt gebruikt om het karakter onderaan het scherm weer te geven.
  this.create = function(x, y) {
    image(this.animatie[0],x,y);
  }

  //Dit zorgt voor de daadwerkelijke beweging van het schip. De bewegingen worden beperkt binnen een gebied.
  this.move = function(dir, lMarge, rMarge) {
    this.x = constrain(this.x, this.lMarge*width, this.rMarge*width);
    this.x += this.xdir*5;
    
  }

}
