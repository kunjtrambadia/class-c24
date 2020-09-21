class Box{
  

    constructor(x,y,b,h) {
       this.height = h;

       this.width = b;
       
        var option = {
            restitution:0.8
          }

        this.body = Bodies.rectangle(x,y,b,h,option)
        World.add(myWorld,this.body) 
    }

 boxDisplay()  {
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER)
    fill("blue");
     rect(0,0,this.width,this.height);
    pop();

 }
 
}