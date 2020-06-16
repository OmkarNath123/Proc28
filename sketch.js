const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper;
var ground;
var log1;
var log2;
var log3;
function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;



	paper=new Paper(100, 650, 30,30)
	World.add(world, paper);
	
    ground=new Ground(400,390,800,20);
	World.add(world, ground);

	log1=new Stand(650,690,120,20);
	World.add(world, log1);
	
	log2=new Stand(600,575,20,150);
    World.add(world, log2);

    log3=new Stand(700,575,20,150);
	World.add(world, log3);
	
	bin=new Bin(650,615,20,20);
	World.add(world,bin);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("blue");
  ground.display();
  log1.display();
  log2.display();
  log3.display(); 
  paper.display();
  bin.display();
 drawSprites();
 
}

