function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}
let wh = 0;

function draw() {
    background(255);
    noLoop();
    for (let X = 100; X < 400; X += 100) {
        for (let Y = 100; Y < 400; Y += 100) {
            for (let i = 0; i < 31; i++) {
                let wh = i < 30 ? (i + 1) * 2.9 : 0;
                stroke(30)
                strokeWeight(1.3);
                strokeCap(ROUND);
                noFill();            
                arc(X, Y, wh, wh, random(0,360), random(0,360), OPEN);
            }
        }
    }
}
    
