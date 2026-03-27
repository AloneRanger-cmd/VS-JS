// Programming for Digital Media
// Assignment 1 /
// Burak Atak – 3199405 – burakatak2001@gmail.com
function setup() {
    createCanvas(800, 800);
    // For Degrees instead of Radians.
    angleMode(DEGREES);
    // For centerıng the squares.
    rectMode(CENTER);
}

function draw() {
    background(0);
    noLoop();
    
    // The random function generates a random number between 0 and 1. If the generated number is greater than 0.5, the first block of code is executed, else second block of code is executed.
    let dice = random(1);
    // First Block
    if (dice > 0.5) {
        // Background triangles color is opposite compered to the second block.
        for (let x1 = 0; x1 < width+1; x1 += 50) {
            for (let y1 = 0; y1 < height+1; y1 += 50) {
                noFill();
                stroke(30);
                strokeWeight(1);
                // Creating two distinct rows of triangles by checking the y-coordinate. If the y-coordinate matches any of the specified values (50, 150, 250, etc.), it draws a triangle with a specific stroke color.
                if (y1 == 50 || y1 == 150 || y1 == 250 || y1 == 350 || y1 == 450 || y1 == 550 || y1 == 650 || y1 == 750) {   
                    triangle(x1+25, y1+50, x1, y1, x1+50, y1)
                } else {
                    stroke(random(255), random(110), random(20));
                    triangle(x1+25, y1+50, x1, y1, x1+50, y1)
                }
            }
        }
        // The nested loops iterate through the grid points at intervals of 200 pixels, starting from 200 and ending before the width and height of the canvas.
        for (let x = 200; x < width; x += 200) {
            for (let y = 200; y < height; y += 200) {
                // The innermost loop runs 80 times for each grid point, creating a series of arcs with varying sizes and colors. The variable 'wh' determines the width and height of the arcs, 
                // increasing with each iteration until it resets to 0 on the last iteration.
                for (let i = 0; i < 80; i++) {
                    let wh;
                    if (i < 79) {
                        wh = (i + 1) *  2.9;
                    } else {
                        wh = 0;
                    }
                    stroke(random(0), random(200), random(150));
                    strokeWeight(random(1, 5));
                    strokeCap(ROUND);
                    noFill();
                    // The if statement checks if the current coordinates (x, y) correspond to the corners of the grid (200, 200), (600, 200), (200, 600), and (600, 600). 
                    // If they do, it draws an arc at those positions. This simplyfies the code by eliminating the need for separate loops or conditions for the corners,
                    // allowing the same drawing logic to be applied to all points while only executing the arc drawing for the specified corner positions.
                    if (x == 200 && y == 200 || x == 600 && y == 200 || x == 200 && y == 600 || x == 600 && y == 600) {          
                        arc(x, y, wh, wh, random(0,360), random(0,360), OPEN);
                    } else {
                    }
                }
                // Square Drawing
                strokeWeight(random(5, 10));
                square(width/2, height/2, random(300, 400));
                square(width/2, height/2, random(600, 800));
            }
        }
    }
    // Second Block
    else {
        // Background triangles color is reversed compered to the first block.
        for (let x1 = 0; x1 < width+1; x1 += 50) {
            for (let y1 = 0; y1 < height+1; y1 += 50) {
                noFill();
                stroke(30);
                strokeWeight(1);
                // Creating two distinct rows of triangles by checking the y-coordinate. If the y-coordinate matches any of the specified values (50, 150, 250, etc.), it draws a triangle with a specific stroke color.
                if (y1 == 50 || y1 == 150 || y1 == 250 || y1 == 350 || y1 == 450 || y1 == 550 || y1 == 650 || y1 == 750) {   
                    triangle(x1+25, y1+50, x1, y1, x1+50, y1)
                } else {
                    stroke(random(0), random(200), random(150));
                    triangle(x1+25, y1+50, x1, y1, x1+50, y1)
                }
            }
        }
        // The nested loops iterate through the grid points at intervals of 200 pixels, starting from 200 and ending before the width and height of the canvas.
        for (let x = 200; x < width; x += 200) {
            for (let y = 200; y < height; y += 200) {
                // The innermost loop runs 80 times for each grid point, creating a series of arcs with varying sizes and colors. The variable 'wh' determines the width and height of the arcs, 
                // increasing with each iteration until it resets to 0 on the last iteration.
                for (let i = 0; i < 80; i++) {
                    let wh;
                    if (i < 79) {
                        wh = (i + 1) *  2.9;
                    } else {
                        wh = 0;
                    }
                    stroke(random(255), random(110), random(20));
                    strokeWeight(random(1, 5));
                    strokeCap(ROUND);
                    noFill();
                    // The if statement checks if the current coordinates (x, y) correspond to the corners of the grid (400, 200), (200, 400), (600, 400), and (400, 600). 
                    // If they do, it draws an arc at those positions. This simplyfies the code by eliminating the need for separate loops or conditions for the corners,
                    // allowing the same drawing logic to be applied to all points while only executing the arc drawing for the specified corner positions.      
                    if (x == 400 && y == 200 || x == 200 && y == 400 || x == 600 && y == 400 || x == 400 && y == 600) {          
                        arc(x, y, wh, wh, random(0,360), random(0,360), OPEN);
                    } else {
                    }
                    
                }
                // from push to pop, the code applies transformations to the drawing context, allowing for the creation of rotated squares at the center of the canvas.
                // this six lines of code are responsible for translating the origin to a new position, rotating the drawing context by 45 degrees,
                // setting a random stroke weight, and drawing a square with random size at the center of the canvas.
                // These six lines of code is inpired by 8: Translate and Rotate in p5.js: How to Code Generative Art by Steve"s Makerspace on YouTube.
                // Link for the video: https://www.youtube.com/watch?v=H9PeFYqi-V0
                push();
                translate(400, -165);
                rotate(45);
                strokeWeight(random(5, 10));
                square(width/2, height/2, random(200, 400));
                square(width/2, height/2, random(600, 800));
                pop();
            }
        }
    }
}
