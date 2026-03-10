function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
}

function draw() {
    background(0);
    noLoop();
    noStroke();
    fill(255, 0, 0);
    let r = 90;
    for (let x = 50; x < width; x += 100) {
        for (let y = 50; y < height; y += 100) {
            let i = random(100);
            console.log(i);
            if (i > 25) {
                ellipse(x, y, r, r);
            } else {
                rect(x,y , r, r);
            }
        }
    }
}
