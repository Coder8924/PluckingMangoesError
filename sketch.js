const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;
const Body = Matter.Body;

var boyImg,boy;
var stone;
var gulel;
var ground;
var treeObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world, engine;

function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(650,580,width,20)

  stone = new Rock(230,430,30);

  treeObj = new Tree();

  mango1 = new Mango(900,200,35);
  mango2 = new Mango(1050,100,35);
  mango3 = new Mango(950,20,35);
  mango4 = new Mango(1000,200,35);
  mango5 = new Mango(950,100,35);
  mango6 = new Mango(800,250,35);
  mango7 = new Mango(870,29,35);
  mango8 = new Mango(1150,200,35);
  mango9 = new Mango(1100,150,35);
  mango10 = new Mango(800,150,35);

  //gulel = new SlingShot(100,100,50,10);

}

function draw() {
  background("lightgrey");  
  Engine.update(engine);

ground.display();
stone.display();
treeObj.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

//gulel.display();

}

/*function mouseDragged() {
  if(gameState!=="launched") {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
}

function mouseReleased() {
gulel.fly();
gameState = "launched";
}
*/

function keyPressed() {
  if(keyCode===32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420})
    launcherObject.attach(stone.body);
  }
}