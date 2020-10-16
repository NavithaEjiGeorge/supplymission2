var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


    // create Engine
	engine = Engine.create();
	world = engine.world;
    
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic : true} );
 	World.add(world,ground);
	g1 = new Box(300,600,30,150)
	g2 = new Box(500,600,30,150)
    g3 = new Box(400,630,200,30)
    z1 = new zombie(200,620,20,60)
	z2 = new zombie(100,620,20,60)
    z3 = new zombie(600,620,20,60)
    z4 = new zombie(700,620,20,60)
    p1 = new pe(150,620,20,60)
	p2 = new pe(50,620,20,60)
    p3 = new pe(650,620,20,60)
    p4 = new pe(750,620,20,60)
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("black");
  if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false); 
	push()
	textSize(40)
	strokeWeight(10);
    stroke("green");
	fill("brown")
	text("YOU DID IT",300,460)
	pop()
	}
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  g1.display()
  g2.display()
  g3.display()
  z1.display()
  z2.display()
  z3.display()
  z4.display()
  p1.display()
  p2.display()
  p3.display()
  p4.display()
  fill("white")
  text("Zombie apartments are shown in RED colour",200,50)
  text("Human apartments are shown in GREEN colour",200,100)
  text("The Locknio City is attacked by the zombies.Because of Zombies people are not allowed to go out",50,270)
  text("People cannot survive without food 🍔.",100,300)
  text("You are a sergeant on a military peacekeeping mission delivering  food to a designated drop zone(blue coloured) in a zombie infested city.",20,330)
  text("Press DOWN ARROW KEY to drop the basket of food",100,370)
}