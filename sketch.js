var sp1,sp2,sp3,sp4,sp5,sp6,sp7
function setup() {
  createCanvas(800,400);
  sp1 = createSprite(400, 300, 75, 225);
  sp2 = createSprite(480, 300, 75, 275);
  sp3 = createSprite(320, 300, 75, 275);
  sp4 = createSprite(255, 300, 50, 350);
  sp5 = createSprite(545, 300, 50, 350);
  sp6 = createSprite(585, 250, 25, 425);
  sp7 = createSprite(215, 250, 25, 425);
}

function draw() {
  background("black");  
  drawSprites();
}