const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var target1,target2,target10target3,target4,target5,target6,target7,target8,target9;
var backgroundImg,platform;
var ball, slingshot;

var gameState = "onSling";
var back;
var score = 0;

function preload() {
    back=loadImage("assets/bg.png");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,200,1200,20);
    platform = new Ground(150, 305, 300, 170);

    
    target1 = new Target(810, 350);
    target2 = new Target(810, 410);
    target3 = new Target(810, 470);
    target4 = new Target(810, 530);
    target5 = new Target(810, 590);
    target6 = new Target(810, 650);
    target7 = new Target(810, 710);
    target8 = new Target(810, 770);
    target9 = new Target(810, 830);
    ball = new Ball(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    for (var i=0; i<=100;i=i+0.1){
        if(i=>100 && win != true){
            text("You Lose",200,200);
        }

    }

function draw(){
   background(back);
    
    Engine.update(engine);
    if (win=true){
        text("You have won",200,200);
    }
   
    
    ground.display();
    platform.display();
    slingshot.display();  
    target1.display();
    target2.display();
    target3.display();
    target4.display();
    target5.display();
    target6.display();
    target7.display();
    target8.display();
    target9.display();
    ball.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}
 function win(){
    target1.Visiblity < 0 && target1.Visiblity > -1005 && target2.Visiblity < 0 && target2.Visiblity > -1005 && target3.Visiblity < 0 && target3.Visiblity > -1005 && target4.Visiblity < 0 && target4.Visiblity > -1005 && target5.Visiblity < 0 && target5.Visiblity > -1005 && target6.Visiblity < 0 && target6.Visiblity > -1005 && target7.Visiblity < 0 && target7.Visiblity > -1005 && target8.Visiblity < 0 && target8.Visiblity > -1005 && target9.Visiblity < 0 && target9.Visiblity > -1005;
 }

}
