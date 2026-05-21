let lineColor = [];

function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < width; i++) {
        lineColor[i] = color(random(255), random(255), random(255));
        noLoop();
    }
}

function draw() {
    background(220);
    for (let i = 0; i < width; i++) {
        stroke(lineColor[i]);
        line(i, 0, i, height);
        console.log(lineColor[i]);
    }
}
function mousePressed() {
    for (let i = 0; i < width; i++) {
        lineColor[i] = color(random(255), random(255), random(255));
    }
    redraw();
}