const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var angle = 15;
var ball,ballImg;
var hoop,hoopImg;
var base,baseImg;
var trow,trowImg;
var botBas,ball;
var wallF;

function preload() {
hoopImg = loadImage("Imgs/Hoop.png");
baseImg = loadImage("Imgs/Base.png");
trowImg = loadImage("Imgs/Throw.png");
}

function setup() {
    createCanvas(500,300)
    engine = Engine.create();
    world = engine.world;

    var wallFOP = {
        isStatic: true
    };

    wallF = Bodies.rectangle(275,250,15,150,wallFOP)
    World.add(world,wallF) 

    botBas = new Trow(155,260,30,20,angle);
    ball = new BallBas(155,260);
    
    Engine.update(engine);

}
function draw() {
    background(102,51,51);

    botBas.display();

    ball.displayBall();
    
    push();
    fill("grey")
    rectMode(CENTER);
    rect(wallF.position.x,wallF.position.y,15,150)
    pop();
}