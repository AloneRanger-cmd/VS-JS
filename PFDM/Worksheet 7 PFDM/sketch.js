let gameMode = 0;
let chick;
let wolf;
let rooster;
let cx = 50;
let cy = 50;
let wx = 200;
let wy = 200;
let rx = 350;
let ry = 350;

function setup() {
    createCanvas(500, 500);
}
function preload() {
    chick = loadImage('chick.png');
    wolf = loadImage('wolf.png');
    rooster = loadImage('rooster.png');
}
function draw() {
    if (gameMode == 0) {
        background(0, 255, 0);
        if (keyIsPressed) {
            
            if (keyCode == UP_ARROW) {
                cy--;
            }
            else if (keyCode == DOWN_ARROW) {
                cy++;
            }
            else if (keyCode == LEFT_ARROW) {
                cx--;
            }
            else if (keyCode == RIGHT_ARROW) {
                cx++;
            }
            else {
                console.log("Use the arrow keys to move the chick.");
                console.log(key)
            }
        }
        image(chick, cx, cy, 50, 50);
        image(wolf, wx, wy, 50, 50);
        image(rooster, rx, ry, 50, 50);
        let d1 = dist(cx, cy, wx, wy);
        let d2 = dist(cx, cy, rx, ry);
        if (d1 < 50) {
            gameMode = 1;
        }
        if (d2 < 50) {
            gameMode = 2;
        }
      
    }
    if (gameMode == 1) {
        background(255, 0, 0);
        text("You Lose!", 200, 250);
    }
    if (gameMode == 2) {
        background(0, 0, 255);
        text("You Win!", 200, 250);
    }

}
