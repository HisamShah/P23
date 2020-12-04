var helicopterIMG, helicopterSprite, packageSprite,packageIMG, bg , bgimg;
var redb1 ,redb2, redb3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgimg=loadImage("11.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bg=createSprite(400,350,400,450)
	bg.addImage(bgimg)
	bg.scale=1.6;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	groundSprite.visible = true;

	redb1=createSprite(300,height-75,20,100);
	redb1.shapeColor=("red")
	
	redb2=createSprite(390,height-35,200,20)
	redb2.shapeColor=("red")
	
	redb3=createSprite(480,height-75,20,100);
	redb3.shapeColor=("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	redb2 = Bodies.rectangle(390, height-35, 200, 20 , {isStatic:true} );
 	World.add(world, redb2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  keyPressed(packageBody, false)
  drawSprites();
 
}

function keyPressed(Body, isStatic) {
    if (keyCode === DOWN_ARROW) {
       // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
       Matter.Body.setStatic(Body, isStatic)
     }
   }



