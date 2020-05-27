var ball,ballImage;
    
var paddle , paddleImage;

var invisibleBorder , invisibleBorder2; 

function preload() {
 ballImage = loadImage("ball.png");
  
 paddleImage = loadImage("paddle.png"); 
  
}
function setup() {
  createCanvas(600, 450);
   ball = createSprite(300,150,10,10);
   ball.addImage(ballImage);
   ball.velocityX = -9 ;
   ball.velocityY = -6 ;
  
   paddle = createSprite(150,120,10,10);
   paddle.addImage(paddleImage);
  
}

function draw() {
  background(205,153,0);
  
 
  
  edges=createEdgeSprites();
  
  ball.bounceOff(paddle, randomVelocity);
  
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  if(keyWentDown("UP_ARROW")){
    paddle.y = paddle.y-20 ;
    }
  
  if(keyWentDown("DOWN_ARROW")){
    paddle.y = paddle.y+20 ;
  }
  
  
  
  
  
  drawSprites();
}

function randomVelocity(){

 ball.velocityY = random(-5 , 7);  


}

  
