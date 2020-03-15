function Shield(x) {
    this.x = x*width;
    this.y = 0.75*height;
    this.r = 60;
    this.toDelete = false;

    this.show = function() {
        noStroke();
        fill('blue');
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.destroy = function() {
        this.r-=4;
        if (this.r < 4) {
            this.toDelete = true;
        }
    }

}