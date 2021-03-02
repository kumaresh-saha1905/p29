
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var p,pimg;
var ground;
var ju,ju1,ju2,ju3,ju4,ju5,ju6,ju7,ju8,ju9,ju10;
var sling;
function preload()
{
	pimg=loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 300);
      

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
      ground=new Ground(600,height,1200,20);
        ju=new Gr(330,235.0,30,40);
        ju1=new Gr(360,235,30,40);
        ju2=new Gr(390,235,30,40);
        ju3=new Gr(420,235,30,40);
        ju4=new Gr(450,235,30,40);
        ju5=new Gr(360,195,30,40);
        ju6=new Gr(390,195,30,40);
        ju7=new Gr(420,195,30,40);
        ju8=new Gr(390,155,30,40);
        
       p=Bodies.circle(50,200,20);
       World.add(world,p);
        sling=new Throw(this.p,{x:100,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ju.display();
  
  ju1.display();  ju2.display();  ju3.display();  ju4.display();  ju5.display();  ju6.display();  ju7.display();  ju8.display();
  ground.display();
  
  image(pimg,p.position.x,p.position.y,40,40);

  sling.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.p,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}


