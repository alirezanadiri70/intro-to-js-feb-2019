console.log('player');

class Player {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    context = null;
    sx = 362;
    sy = 81;
    sw = 80;
    sh = 70;
    constructor(x, y, w, h, context) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.context = context;
        console.log(img);
    }

    draw() {
        this.context.drawImage(img,
            this.sx, this.sy, this.sw, this.sh,
            this.x, this.y, this.w, this.h
        );
    }

    update() {
        this.y += 1;
        this.y++;
        this.y = this.y + 1;

        if(this.y > height) {
            this.y = -100;
        }
    }
}