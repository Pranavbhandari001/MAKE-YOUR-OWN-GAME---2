

var bot,virus, Obstacles  ;

function setup(){
    createCanvas(1000,400);
  bot = createSprite(250,300,90,90)  
  bot.shapeColor="red";

Obstacles = createSprite(200,100,90,80);
Obstacles.shapeColor="Violet";
}
function draw(){
background("purple");

spawnObstacles();





spawnViruses();
   drawSprites();

}
 





function spawnObstacles(){
if (frameCount % 100 === 0){
    Obstacles = createSprite(200,100,90,80);
Obstacles.shapeColor="Violet";
Obstacles.velocityX =
}

};


function spawnViruses(){
 if(frameCount % 60 ===0) {
    virus = createSprite(800,150,50,50);
    virus.y = random(50,200);
    virus.velocityX=-5;
    virus.shapeColor="black";
    virus.lifetime = 200;
 }

}