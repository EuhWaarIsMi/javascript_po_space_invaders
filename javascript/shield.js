//Dit is de klasse voor de schilden die het ruimteschip beschermen.
function Shield(x, y, animatie) {
    this.x = x*width;
    this.y = y;
    this.toDelete = false;
    this.animatie = animatie;
    this.nummer = 0;
    this.r = 60;
    this.nummer = 0;

    //Toont de schilden met de correcte afbeelding.
    this.show = function() {
        image(this.animatie[this.nummer],this.x-this.r, this.y-this.r, this.r*2, this.r*2);
    }

    //Zorgt ervoor dat de schilden kleiner worden als ze geraakt worden. 
    //Als ze op een bepaalde grootte komen, wordt de afbeelding aangepast, zodat deze beter past bij de grootte.
    this.destroy = function() {
        this.r-=4;
        if (this.r < 6) {
            this.toDelete = true;
        }
        else if (this.nummer+1 < this.animatie.length) {
            if ((this.r == (this.animatie[this.nummer+1].width/2)+2) || (this.r == this.animatie[this.nummer+1].width/2-2)) {
                this.nummer++;
            }
        }
    }

}