const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var player;
var engine, world;


var backgroundImg;

function preload(){
  backgroundImg = loadImage("sketch_backup.js");
}
function setup() {
  canvas = createCanvas(displayWidth + 175, displayHeight-30);
  
  
  player = createSprite(900, 700, 50, 50);
  player.addImage("player", player_img);
  player_img = loadImage("sprites/ship.png");
  player.velocity.x = 0;
  player.velocity.y = 0;
  var pressed = false;
}

function draw() {
    background(backgroundImg);  
    player.display();
    
    player.addImage(player_img)
}

function keyPressed() {
  if(keyCode === 37){
    player.velocityX = -5;
  } else{
    player.velocityX = 0;
  }
  if(keyCode === 39){
    player.velocity.x = 5;
    pressed = true;
  }
  
  if(pressed = false){
    player.velocity.x = 0;
    player.velocity.y = 0;
  }

  
}