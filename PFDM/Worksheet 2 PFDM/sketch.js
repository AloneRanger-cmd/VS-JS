function setup() {
    createCanvas(400, 400);
}

let x;
let y;


function draw() {
    background(232, 44, 44);
    strokeWeight(5)
    noLoop();
    fill(255);
    // First Y axis of dots +++++++++++++++++++++++++++++ using nested loop
    // Then X axis duplicated using nested loop
    for (let ix = 0; ix < 3; ix++) {
        X = 100 + ix * 100;
        for (let iy = 0; iy < 3; iy++) {
            Y = 100 + iy * 100;
            let s = random(10, 100);
            ellipse(X, Y, s, s);
        }
    }
}