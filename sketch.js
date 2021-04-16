const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2
var box1
function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

     ground1=new ground(600,380,1200,10)
     ground2=new ground(400, 300, 200, 10)

     box1=new box(400,200,20,20)
}
function draw(){
    background('white')
    Engine.update(engine);
ground1.display()
ground2.display()

box1.display()

}
