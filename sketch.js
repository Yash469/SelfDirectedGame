var hero, enemy, scene,rock, bullet;

var heroImage, sceneImage, bulletImage, enemyImage;

var enemyGroup;

var PLAY, END;

var gameState = PLAY;

var score = 0;



function preload(){


sceneImage = loadImage("Volcano Background.jpg");
enemyImage = loadImage("Enemy.png");
heroImage = loadImage("Hero.png");
bulletImage = loadImage("bullet.png");
rockImage = loadImage("Rock.png");

}





function setup() {
createCanvas(800, 800);


scene = createSprite(600,100,1600,800);
scene.addImage(sceneImage);
scene.scale = 2;

ground = createSprite(100,600,1400,10);


hero = createSprite(100,500,10,10);
hero.addImage(heroImage);
hero.scale = 0.3;
hero.setCollider
("circle", 0,0,hero.radius);

hero.debug = false;

enemyGroup = createGroup();


score = 0;


  
}

function draw() {
  background(0);

scene.velocityX = -3;

ground.visible = false;

if(gameState === PLAY){

  spawnEnemies();

  if(scene.x < 160){
    scene.x = scene.width/2;
     }

  if(keyDown("UP") && hero.y >= 500){
     hero.velocityY = -16
  }
       
  if(enemyGroup.isTouching(hero)){
    gameState === END;
  }

}

else if(gameState === END){

scene.velocityX = 0;
enemyGroup.setVelocityXEach(0);


}

hero.velocityY = hero.velocityY + 0.8;

hero.collide(ground);




drawSprites();
  
}

function spawnEnemies(){

  if(frameCount % 150 === 0) {
    
    var enemy = createSprite(600,500,20,20)
    enemy.addImage(enemyImage);
    enemy.velocityX = -6;
    enemy.scale = 0.7;
    
    enemy.lifetime = 160;
    enemyGroup.add(enemy);

 }
}

//function spawnBullets(){

  //if(keyDown("space")){
    //var bullet = createSprite(100,200,20,20);
    //bullet.addImage(bulletImage);
    //bullet.velocityX = 7;
  //}

  //if(bullet.isTouching(enemy)){

    //bullet.destroyEach();
    //enemy.destroy();
  //}
//}