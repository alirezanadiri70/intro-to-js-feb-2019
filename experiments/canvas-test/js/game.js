class Game {
    body = null;
    canvas = null;
    sprites = [];
    gameObjects = [];
    w = 600;
    h = 500;
    keys = {

    };
    constructor() {

    }
    run() {
        this.body = document.body;
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.body.appendChild(this.canvas);
        this.sprites.push(document.createElement('img'));
        this.sprites[this.sprites.length -1 ].src = './hero.png';
        document.addEventListener('keydown', function (e) {
            this.keys[e.code] = true;
        }.bind(this));
        document.addEventListener('keyup', function (e) {
            this.keys[e.code] = false;
        }.bind(this));
        this.reset();
    }

    reset() {
        this.body.style.backgroundColor = 'aqua';
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.canvas.style.border = '1px solid black';
        this.play();
    }

    play() {
        this.gameObjects.push(new Player(100, 350, 100, 100, this.context, this.sprites[0]));
        this.gameObjects.push(new Player(100, 250, 100, 100, this.context, this.sprites[0]));
        this.loop();
    }

    loop() {
        this.clear();
        if (!this.gameObjects) return;
        this.gameObjects.forEach( obj => {
            obj.update(this.keys);
        });
        this.gameObjects.forEach( obj => {
            obj.updateSprite();
        });
        this.gameObjects.forEach( obj => {
            obj.draw();
        });

        window.requestAnimationFrame(this.loop.bind(this))
    }

    clear() {
        this.context.clearRect(0, 0, this.w, this.h);
    }
}