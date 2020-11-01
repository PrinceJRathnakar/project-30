const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var score=0



function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
  world = engine.world;
  

  ground1= new Ground(300,400,200,10)
  polygon=new Polygon(150,200,30,30)
  sling =new Slingshot(polygon.body,{x:150, y:200});
  box1=new Box(250,380,20,20)
  box2=new Box(275,380,20,20)
  box3=new Box(300,380,20,20)
  box4=new Box(325,380,20,20)
  box5=new Box(350,380,20,20)
  box6=new Box(275,350,20,20)
  box7=new Box(300,350,20,20)
  box8=new Box(325,350,20,20)
  box9=new Box(300,320,20,20)
 
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);  
  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

  ground1.display();
  polygon.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  

  
  
  drawSprites();
}
function mouseDragged(){
  
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
  sling.fly();
  
}
function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(polygon.body,{x:200,y:50})
  sling.attach(polygon.body);
  }
}
