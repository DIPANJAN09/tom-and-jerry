var cat;
var mouse;
var garden;

function preload() {
    //load the images here
    gardenImage=loadImage("images/garden.png");
    mouseImage1=loadImage("images/mouse1.png");
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3=loadImage("images/mouse4.png");
    catImage1=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    catImage3=loadAnimation("images/cat4.png");


    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400,1000,800);
    garden.addImage("beautiful",gardenImage);
    garden.scale=1.5;

    cat=createSprite(770,700,20,20);
    cat.shapeColor="green";
    cat.addAnimation("tom",catImage1);
    cat.scale=0.2;


    mouse=createSprite(200,680,20,20);
    mouse.shapeColor="red";
    mouse.addImage("jerry",mouseImage1);
    mouse.scale=0.1;
    mouse.setCollider("rectangle",0,0,15,20);
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(mouse.isTouching(cat)){
        cat.addAnimation("tom",catImage3)
        cat.changeAnimation("tom",catImage3);
        cat.velocityX=0;

        mouse.addImage("jerry",mouseImage3);

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
      cat.velocityX=-3;
      cat.addAnimation("tom",catImage2);
      cat.scale=0.2;

      mouse.addAnimation("jerry",mouseImage2);
  }


}
