class Player extends GameObject {
    spriteDelay = 10;
    xSpeed = 0;
    ySpeed = 0;
    xMaxSpeed = 10;
    xDirection = 0;
    xLastDirection = -1;
    sprites = {
        standing: [
            {
                x: 0,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 2,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 3,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 4,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 5,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 6,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 7,
                y: 0,
                w: 80,
                h: 100,
            },
        ],
        walking: [
            {
                x: 0,
                y: 99,
                w: 80,
                h: 100,
            },
            {
                x: 80,
                y: 99,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 2,
                y: 99,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 3,
                y: 99,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 4,
                y: 99,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 5,
                y: 99,
                w: 80,
                h: 100,
            },
        ],
        walkingAim: [
            {
                x: 0,
                y: 96 * 2,
                w: 80,
                h: 100,
            },
            {
                x: 80,
                y: 96 * 2,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 2,
                y: 96 * 2,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 3,
                y: 96 * 2,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 4,
                y: 96 * 2,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 5,
                y: 96 * 2,
                w: 80,
                h: 100,
            },
        ],
        standingAim: [
            {
                x: 80,
                y: 96 * 2,
                w: 80,
                h: 100,
            },

        ],
        ducking: [
            {
                x: 80,
                y: 92 * 3,
                w: 80,
                h: 100,
            },

        ],
    };
    
    constructor(x,y,w,h, context, sprite)  {
        super(x,y,w,h, context, sprite) ;
    }

    update(keys) {

        this.xDirection = ( (keys['ArrowRight'] ? 1 : 0) + (keys['ArrowLeft'] ? -1 : 0 ) );
        this.aiming = keys['KeyA'];
        this.duck = keys['Space'];
        if (Math.sign(this.xDirection)) {
            this.xLastDirection = this.xDirection;
        }
        this.moveX(this.xDirection);
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    moveX(direction) {
        this.xSpeed += direction * 1;
        if (this.xSpeed >= this.xMaxSpeed) {
            this.xSpeed = this.xMaxSpeed;
        }
        if (this.xSpeed <= -this.xMaxSpeed) {
            this.xSpeed = -this.xMaxSpeed;
        }
        if (direction === 0) {
            this.xSpeed += -Math.sign(this.xSpeed);
        }

        switch(Math.sign(this.xSpeed)) {
            case -1:
                this.currentAction = this.aiming? 'walkingAim': 'walking';
                break;
            case 0:
                this.currentAction = this.aiming ? 'standingAim' : 'standing';
                break;
            case 1:
                this.currentAction = this.aiming ? 'walkingAim': 'walking';
                break;
            default:
                this.currentAction = 'walking';

        }
        this.spriteDelay =  this.xMaxSpeed - Math.abs(this.xSpeed);
    }

}