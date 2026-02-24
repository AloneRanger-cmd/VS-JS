function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(120);
    // To stop the loop after 20 circles are created.
    for (let i = 0; i < 20; i++) {
        //call for function 
        mousePressed(noLoop());
    }
}

// The funtion to crate random circles on random location and size and color.
function mousePressed() {  
    let x = random(0, windowWidth);
    let y = random(0, windowHeight);
    let size = random(10, 150);
    fill(random(255), random(255), random(255));
    ellipse(x, y, size, size);
}