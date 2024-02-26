// In the future, I'll utilize a list of objects for a couple of functions
// let objects = [];
let myCanvas;
let object1;

function setup() {
  myCanvas = createCanvas(400, 400);

  // (Temporary) Object Placement
  object1 = new Object(width / 2, height / 2, random(1, 5), random(1, 5), random(50, 200), random(30, 90));
}

function draw() {
  background(50);
  
  object1.display();
  object1.updatePos();
}

class Object {
  constructor(posX, posY, velX, velY, mass, diam, rad = diam / 2) {
    this.posX = posX;
    this.posY = posY;

    this.velX = velX;
    this.velY = velY;

    // The variable 'mass' is not yet implemented in any significant way for the time being
    this.mass = mass;
    this.diam = diam;
    this.rad = rad;
  }
  display() {
    fill(255, 40, 80);
    ellipse(this.posX, this.posY, this.diam);
  }
  // ALL changes to an object's positional potential --- no matter how miniscule --- must reside here
  updatePos() {
    // Contain Object in a Space (the Canvas)
    if (this.posX <= this.rad || this.posX >= 400 - this.rad) {
      velX *= -1;
    }
    if (this.posY <= this.rad || this.posY >= 400 - this.rad) {
      this.velY *= -1;
    }

    // Calculate Gravitational Force

    // Update Position
    this.posX += this.velX;
    this.posY += this.velY;
  }
}

// In the future, I'll allow the user to click upon the canvas and summon a new object
// function mouseClicked() {
//   new Object(mouseX, mouseY, random(1, 4), random(1, 4), random(50, 200), random(30, 90));
// }

// Space Stuff (Mathematics)

// -Equations
// --Gravitational Attraction Between Two Bodies
// ---F = G((m1m2) / r^2)
// --Velocity Vector
// ---V = sqrt(v.x^2 * v.y^2)
