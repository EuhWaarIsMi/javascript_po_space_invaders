function Shield(x, y, animatie) {
    this.x = x*width;
    this.y = y;
    this.r = 60;
    this.toDelete = false;
    this.animatie = animatie;
    this.nummer = 0;


    this.show = function() {
        image(this.animatie,this.x-(this.animatie.width/2), this.y-(this.animatie.height/2));
    }

    this.destroy = function() {

    }

}