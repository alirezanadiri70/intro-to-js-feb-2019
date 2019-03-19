class Bg {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    context = null;
    sx = 0;
    sy = 0;
    sw = width;
    sh = height;
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
        this.x  -= 1;
        if( this.x + width <= 0) {
            console.log('frame', frame, this.x);
            this.x = this.w -1;
        }
        if (this.x === 0) {
            console.log('frame', frame, this.x);
        }
    }


}