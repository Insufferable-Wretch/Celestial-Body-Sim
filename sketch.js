// (Temporary) Object Setup
let posX, posY;
let speedX, speedY;
let diam, rad;

function setup() {
  myCanvas = createCanvas(400, 400);

  posX = width / 2;
  posY = height / 2;
  speedX = 2;
  speedY = 3;
  diam = 25;
  rad = diam / 2;
}

function draw() {
  background(50);

  fill(255);
  ellipse(posX, posY, diam);
  updatePos();
}

function updatePos() {
  // Contain Object in a Space (the Canvas)
  if (posX <= rad || posX >= width - rad) {
    speedX *= -1;
  }
  if (posY <= rad || posY >= height - rad) {
    speedY *= -1;
  }

  // Update Position
  posX += speedX;
  posY += speedY;
}

// Space Stuff

// -Equations
// --Gravitational Attraction Between Two Bodies
// F = G((m1m2) / d^2)
