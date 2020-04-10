function Shield(x, y, animatie) {
    this.x = x*width;
    this.y = y;
    this.toDelete = false;
    this.animatie = animatie;
    this.nummer = 0;
    this.r = 60;
    this.nummer = 0;


    this.show = function() {
        image(this.animatie[this.nummer],this.x-this.r, this.y-this.r, this.r*2, this.r*2);
    }

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