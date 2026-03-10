function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(44, 255, 44);
    strokeWeight(3)

    for (let x = 0; x < width; x += 10) {
        line(x, 50, x + 10, 550)
    }
}