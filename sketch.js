
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananasGroup, obstaclesGroup
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(550,400);
  
//creating monkey
  monkey = createSprite(80,315,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x)
}


function draw() {
  background("lightblue");
  stroke("white");
  text(20);
  fill("white");
  text("score : "+score,450,50);
  
  stroke("black");
  text(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  
  if(ground.x > 0){
  ground.x = ground.width/2;
  } 
  
  
  if(keyDown("space")&&monkey.y >=100){
   monkey.velocityY = -12;  
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  //call food and obstacle group
  bananas();
  obstacles();
  
  drawSprites();
}

function obstacles(){
  
  if(frameCount%300===0){
    var obstacle  = createSprite(500,315,10,10);
    obstacle.velocityX = -6;
    obstacle.scale = 0.2;
    obstacle.lifetime = 200;
    obstacle.addImage(obstacleImage);
    
    //obstaclesGroup.add(obstacle);
  }
}

function bananas(){
  
  if(frameCount%80===0){
    var banana  = createSprite(500,100,20,20);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -6;
    banana.scale = 0.1;
    banana.lifetime = 200;
    banana.addImage(bananaImage);
    
    //bananasGroup.add(banana);
  }
}



