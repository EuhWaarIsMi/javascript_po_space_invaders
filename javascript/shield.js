function Shield(x, y, animatie) {
    this.x = x*width;
    this.y = y;
    this.toDelete = false;
    this.animatie = animatie;
    this.nummer = 0;
    this.r = 60;
    this.nummer = 0;


    this.show = function() {
        noStroke();
        fill('blue');
        ellipse(this.x, this.y, this.r*2, this.r*2);
        image(this.animatie[this.nummer],this.x-this.r, this.y-this.r, this.r*2, this.r*2);
    }

    this.destroy = function() {
        this.r-=4;
        if (this.r < 4) {
            this.toDelete = true;
        }
        else if (this.r == 32) {
            this.nummer++;
        }
    }

}