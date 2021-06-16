var path,pathImg,jaxon,jaxonImg
function preload(){
pathImg = loadImage("path.png")  //pre-load images
jaxonImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here()
  //background
  path = createSprite(200,200)
path.addImage(pathImg)
path.velocityY = 6


jaxon = createSprite(180,340)
jaxon.addAnimation("jaxon_running",jaxonImg)
jaxon.scale = 0.09

edeges=createEdgeSprites()
}

function draw() {
  background(0);
drawSprites();
jaxon.x=World.mouseX
jaxon.collide(edeges)
if (path.y>400) {
  path.y = height/2
}
}
