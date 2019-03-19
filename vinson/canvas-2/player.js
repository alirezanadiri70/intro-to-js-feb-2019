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
    motion = 0;
    ySpeed = -5;
    spriteFrame = 0;


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
            this.sx, this.sy + (70 * this.spriteFrame), this.sw, this.sh,
            this.x, this.y, this.w, this.h
        );
    }

    update() {
        this.motion += 0.20;
        this.y += this.ySpeed + this.motion;
        this.y++;
        this.y = this.y + 1;
        if(this.y > 520) {
            this.y = 520;
        }


        if (this.motion > 10) {
            this.motion = 10;
        }

        if (this.motion > 1) {
            this.spriteFrame = 0;
        } else {
            this.spriteFrame = 1;
        }
    }

    moveUp() {
        console.log('move up');
        this.motion = 0;
    }

}