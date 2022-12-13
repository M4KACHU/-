console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')

console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')

console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')

console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')

console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.error ('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
console.warn('oi')
var jumpsound; 
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var checkpointsound;
var diesound;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var gameovemg;
var cloud, cloudsGroup, cloudImage;
var resetemg;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  gameovemg = loadImage("gameOver.png")
  resetemg = loadImage("restart.png")
  groundImage = loadImage("ground2.png");
  checkpointsound = loadSound("checkpoint.mp3")
diesound = loadSound("die.mp3")
  cloudImage = loadImage("cloud.png");
  jumpsound = loadSound("jump.mp3")
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");

}

function setup() {
  createCanvas(windowWidth , windowHeight )
  obstacle1.scale = 0.01;
  obstacle2.scale = 0.01;
  obstacle3.scale = 0.01;
  obstacle4.scale = 0.01;
  obstacle5.scale = 0.01;
  obstacle6.scale = 0.01;
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided" , trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  gameove = createSprite(300,300)
  gameove.addImage(gameovemg)
  resete = createSprite(300,140)
  resete.addImage(resetemg)
  gameove.scale = 0.5
  resete.scale = 0.5
  gameove.visible  = false
  resete.visible  = false
  // crie grupos de obstaculos e nuvens 
  obstaclesGroup = new Group();
  cloudsGroup = new Group();
  
  console.log("Olá" + 5);
  
  score = 0;
  trex.setCollider("circle" , 0 , 0 ,40 )
}

function draw() {
  background(180);
  background("White")
  text("Pontuação: "+ score, 500,50);

  if(gameState === PLAY){
    //mover o solo
    ground.velocityX = -4; 
    if (touches.length > 0 || keyDown("SPACE") && trex.y >= height-120) {
      trex.velocityY = -13;
      jumpsound.play()
      touches = []
    }
    score = score + Math.round(frameCount/60);
    if(keyDown("space")&& trex.y >= 100) {

    }
    
    trex.velocityY = trex.velocityY + 0.8
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
     //gerar as nuvens
  spawnClouds();
  
  //gerar obstáculos no chão
  spawnObstacles();
if (obstaclesGroup.isTouching(trex)) {
  gameState = END
}

}
else if (gameState === END) {
  gameove.visible = true
  resete.visible = true
  ground.velocityX = 0
  trex.velocityY = 0
  trex.changeAnimation("collide"  , trex_collided)
  obstaclesGroup.setLifetimeEach(-1);
  cloudsGroup.setLifetimeEach(-1);
  obstaclesGroup.setVelocityXEach(0);
  cloudsGroup.setVelocityXEach(0);
  if (mousePressedOver(resete)) {
    teupaidecalcinha()
  }
}

drawSprites();
trex.collide(invisibleGround);
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,165,10,40);
   obstacle.velocityX = -6;

   
    // //gerar obstáculos aleatórios
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1); 
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   
    //atribua dimensão e tempo de vida aos obstáculos          
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //adicionando obstáculos ao grupo
   obstaclesGroup.add(obstacle);
  }
}




function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
     cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.2;
    cloud.velocityX = -3;
    
     //atribua tempo de vida à variável
    cloud.lifetime = 134;
    
    //ajustar a profundidade
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //adicionando nuvens ao grupo
   cloudsGroup.add(cloud);
  }

    
}
function teupaidecalcinha() {
      gameState = PLAY
      gameove.visible = false
      resete.visible = false
      obstaclesGroup.destroyEach()
      cloudsGroup.destroyEach()
      score = 0    
}