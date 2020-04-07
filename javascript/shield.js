function Shield(x, y, animatie) {
    this.x = x*width;
    this.y = y;
    this.r = 60;
    this.toDelete = false;
    this.animatie = animatie;
    this.nummer = 1

    this.show = function(nummer) {
        image(this.animatie[this.nummer], this.x, this.y);
    }

    this.destroy = function() {
        if(this.nummer == 5) {
            this.toDelete = true;
        } else {
            this.nummer++;
        }  
    }

}