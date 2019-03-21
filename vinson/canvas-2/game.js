const context = canvas.getContext('2d');
const player1 = new Player(0, 0, 100, 100, context);
const bg = new Bg(0, 0, width, height, context);
const bg2 = new Bg(width, 0, width, height, context);
let frame = 0;
const flapAudio = document.createElement('audio');
flapAudio.src = './flap.mp3';


document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        player1.moveUp();
    }
} );


function gameLoop() {
    ++frame;

    // context.fillStyle = 'blue';
    // context.fillRect(0, 100, width, 100);
    context.clearRect(0, 0, width, height);
    bg.update();
    bg2.update();
    bg.draw();
    bg2.draw();
    player1.update();
    player1.draw();
    window.requestAnimationFrame(gameLoop)
}

gameLoop();