function Shield(x, y) {
    this.x = x*width;
    this.y = y;
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