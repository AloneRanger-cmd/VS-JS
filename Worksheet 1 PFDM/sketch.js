function setup() {
    createCanvas(800, 600);
    angleMode(DEGREES); // Set angle mode to Degrees for arc function
    
}
// Global variables for initial food coordinates
let foodX = 150;
let foodY = 250;

function draw() {
    background(0);
    // Display the mouse coordinates at the top left corner for ease of use in drawing the shapes at specific locations.
    fill(255);
    noStroke();
    text(mouseX+"----" + mouseY, 20, 20); 
    // Call the pacman function to draw the pacman
    pacman();
    // Loop for foods
    for (let i = 0; i < 5; i++, foodX = 100 + i * 100) {
        food(foodX);
    }
    for (let i = 0; i < 4; i++, foodY = 150 + i * 100) {
        food(foodY);
    }
    // Call the ghost function to draw the ghost
    ghost();
    // Call the lines function to draw the lines
    lines();
}

// The funtion to crate random circles on random location and size and color.
function pacman() {
    noStroke();
    fill(255, 255, 0); // Yellow color for Pacman
    arc(100, 250, 150, 150, 45, 315, PIE); // Draw Pacman 
}
function ghost() {
    fill(255, 0, 0); // Red color for ghost
    ellipse(650, 230, 100, 100); // Draw ghost head as a circle
    rect(600, 230, 100, 70); // Draw ghost body
    fill(0, 0, 0); // Black color for ghost lower body 
    triangle(650, 300, 700, 300, 675, 270); // Draw ghost's wavy bottom using a triangle
    triangle(600, 300, 650, 300, 625, 270); // Draw ghost's wavy bottom using a triangle
    fill(255); // White color for ghost eyes
    ellipse(630, 210, 20, 40); // Left eye
    ellipse(670, 210, 20, 40); // Right eye
    fill(0); // Black color for ghost pupils
    ellipse(625, 210, 10, 20); // Left pupil
    ellipse(665, 210, 10, 20); // Right pupil
}
function food(){
    fill(255, 250, 250); // White color for food
    ellipse(foodX, 250, 50, 50); // Draw food as a small circle for horizontal line
    ellipse(700, foodY, 50, 50); // Draw food as a small circle for vertical line
}
function lines(){
    stroke(0,0,255); // Blue color for lines
    strokeWeight(8)
    line(0, 50, 800, 50) // 1st Horizontal line
    line(0, 100, 800, 100) // 2nd Horizontal line
    line(0, 400, 600, 400) // 3rd Horizontal line
    line(0, 450, 550, 450) // 4th Horizontal line
    line(600, 400, 600, 600) // 1st Vertical line
    line(550, 450, 550, 600) // 2nd Vertical line
}