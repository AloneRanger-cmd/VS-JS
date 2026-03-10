function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(120);
    noLoop();
    // Draw 20 random circles and squares
    for (let i = 0; i < 20; i++) {
        let x = random(0, windowWidth);
        let y = random(0, windowHeight);
        let size = random(10, 150);
        fill(random(255), random(255), random(255));
        ellipse(x, y, size, size);
        fill(random(255), random(255), random(255));
        square(x, y, size);
    }
}
