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
    square(x, y, size);
}





function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(120);
    pacman();
    ghost();
    food();
    lines();
}

// The funtion to crate random circles on random location and size and color.
function pacman() {
    
}
function ghost() {
        
}
function food(){

}
function lines(){
    stroke("blue")
    strokeWeight(8)
    line(0, 20, 800, 20)
    line(0, 60, 800, 60)
    line(0, 400, 600, 400)
    line(0, 440, 560, 440)
    line(600, 400, 600, 600)
    line(560, 440, 560, 600)
}




function setup() {
    createCanvas(800, 600);  
}
// Global variables for initial dot coordinates
let dotX = 150;
let dotY = 250;
let d = random(20, 60)

function draw() {
    background(250, 0 ,0 );
    // Display the mouse coordinates at the top left corner for ease of use in drawing the shapes at specific locations.
    stroke(0);
    fill(255);
    noStroke();
    text(mouseX+"----" + mouseY, 20, 20); 
    // Loop for foods
    for (let i = 0; i < 5; i++, dotX = 150 + i * 100) {
        dots(dotX);
    }
}

// The funtion to crate random circles on random location and size and color.

function dots(){
    fill(255, 250, 250); // White color for dots
    ellipse(dotX, dotY, d, d);
}
