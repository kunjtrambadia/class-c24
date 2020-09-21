const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

var myEngine;

var myWorld;

var box,box1,ground;

function setup() {
  createCanvas(800,400);
  
myEngine = Engine.create()
myWorld = myEngine.world;

var ground_options = {
  isStatic:true
}
ground = Bodies.rectangle(400,400,800,10,ground_options)
World.add(myWorld,ground)

box = new Box (310,200,100,100);

box1 = new Box (300,250,50,50);



}

function draw() {
  background(255,255,200);  
Engine.update(myEngine)

box.boxDisplay ();

box1.boxDisplay ();

fill("red");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,10);



  
}