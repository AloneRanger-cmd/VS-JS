function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255);
    noLoop();
    stroke(0)
    strokeWeight(3);
    for (let x = 25; x < width; x += 50) {
        for (let y = 25; y < height; y += 50) {
            let r = random(5, 48);
            fill(random(0, 255), random(0, 255), random(0, 255));
            ellipse(x, y, r, r)
        }
    }
}