function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(255);
    noLoop();

    for (let X = 100; X < width; X += 100) {
        for (let Y = 100; Y < height; Y += 100) {
            for (let i = 0; i < 31; i++) {
                let wh;
                if (i < 30) {
                    wh = (i + 1) *  2.9;
                } else {
                    wh = 0;
                }
                stroke(random(0), random(200), random(150));
                strokeWeight(random(1, 5));
                strokeCap(ROUND);
                noFill();            
                arc(X, Y, wh, wh, random(0,360), random(0,360), OPEN);
            }
        }
    }
}

