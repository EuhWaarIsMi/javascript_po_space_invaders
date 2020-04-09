function Shield(x, y, animatie) {
    this.x = x*width;
    this.y = y;
    this.r = 60;
    this.toDelete = false;
    this.animatie = animatie;
    this.nummer = 1;

    this.show = function(nummer) {
        image(this.animatie[this.nummer],this.x-(this.animatie[this.nummer].width/2), this.y-(this.animatie[this.nummer].height/2));
    }

    this.destroy = function() {
        if(this.nummer == 5) {
            this.toDelete = true;
        } else {
            this.nummer++;
        }  
    }

}