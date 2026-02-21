function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(232, 44, 44);
    strokeWeight(5)
    noLoop();
    fill(255);
    // First Y axis of dots created using nested loop
    // Then X axis duplicated using nested loop
    for (let ix = 0; ix < 3; ix++) {
        let dotX = 100 + ix * 100;
        for (let iy = 0; iy < 3; iy++) {
            let dotY = 100 + iy * 100;
            let s = random(10, 100);
            ellipse(dotX, dotY, s, s);
        }
    }
}