function Shield(x, y, image) {
    this.x = x*width;
    this.y = y;
    this.r = 60;
    this.toDelete = false;
    this.image = image;


    this.show = function() {
        image(this.image,this.x, this.y);
    }

    this.destroy = function() {

    }

}