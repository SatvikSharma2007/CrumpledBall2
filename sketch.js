
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbinImg;

function preload()
{
	dustbinImg=loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(200,600);
	d1=new Dustbin(520,660,10,60);
	d2=new Dustbin(580,685,130,10);
	d3=new Dustbin(650,660,10,60);
  	ground=new Ground();
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(120);
  fill("red")
  ground.display();
  paper1.display();
  d1.display();
  d2.display();
  d3.display();
  image(dustbinImg,510,630,150,60);

}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}



