const context = canvas.getContext('2d');
const player1 = new Player(0, 0, 100, 100, context);
const bg = new Bg(0, 0, width +1 , height, context);
const bg2 = new Bg(width-1, 0, width + 1, height, context);
function gameLoop() {

    // context.fillStyle = 'blue';
    // context.fillRect(0, 100, width, 100);
    context.clearRect(0, 0, width, height);
    bg.update();
    bg2.update()
    bg.draw();
    bg2.draw();
    player1.update();
    player1.draw();
    window.requestAnimationFrame(gameLoop)
}

gameLoop();