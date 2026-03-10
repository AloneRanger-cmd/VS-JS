function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}
let wh = 0;

function draw() {
    background(255);
    noLoop();
    for (let ix = 0; ix < 3; ix++) {
        let dotX = 100 + ix * 100;
        for (let iy = 0; iy < 3; iy++) {
            let dotY = 100 + iy * 100;
            for (let i = 0; i < 31; i++) {
                wh = i < 30 ? wh + 2.9 : 12;
                stroke(30)
                strokeWeight(1.5);
                strokeCap(ROUND);
                noFill();            
                arc(dotX, dotY, wh, wh, random(0,360), random(0,360), OPEN);
            }
        }
    }
}
    
