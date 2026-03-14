function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    angleMode(DEGREES);
}
let r = 90;
function draw() {
    background(0);
    noLoop();
    noStroke();
    fill(255, 0, 0);
    // Draw a grid of shapes with random sizes and types
    for (let x = 50; x < width; x += 100) {
        for (let y = 50; y < height; y += 100) {
            let i = random(100);
            console.log(i);5
            if (i > 33 && i < 66) {
                ellipse(x, y, r, r);
            } else if (i > 66)  {
                arc(x, y, r, r, random(0,360), random(0,360), PIE);
            } else {
                rect(x, y, r, r);
            }
        }
    }
}