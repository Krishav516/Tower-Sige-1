const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;

var polygon;

var ground1, ground2;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;

var block1a, block2a, block3a, block4a, block5a, block6a, block7a, block8a, block9a;

var slingShot;


function preload(){

}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  
 polygon = new Polygon(100,400,15,15)

 ground1 = new Ground(500,600,250,10);
 ground2 = new Ground(900,500,240,10)

 block1 = new Box(420,590,30,50);
 block2 = new Box(440,590,30,50);
 block3 = new Box(470,590,30,50);
 block4 = new Box(500,590,30,50);
 block5 = new Box(530,590,30,50);
 block6 = new Box(560,590,30,50);
 block7 = new Box(570,590,30,50);
 block8 = new Box(440,560,30,50);
 block9 = new Box(470,560,30,50);
 block10 = new Box(500,560,30,50);
 block11 = new Box(530,560,30,50);
 block12 = new Box(560,560,30,50);
 block13 = new Box(470,540,30,50);
 block14 = new Box(500,540,30,50);
 block15 = new Box(530,540,30,50);
 block16 = new Box(500,492,30,50);

 block1a = new Box(835,490,30,50);
 block2a = new Box(860,490,30,50);
 block3a = new Box(890,490,30,50);
 block4a = new Box(920,490,30,50);
 block5a = new Box(950,490,30,50);
 block6a = new Box(860,460,30,50);
 block7a = new Box(890,460,30,50);
 block8a = new Box(920,460,30,50);
 block9a = new Box(890,400,30,50);

 slingShot = new SlingShot(polygon.body,{x:100, y:400})

}

function draw(){

 background(205);

 Engine.update(engine);

 ground1.display();
 ground2.display();

 fill("skyblue");
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();

 fill("pink");
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();

 fill("green");
 block13.display();
 block14.display();
 block15.display();

 fill("grey");
 block16.display();

 fill("skyblue");
 block1a.display();
 block2a.display();
 block3a.display();
 block4a.display();
 block5a.display();

 fill("pink");
 block6a.display();
 block7a.display();
 block8a.display();

 fill("grey");
 block9a.display();

 slingShot.display();
 polygon.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
 slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body, {x: 240, y: 500})
		slingShot.attach(polygon.body);
		}
}
