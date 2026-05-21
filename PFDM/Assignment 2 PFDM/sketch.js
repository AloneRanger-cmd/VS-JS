let button;
let lineHue = {mouseX}, {mouseY} 
function setup() {
  let cnv = createCanvas(800,600);
  cnv.position(0,0);
  button = createButton("submit");
  button.position(0, 0);
  button.mousePressed(buttonClicked);
  colorMode(HSB);
  strokeWeight(weight)
}
function buttonClicked(){
  console.log("Clicked");
}
function mouseDragged(){
    stroke(lineHue, 90, 90);
    line (pmouseX,pmouseY, mouseX, mouseY);
}