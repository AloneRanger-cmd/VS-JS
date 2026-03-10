function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}
let wh = 0;

function draw() {
    background(255);
    noLoop();
    for (let dotX = 100; dotX < 400; dotX += 100) {
        for (let dotY = 100; dotY < 400; dotY += 100) {
            for (let i = 0; i < 31; i++) {
                let wh = i < 30 ? (i + 1) * 2.9 : 0;
                stroke(30)
                strokeWeight(1.3);
                strokeCap(ROUND);
                noFill();            
                arc(dotX, dotY, wh, wh, random(0,360), random(0,360), OPEN);
            }
        }
    }
}
    
