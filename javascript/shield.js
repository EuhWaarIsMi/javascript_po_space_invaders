function Shield(x, y, image) {
    this.x = x*width;
    this.y = y;
    this.r = 60;
    this.toDelete = false;
    this.image = image;
    this.nummer = 1;

    this.show = function(nummer) {
        image(this.image,this.x-(this.image.width/2), this.y-(this.image.height/2));
    }

    this.destroy = function() {
        if(this.nummer == 5) {
            this.toDelete = true;
        } else {
            this.nummer++;
        }  
    }

}